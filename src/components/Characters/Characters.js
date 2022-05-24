import React from 'react';
import './Characters.css';
import ItemContainer from '../ItemContainer/ItemContainer';

class Characters extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="characterContainer">
            
                <div className="characterTitleContainer">
                    <h2>Characters</h2>
                </div>
            
                {
                    this.props.characters.map(character => {
                        return <ItemContainer character={character} src={character.src} key={character.name} addCharacter={this.props.addCharacter} type="character" />
                    })
                }
    
            </div>
        );
    }

}

export default Characters;