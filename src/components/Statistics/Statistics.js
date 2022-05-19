import React from 'react';
import './Statistics.css';

class Statistics extends React.Component {
    render() {
        return (
            <div className="statisticsContainer">
            
                <div className="statisticsTitleContainer">
                    <h2>Statistics</h2>
                </div>
            
                <div className="speed">
            
                    <h3>Speed (Ground, Water, Air, Anti-Gravity)</h3>
                    <div className="groundSpeedStat"></div>
                    <div className="waterSpeedStat"></div>
                    <div className="airSpeedStat"></div>
                    <div className="antiGravitySpeedStat"></div>
            
                </div>
            
                <div className="acceleration">
                    
                    <h3>Acceleration</h3>
                    <div className="accelerationStat"></div>
            
                </div>
            
                <div className="weight">
                    
                    <h3>Weight</h3>
                    <div className="weightStat"></div>
            
                </div>
            
                <div className="handling">
                    
                    <h3>Handling (Ground, Water, Air, Anti-Gravity)</h3>
                    <div className="groundHandlingStat"></div>
                    <div className="waterHandlingStat"></div>
                    <div className="airHandlingStat"></div>
                    <div className="antiGravityHandlingStat"></div>
            
                </div>
        
                <div className="grip">
                    
                    <h3>Grip</h3>
                    <div className="gripStat"></div>
            
                </div>
        
                <div className="miniTurbo">
                    
                    <h3>Mini turbo</h3>
                    <div className="miniTurboStat"></div>
            
                </div>
            
            </div>
        );
    }

}

export default Statistics;