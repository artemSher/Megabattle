import React from 'react';
import { Button, Waves } from './components/UI';
import './styles/main.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Тестирование</h1>
      <div style={{ padding: '20px' }}>
        <Button onClick={() => console.log('Button clicked')}>
          Подробнее
        </Button>
      </div>
      <div style={{ marginTop: '50px' }}>
        <Waves />
      </div>
    </div>
  );
};

export default App;
