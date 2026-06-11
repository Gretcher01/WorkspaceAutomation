import React from 'react';
import { MdHub } from 'react-icons/md';

export const Header = () => {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      padding: '10px 20px',
      borderBottom: '1px solid #e5e7eb',
      backgroundColor: '#ffffff',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      fontFamily: "'Roboto', sans-serif"
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <MdHub style={{ fontSize: '24px', color: '#6366f1' }} />
        <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', letterSpacing: '-0.025em' }}>
          Cortex<span style={{ color: '#6366f1' }}>Flow</span>
        </span>
      </div>
      <div style={{ marginLeft: 'auto', fontSize: '12px', color: '#6b7280', fontWeight: '500' }}>
        v1.0.0
      </div>
    </header>
  );
};
