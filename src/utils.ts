import type { Champion, SingleChampion } from '@types'

const getAllChampionNames = async () => {
	const response = await fetch('http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json')
	const data = await response.json()
	let championNames: string[] = []
	Object.keys(data.data).forEach((key) => {
		championNames.push(...key)
	})
	return championNames
}

const getAllChampions = async () => {
	const response = await fetch('http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json')
	const data = await response.json()
	const champions: Champion[] = Object.values(data.data)
	return champions
}

const getChampionById = async (championId: string): Promise<SingleChampion> => {
	const allChampions = await getAllChampions()
	const champion = allChampions.find((champion) => champion.id.toLowerCase() === championId)

	const response = await fetch(`http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion/${champion?.id}.json`)
	const data = await response.json()
	return await data.data[champion?.id as string]
}

export { getAllChampionNames, getAllChampions, getChampionById }
