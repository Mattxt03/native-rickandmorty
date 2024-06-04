import { Info } from './CharacterTypes'

export type LocationModel = {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents?: string[];
    url?: string;
    created?: string;
}

export type LocationApiRes = {
    info: Info,
    results: LocationModel[]
}
  