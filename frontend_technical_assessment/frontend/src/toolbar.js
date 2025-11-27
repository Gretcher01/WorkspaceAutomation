// /frontend/src/toolbar.js
import React from 'react';
import { DraggableNode } from './draggableNode';
import './toolbar.css'; 

export const PipelineToolbar = () => {
  return (
    <div className="navbar-container">
      <div className="toolbar-container">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="mathNode" label="Math" />
        <DraggableNode type="logicNode" label="Logic" />
        <DraggableNode type="imageNode" label="Image" />
        <DraggableNode type="delayNode" label="Delay" />
        <DraggableNode type="switchNode" label="Switch" />
      </div>
    </div>
  );
};
