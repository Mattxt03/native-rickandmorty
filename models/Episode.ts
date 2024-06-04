import { Info } from './CharacterTypes'

export type EpisodeModel = {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters?: string[];
    url?: string;
    created?: string;
}

export type EpisodeApiRes = {
info: Info,
results: EpisodeModel[]
}