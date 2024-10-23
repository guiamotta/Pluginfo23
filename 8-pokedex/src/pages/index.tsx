import Card from "@/components/Card";
import HomeProps from "@/interfaces/HomeProps";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from 'next/router';

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/fetchPokemonsData');
  const pokemonsData = await response.json();

  return {
    props: {
      pokemonsData,
    },
  };
}

export default function Home({pokemonsData}:HomeProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPokemons, setFilteredPokemons] = useState(pokemonsData);
  const router = useRouter()

  useEffect(() => {
    // Fetch data from the server using the authenticated user's token
    const validadeUser = async () => {
      console.log(document.cookie)
      const response = await fetch('/api/validate', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.status !== 200) {
        const data = await response.json()
        console.log('Authentication failed'); // Handle authentication failure
        router.push("/login")
      }
    };

    validadeUser();
  }, []);



  
  const handleSearch = (event:ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);

    const filtered = pokemonsData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchValue)
    );

    setFilteredPokemons(filtered);
  };

  return (
    <>
      <header>
        <img className="logo" src="logo.svg" alt="logo"></img>
      </header>

      <div className="search-bar">
          <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Pesquisar pokémon"></input>
          <button>
            <img className="search-btn" src="search-btn.svg" alt="botão de pesquisa"></img>
          </button>
      </div>

      <div className="pokedex-title">
        <h1>Pokédex</h1>
      </div>

      <main>
        <div className="pokemons-list">
          {filteredPokemons.map((pokemon,index)=>(
            <Card key={index} name={pokemon.name} types={pokemon.types} sprite={pokemon.sprite}/>
          ))}
        </div>
      </main> 

      <footer>
        Com 💛 Info Jr UFBA 2023
      </footer>
    </>
  )
}
