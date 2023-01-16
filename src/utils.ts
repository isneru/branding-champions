import type { Champion } from "@types"

const getAllChampionNames = async () => {
  const response = await fetch("http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json")
  const data = await response.json()
  let championNames: string[] = []
  Object.keys(data.data).forEach(key => {
    championNames.push(...key)
  })
  return championNames
}

const getAllChampions = async () => {
  const response = await fetch("http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json")
  const data = await response.json()
  const champions: Champion[] = Object.values(data.data)
  return champions
}

export { getAllChampionNames, getAllChampions }
