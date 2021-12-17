// Pokemon Card
const PokemonCard = ({ pokemon }) => {
    return (
      <div className="poke-card">
        
        <img src={pokemon.images.large} alt={pokemon.name} />
        <h4>{pokemon.name}</h4>
        Abilities: {(pokemon.abilities)? pokemon.abilities[0].name : "N/A"}
      </div>
    );
  };

  export default PokemonCard;