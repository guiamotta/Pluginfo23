import styles from "@/styles/Card.module.css"
import PokemonData from "@/interfaces/PokemonData";
import TypeCard from "./TypeCard";
import PokemonType from "@/interfaces/PokemonType";
import FavoriteButton from "./FavoriteButton";
import { useState } from "react";

export default function Card({name,types,sprite}:PokemonData){
    const [isFavorite, setIsFavorite] = useState(false);

    return(
        <div className={`${styles.card_content} ${styles[types[0]]}`}>
            <div className={styles.card_info}>
                <h2 className={styles.name}>{name}</h2>
                <div className={styles.types}>
                    {types.map((type,index)=>(
                        <TypeCard key={index} type={type as PokemonType}/>
                    ))}
                </div>
            </div>
            <div className={styles.card_image}>
                <img className="pokemon-img" src={sprite} alt="pokemon"></img>
            </div>
            <FavoriteButton onToggleFavorite={()=>setIsFavorite(!isFavorite)} />
        </div>
    )
}