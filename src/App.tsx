

import React from 'react';
import './App.css';
import { Card } from './components/ui/card';

const App: React.FC = () => {
  return (
    <div>
      <div className="card-container">
        <div className="card">       
          <Card className="card-1">
          
          </Card>
        </div>
        <div className="card">
          <Card className="card-2">    
          </Card>
        </div>
      </div>
      <div className="card">
          <Card className="servicos">
         
          </Card>
        </div>
        <div className="card">
          <Card className="servicos">
          
          </Card>
        </div>
        <div className="card">
          <Card className="servicos">
           
          </Card>
        </div>
        <div className="card">
          <Card className="servicos">
           
          </Card>
        </div>
    </div>
    
  );
}

export default App;
