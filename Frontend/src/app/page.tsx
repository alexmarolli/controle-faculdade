import React from 'react';

function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: '#f2f8ff',
    }}>
      <h1 style={{
        marginTop: '-800px',
        border: '1px solid #d3d3d3',
        borderRadius: '10px',
        padding: '10px',
        fontSize: '30px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        backgroundColor: '#ffffff',
      }}>
        Sistema de Controle de Estoque
      </h1>
    </div>
  );
}

export default Home;