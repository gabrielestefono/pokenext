import styles from '@/styles/Home.module.css';

export async function getStaticProps(){
  const maxPokemons = 50;
  const api = "http://pokeapi.co/api/v2/pokemon/";
  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  // add pokemon index

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return{
    props: {
      pokemons: data.results
    }
  }

}

export default function Home({pokemons}) {
  return (
    <>
      <ul>
        {pokemons.map((pokemon)=>(
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  )
}
