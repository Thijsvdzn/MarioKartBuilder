import React from 'react';
import './ItemContainer.css';

class ItemContainer extends React.Component {
    constructor(props) {
        super(props);
        this.addStats = this.addStats.bind(this);
    }
    
    addStats() {
        if (this.props.type === "character") {
            this.props.addCharacter(this.props.character);
        } else if (this.props.type === "body") {
            this.props.addBody(this.props.body);
        } else if (this.props.type === "wheel") {
            this.props.addWheel(this.props.wheel);
        } else if (this.props.type === "glider") {
            this.props.addGlider(this.props.glider);
        }
    }
    
    render() {
        return (
            <div className="item">
                <input type="image" src={this.props.src} onClick={this.addStats} />
            </div>
        );
    }

}

export default ItemContainer;