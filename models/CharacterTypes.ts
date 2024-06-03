export type CharacterModel = {
  id: number
  name: string
  status: "Alive" | "Dead" | "unknown"
  species: string
  type: string
  gender: "Male" | "Female" | "Genderless" | "unknown"
  origin: {
      name: string
      url: string
    }
  location: {
    name: string
    url: string
  }
  image: string
  episode: string[]
  url: string
  created: string
}

export type CharacterCard = {
  id: number
  name: string
  status: "Alive" | "Dead" | "unknown"
  species: string
  gender: "Male" | "Female" | "Genderless" | "unknown"
  image: string
  location: string
}

export type FavChar = {
  id: number
  name: string
  status: "Alive" | "Dead" | "unknown"
  gender: "Male" | "Female" | "Genderless" | "unknown"
  image: string
  species: string
  location: string
}

export type Info = {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

export type ApiResponse = {
  info: Info,
  results: CharacterModel[]
}


