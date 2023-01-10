import React, { useState } from "react";
import "./style.css";
import axios from "axios";

const Pokemon = (props) => {
    const [ pokemon, setPokemon ] = useState([]);

    const traerPokemones = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then((response) => {
                setPokemon(response.data.results);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    
    return (
        <div>
            <button className="btn" onClick={traerPokemones}> Fetch Pokemon</button>
            <ul>{pokemon.map((pokemon, index) => {
                return <li className="list" key={index}>{pokemon.name}</li>;
                })}
            </ul>
        </div>
    );
}
export default Pokemon;