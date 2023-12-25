import React, {Component} from "react";
import Pokedex from "./pokedex";



class Pokegame extends Component{
    static defaultProps = {
        pokemon: [
            {id: 200, name: 'Misdreavus', type: 'ghost', base_experience: 147},
            {id: 77, name: 'Ponyta', type: 'fire', base_experience: 152},
            {id: 60, name: 'Poliwag', type: 'water', base_experience: 77},
            {id: 154, name: 'Meganium', type: 'grass', base_experience: 208},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 50, name: 'Diglett', type: 'ground', base_experience: 81},
            {id: 124, name: 'Jynx', type: 'psychic', base_experience: 137},
            {id: 108, name: 'Lickitung', type: 'normal', base_experience: 127}
        ]
    };
    render(){
        let hand1 = [];
        let hand2 = [...this.props.pokemon];
        while (hand1.length < hand2.length) {
            let index = Math.floor(Math.random() * hand2.length);
            let randomPoke = hand2.splice(index, 1)[0];
            hand1.push(randomPoke);
        }
        let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        return (
                <div>
                    <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2}/>
                    <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1}/>
                </div>

        )
    }
}

export default Pokegame;