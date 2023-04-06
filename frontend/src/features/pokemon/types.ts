export interface PokemonCatalog {
  results: Pokemon[];
}

export interface Pokemon {
  id: number;
  name: string;
  url: string;
  height: number;
  weight: number;
  base_experience: number;
  sprites: {
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}