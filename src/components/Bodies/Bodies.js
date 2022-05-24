import React from 'react';
import './Bodies.css';
import ItemContainer from '../ItemContainer/ItemContainer';

class Bodies extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="bodiesContainer">
            
                <div className="bodiesTitleContainer">
                    <h2>Bodies</h2>
                </div>
            
                {
                    this.props.bodies.map(body => {
                        return <ItemContainer body={body} src={body.src} key={body.name} addBody={this.props.addBody} type="body" />
                    })
                }
            
            </div>
        );
    }

}

export default Bodies;