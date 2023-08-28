import client from "./ApiClient";

export const getAllPokemon = (params) => {
  return client("pokemon", { params });
};

export const getDetailPokemon = (id, params) => {
  return client(`pokemon/${id}`, { params });
};

export const getPokemonByGeneration = (id) => {
  return client(`generation/${id}`);
};

export const getPokemonByType = (id) => {
  return client(`type/${id}`);
};

export const getType = () => {
  return client(`type`);
};

export const getGeneration = () => {
  return client(`generation`);
};
