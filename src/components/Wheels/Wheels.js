import React from 'react';
import './Wheels.css';
import ItemContainer from '../ItemContainer/ItemContainer';

class Wheels extends React.Component {
    render() {
        return (
            <div className="wheelsContainer">
                
                <div className="wheelsTitleContainer">
                    <h2>Wheels</h2>
                </div>
            
                {
                    this.props.wheels.map(wheel => {
                        return <ItemContainer wheel={wheel} src={wheel.src} key={wheel.name} addWheel={this.props.addWheel} type="wheel" />
                    })
                }
                

            </div>
        );
    }

}

export default Wheels;