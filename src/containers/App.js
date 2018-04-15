import React, { Component } from 'react';
import './App.css';
import PokeLineUp from '../components/PokeLineUp/PokeLineUp.js';
import PokeData from '../components/PokeData/PokeData.js';
import PokeDex from '../components/PokeDex/PokeDex.js';
import {pokemonslist} from './pokemons';
import pokeball from './pokeball.png';

const initialState = {
	img: pokeball,
	name: '',
	type: '',
	ability:'',
	weakness: '',
	evolution: ''
}

class App extends Component {

	constructor() {
		super();
		this.state = {
			pokemons: pokemonslist,
			searchfield: '',
			poke1: initialState,
			poke2: initialState,
			poke3: initialState,
			poke4: initialState,
			poke5: initialState,
			poke6: initialState,
			name: '',
			type: '',
			ability: '',
			weakness: '',
			evolution: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}

	addPokemon = (pokemon) => {
		this.setState({poke1: {
			img: pokemon.img,
			name: pokemon.name,
			type: pokemon.type,
			ability: pokemon.ability,
			weakness: pokemon.weakness,
			evolution: pokemon.evolution
		}})
		this.setState({poke2: this.state.poke1})
		this.setState({poke3: this.state.poke2})
		this.setState({poke4: this.state.poke3})
		this.setState({poke5: this.state.poke4})
		this.setState({poke6: this.state.poke5})
	}

	showPokemonData = (pokemon) => {
		this.setState({name: pokemon.name})
		this.setState({type: pokemon.type})
		this.setState({ability: pokemon.ability})
		this.setState({weakness: pokemon.weakness})
		this.setState({evolution: pokemon.evolution})
	}

  	render() {
  		const {pokemons, searchfield, poke1, poke2, poke3, poke4, poke5, poke6, name, type, ability, weakness, evolution} = this.state;
  		const filteredPokemons = pokemons.filter(pokemon => {
  			return pokemon.name.toLowerCase().includes(searchfield.toLowerCase());
  		})

	    return (
	      	<div className="App">
		        <PokeLineUp 
		        	showPokemonData={this.showPokemonData} 
		        	poke1={poke1} 
		        	poke2={poke2} 
		        	poke3={poke3} 
		        	poke4={poke4} 
		        	poke5={poke5} 
		        	poke6={poke6}
		        />
		        <PokeData 
		        	name={name} 
		        	type={type} 
		        	ability={ability} 
		        	weakness={weakness} 
		        	evolution={evolution}
		        />
		        <PokeDex 
		        	addPokemon={this.addPokemon} 
		        	pokemons={filteredPokemons} 
		        	onSearchChange={this.onSearchChange}
		        />
	      	</div>
	    );
 	}
}

export default App;
