import React from 'react';
import './Gliders.css';
import ItemContainer from '../ItemContainer/ItemContainer';

class Gliders extends React.Component {
    render() {
        return (
            <div className="gliderContainer">
            
                <div className="glidersTitleContainer">
                    <h2>Gliders</h2>
                </div>
            
                <ItemContainer />
                <ItemContainer />
                <ItemContainer />
                <ItemContainer />
                <ItemContainer />
                <ItemContainer />
                <ItemContainer />
                <ItemContainer />
                <ItemContainer />
                <ItemContainer />
                <ItemContainer />
                <ItemContainer />
                <ItemContainer />
                <ItemContainer />
                <ItemContainer />
            </div>
        );
    }

}

export default Gliders;