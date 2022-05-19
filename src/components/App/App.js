import React from 'react';
import './App.css';
import Characters from '../Characters/Characters';
import Bodies from '../Bodies/Bodies';
import Wheels from '../Wheels/Wheels';
import Gliders from '../Gliders/Gliders';
import Statistics from '../Statistics/Statistics';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 className="title">Mario Kart Builder</h1>
            
                <div className="selectionContainer">
                    <Characters />
                    <Bodies />
                    <Wheels />
                    <Gliders />
                </div>
            
                <Statistics />
            </div>
        );
    }

}

export default App;