  // TextNode.js
  import React, { useState, useRef, useEffect } from 'react';
  import { Handle, Position } from 'reactflow';
  import { BaseNode } from './BaseNode'; 

  export const TextNode = ({ id, data }) => {
    const [currText, setCurrText] = useState(data?.text || '{{input}}');
    const [nodeSize, setNodeSize] = useState({ width: 200, height: 100 });
    const [variableHandles, setVariableHandles] = useState([]);
    const hiddenSpanRef = useRef(null);

    const updateNodeSize = (text) => {
      if (hiddenSpanRef.current) {
        hiddenSpanRef.current.textContent = text;
        const extraWidth = 40;
        const extraHeight = 40;
        const newWidth = hiddenSpanRef.current.offsetWidth + extraWidth;
        const newHeight = hiddenSpanRef.current.offsetHeight + extraHeight;
        setNodeSize({ width: newWidth, height: newHeight });
      }
    };

    const updateVariableHandles = (text) => {
      const regex = /\{\{\s*([0-9a-zA-Z_$][0-9a-zA-Z_$]*)\s*\}\}/g;

      const vars = [];
      let match;
      while ((match = regex.exec(text)) !== null) {
        vars.push(match[1]);
      }
      setVariableHandles(vars);
    };

    const handleTextChange = (e) => {
      const newText = e.target.value;
      setCurrText(newText);
      updateNodeSize(newText);
      updateVariableHandles(newText);
    };

    useEffect(() => {
      updateNodeSize(currText);
      updateVariableHandles(currText);
      
    }, []);

    return (
      <BaseNode id={id} style={{ ...nodeSize, overflow: 'hidden' }}>
        {/* INPUT HANDLES FOR VARIABLES */}
        {variableHandles.map((variable, index) => (
          <Handle
            key={variable}
            type="target"
            position={Position.Left}
            id={`${id}-${variable}`}
            style={{
              top: `${(index + 1) * (100 / (variableHandles.length + 1))}%`
            }}
          />
        ))}

        {/* MAIN CONTENT */}
        <div
          style={{
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            boxSizing: 'border-box'
          }}
        >
          {/* ✅ TITLE HERE */}
          <div style={{ marginBottom: '4px', fontWeight: 'bold', fontSize: '16px' }}>
            {data?.title || 'Text'}
          </div>

          {/* LABEL + INPUT */}
          <label style={{ fontSize: '14px', width: '100%' }}>
            Text:
            <input
              type="text"
              value={currText}
              onChange={handleTextChange}
              style={{
                width: '100%',
                boxSizing: 'border-box',
                marginTop: '4px',
                padding: '4px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            />
          </label>
        </div>

        {/* HIDDEN SPAN TO MEASURE TEXT WIDTH */}
        <span
          ref={hiddenSpanRef}
          style={{
            position: 'absolute',
            visibility: 'hidden',
            whiteSpace: 'pre',
            fontSize: '14px',
            fontFamily: 'inherit',
            padding: '10px',
            boxSizing: 'border-box'
          }}
        ></span>

        {/* OUTPUT HANDLE */}
        <Handle
          type="source"
          position={Position.Right}
          id={`${id}-output`}
        />
      </BaseNode>
    );
  };
