const capitalizeChampionName = (championName: string): string => {
  return championName.charAt(0).toUpperCase() + championName.slice(1)
}
const uncapitalizeChampionName = (championName: string): string => {
  return championName[0].toLocaleLowerCase() + championName.substring(1)
}

const getAllChampionNames = async () => {
  const response = await fetch("http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json")
  const data = await response.json()
  let championNames: string[] = []
  Object.keys(data.data).forEach(key => {
    championNames.push(...key)
  })
  return championNames
}

export { capitalizeChampionName, uncapitalizeChampionName, getAllChampionNames }
