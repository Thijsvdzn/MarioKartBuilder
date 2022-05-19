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
            
                <ItemContainer src="https://i.postimg.cc/Kj8yKwyg/Super-Glider.png" />
                <ItemContainer src="https://i.postimg.cc/c1hxsMNn/Cloud-Glider.png" />
                <ItemContainer src="https://i.postimg.cc/DfxhVvqQ/Wario-Wing.png" />
                <ItemContainer src="https://i.postimg.cc/MH3J15W3/Waddle-Wing.png" />
                <ItemContainer src="https://i.postimg.cc/gJdpprSs/Peach-Parasol.png" />
                <ItemContainer src="https://i.postimg.cc/WbfsZNzp/Parachute.png" />
                <ItemContainer src="https://i.postimg.cc/sgkynT5t/Parafoil.png" />
                <ItemContainer src="https://i.postimg.cc/1tc9VDnb/Flower-Glider.png" />
                <ItemContainer src="https://i.postimg.cc/CLyGgqbk/Bowser-Kite.png" />
                <ItemContainer src="https://i.postimg.cc/4d5gxZjg/Plane-Glider.png" />
                <ItemContainer src="https://i.postimg.cc/x1JnywNv/MKTV-Parafoil.png" />
                <ItemContainer src="https://i.postimg.cc/prWPfyKr/Gold-Glider.png" />
                <ItemContainer src="https://i.postimg.cc/Xqs4Q3g8/Hylian-Kite.png" />
                <ItemContainer src="https://i.postimg.cc/FK0vw0Z1/Paraglider.png" />
                <ItemContainer src="https://i.postimg.cc/X7vVXGVD/Paper-Glider.png" />
            </div>
        );
    }

}

export default Gliders;