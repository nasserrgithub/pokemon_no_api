import React from 'react';
import './PokeList.css';

const PokeList = ({pokemons, addPokemon}) => {
	return (
		<div>
			{
				pokemons.map((pokemon, index) => {
					return <img 
								onClick={() => addPokemon(pokemons[index])}
								alt={pokemons[index].name} 
								className="pokelist2" src={pokemons[index].img} 
								width="70px" height="70px" 
							/>
				})
			}
		</div>
	);
}

export default PokeList;