// Pokemon Card
import '../App.css'
const PokemonCard = ({ pokemon }) => {
  return (
    <div className="poke-card">

      <img src={pokemon.images.large} alt={pokemon.name} />
      <h4><span className="poke-name">{pokemon.name}</span>
        <br />
        <span className='label'>Level: </span>
        <span className='poke-level'>{(pokemon.level) ? pokemon.level : "New Beginning"}</span>
        <span className="poke-hp label">
          HP:
          {(pokemon.hp) ? pokemon.hp : "-"}</span>
        <br />
        <span className='label'> Attacks:</span>

        <span className='poke-desc'>
          {(pokemon.attacks) ? pokemon.attacks[0].name : "-"}
        </span>



        <br />
        <span className='label'> Abilities:</span>


        <span className='poke-desc'>
          {(pokemon.abilities) ? pokemon.abilities[0].name : "N/A"}
        </span></h4>


    </div>
  );
};

export default PokemonCard;