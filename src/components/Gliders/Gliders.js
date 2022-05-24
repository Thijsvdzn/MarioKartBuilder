import React from 'react';
import './Gliders.css';
import ItemContainer from '../ItemContainer/ItemContainer';

class Gliders extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="gliderContainer">
            
                <div className="glidersTitleContainer">
                    <h2>Gliders</h2>
                </div>
            
                {
                    this.props.gliders.map(glider => {
                        return <ItemContainer glider={glider} src={glider.src} key={glider.name} addGlider={this.props.addGlider} type="glider" />
                    })
                }

            </div>
        );
    }

}

export default Gliders;