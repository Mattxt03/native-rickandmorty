import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse, CharacterModel } from "../models/Character"
import { EpisodeApiRes } from "../models/Episode";
import { LocationApiRes } from "../models/Location";

export const rickAndMortyApi = createApi({
    baseQuery: fetchBaseQuery({
      baseUrl: "https://rickandmortyapi.com/api/",
    }),
    endpoints: (build) => ({
      getCharacters: build.query<ApiResponse, number>({
        query: (page: number) => `character?page=${page}`
      }),
      getCharactersById: build.query<CharacterModel, number>({
        query: (id: number) => `character/${id}`
      }),
      getEpisodes: build.query<EpisodeApiRes, number>({
        query: (page: number) => `episode?page=${page}`
      }),
      getLocations: build.query<LocationApiRes, number>({
        query: (page: number) => `location?page=${page}`
      }),
      
    }),
  });
  
  export const { useGetCharactersQuery, useGetCharactersByIdQuery, useGetEpisodesQuery, useGetLocationsQuery } = rickAndMortyApi;