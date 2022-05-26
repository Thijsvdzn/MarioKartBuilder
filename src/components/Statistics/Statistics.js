import React from 'react';
import './Statistics.css';
import ItemContainer from '../ItemContainer/ItemContainer';

class Statistics extends React.Component {
    constructor(props) {
        super(props);
    }
    

    
    render() {
        return (
            <div className="statisticsContainer">
            
                <div className="statisticsTitleContainer">
                    <h2>Statistics</h2>
                </div>
            
                <div className="selection">
                    <ItemContainer src={this.props.character.src} />
                    <ItemContainer src={this.props.body.src} />
                    <ItemContainer src={this.props.wheels.src} />
                    <ItemContainer src={this.props.glider.src} />
                </div>
            
                <div className="speed">
            
                    <h3>Speed (Land, Water, Air, Anti-Gravity)</h3>
        
                    <div className="percentages">
                        <p>0%</p> <p>20%</p> <p>40%</p> <p>60%</p> <p>80%</p> <p>100%</p>
                    </div>
        
                    <div className="landSpeedStat" style={{width: ((this.props.character.landSpeed + this.props.body.landSpeed + this.props.wheels.landSpeed + this.props.glider.landSpeed) * 17.39) + "%"}} ></div>
                    <div className="waterSpeedStat" style={{width: ((this.props.character.waterSpeed + this.props.body.waterSpeed + this.props.wheels.waterSpeed + this.props.glider.waterSpeed) * 17.39) + "%"}} ></div>
                    <div className="airSpeedStat" style={{width: ((this.props.character.airSpeed + this.props.body.airSpeed + this.props.wheels.airSpeed + this.props.glider.airSpeed) * 17.39) + "%"}} ></div>
                    <div className="antiGravitySpeedStat" style={{width: ((this.props.character.antiGravitySpeed + this.props.body.antiGravitySpeed + this.props.wheels.antiGravitySpeed + this.props.glider.antiGravitySpeed) * 17.39) + "%"}} ></div>
            
                </div>
            
                <div className="acceleration">
                    
                    <h3>Acceleration</h3>

                    <div className="percentages">
                        <p>0%</p> <p>20%</p> <p>40%</p> <p>60%</p> <p>80%</p> <p>100%</p>
                    </div>

                    <div className="accelerationStat" style={{width: ((this.props.character.acceleration + this.props.body.acceleration + this.props.wheels.acceleration + this.props.glider.acceleration) * 17.39) + "%"}} ></div>
            
                </div>
            
                <div className="weight">
                    
                    <h3>Weight</h3>

                    <div className="percentages">
                        <p>0%</p> <p>20%</p> <p>40%</p> <p>60%</p> <p>80%</p> <p>100%</p>
                    </div>

                    <div className="weightStat" style={{width: ((this.props.character.weight + this.props.body.weight + this.props.wheels.weight + this.props.glider.weight) * 17.39) + "%"}} ></div>
            
                </div>
            
                <div className="handling">
                    
                    <h3>Handling (Land, Water, Air, Anti-Gravity)</h3>

                    <div className="percentages">
                        <p>0%</p> <p>20%</p> <p>40%</p> <p>60%</p> <p>80%</p> <p>100%</p>
                    </div>

                    <div className="landHandlingStat" style={{width: ((this.props.character.landHandling + this.props.body.landHandling + this.props.wheels.landHandling + this.props.glider.landHandling) * 17.39) + "%"}} ></div>
                    <div className="waterHandlingStat" style={{width: ((this.props.character.waterHandling + this.props.body.waterHandling + this.props.wheels.waterHandling + this.props.glider.waterHandling) * 17.39) + "%"}} ></div>
                    <div className="airHandlingStat" style={{width: ((this.props.character.airHandling + this.props.body.airHandling + this.props.wheels.airHandling + this.props.glider.airHandling) * 17.39) + "%"}} ></div>
                    <div className="antiGravityHandlingStat" style={{width: ((this.props.character.antiGravityHandling + this.props.body.antiGravityHandling + this.props.wheels.antiGravityHandling + this.props.glider.antiGravityHandling) * 17.39) + "%"}} ></div>
            
                </div>
        
                <div className="grip">
                    
                    <h3>Traction</h3>

                    <div className="percentages">
                        <p>0%</p> <p>20%</p> <p>40%</p> <p>60%</p> <p>80%</p> <p>100%</p>
                    </div>

                    <div className="tractionStat" style={{width: ((this.props.character.traction + this.props.body.traction + this.props.wheels.traction + this.props.glider.traction) * 17.39) + "%"}} ></div>
            
                </div>
        
                <div className="miniTurbo">
                    
                    <h3>Mini turbo</h3>

                    <div className="percentages">
                        <p>0%</p> <p>20%</p> <p>40%</p> <p>60%</p> <p>80%</p> <p>100%</p>
                    </div>

                    <div className="miniTurboStat" style={{width: ((this.props.character.miniTurbo + this.props.body.miniTurbo + this.props.wheels.miniTurbo + this.props.glider.miniTurbo) * 17.39) + "%"}}  ></div>
            
                </div>
            
            </div>
        );
    }

}

export default Statistics;