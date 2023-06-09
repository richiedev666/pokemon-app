export interface PokemonCatalog {
  results: Pokemon[];
  count: number;
}

export interface Ability {
  ability: {
    name: string;
    url: string;
  };
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface Pokemon {
  id: number;
  name: string;
  url: string;
  height: number;
  weight: number;
  base_experience: number;
  abilities: Ability[];
  stats: Stat[];
  types: PokemonType[];
  sprites: {
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
      dream_world: {
        front_default: string;
      };
      home: {
        front_default: string;
      };
    };
  };
}

export interface QueryParams {
  limit: number;
  offset: number;
}

export interface PokemonType {
  type: {
    name: string;
    url: string;
  };
  name: string;
  url: string;
}

export interface PokemonTypes {
  results: PokemonType[];
}
