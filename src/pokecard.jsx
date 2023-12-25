import React, {Component} from 'react';
import './pokecard.css';


const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
let threedigit = (number) => (number <= 999 ? `00${number}`.slice(-3) : number)
// we use slice(-3) to take the last 3 digits of the new number, for ex 0045 takes only 045.
class Pokecard extends Component {
    render(){
        let imgSrc = `${POKE_API}${threedigit(this.props.id)}.png`;
        return(
            <div className='Pokecard'>
                <h1 className='Pokecard-title'>{this.props.name}</h1>
                <div className='Pokecard-image'>
                <img src={imgSrc} alt=" " />
                </div>
                <div className='Pokecard-data'>Type: {this.props.type}</div>
                <div className='Pokecard-data'>EXP: {this.props.exp}</div>
            </div>

        )

    } 
}

export default Pokecard;