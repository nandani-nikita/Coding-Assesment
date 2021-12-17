// Pokemon Card
const PokemonCard = ({ pokemon }) => {
    return (
      <div className="poke-card">
        
        <img src={pokemon.images.large} alt={pokemon.name} />
        <h4>{pokemon.name}</h4>
        Attacks: {(pokemon.attacks)? pokemon.attacks[0].name : "-"}
        <br />
        HP: {(pokemon.hp)? pokemon.hp : "-"}
        <br />
        Abilities: {(pokemon.abilities)? pokemon.abilities[0].name : "N/A"}

      </div>
    );
  };

  export default PokemonCard;