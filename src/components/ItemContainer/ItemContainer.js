import React from 'react';
import './ItemContainer.css';

class ItemContainer extends React.Component {
    render() {
        return (
            <div className="item">
                <img className="image" src={this.props.src} />
            </div>
        );
    }

}

export default ItemContainer;