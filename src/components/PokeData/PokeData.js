import React from 'react';
import './PokeData.css'

const PokeData = ({name, type, ability, weakness, evolution}) => {
	return (
		<div className="pokedata">
			<div className="test">
				<div className="title1">
					Pokemon
				</div>
				<div className="title3">
					Data
				</div>

				<div className="info">
					<strong>NAME:</strong> <span className="name">{name}</span> <br/>
					<strong>TYPE: <span style={{color: 'indigo'}}>{type}</span> </strong><br/>
					<strong>ABILITIES: <span style={{color: 'maroon'}}>{ability}</span></strong><br/>
					<strong>WEAKNESS: <span style={{color: 'blue'}}>{weakness}</span></strong><br/>
					<strong>EVOLUTION: <span style={{color: 'green'}}>{evolution}</span></strong><br/>
				</div>
			</div>
		</div>
	);
}

export default PokeData;