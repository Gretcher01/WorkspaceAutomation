// /frontend/src/submit.js
import React from 'react';
import { useStore } from './store';

export const SubmitButton = () => {
  
  const { nodes, edges } = useStore((state) => ({
    nodes: state.nodes,
    edges: state.edges,
  }));

  const handleClick = async () => {
   
    const pipeline = { nodes, edges };
    const pipelineStr = JSON.stringify(pipeline);

    try {
      
      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `pipeline=${encodeURIComponent(pipelineStr)}`
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      
      const data = await response.json();

    
      alert(
        `Backend Response:\n` +
        `Number of Nodes: ${data.num_nodes}\n` +
        `Number of Edges: ${data.num_edges}\n` +
        `Is DAG: ${data.is_dag}`
      );
    } catch (error) {
      console.error('Error submitting pipeline:', error);
      alert('Error submitting pipeline. Please check the console for details.');
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: 'absolute',       
        bottom: '20px',             
        left: '50%',                
        transform: 'translateX(-50%)',
        cursor: 'pointer'
      }}
      className="toolbar-btn"
    >
      Submit Pipeline
    </button>
  );
};
