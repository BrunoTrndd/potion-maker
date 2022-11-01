export async function getAll() {
  try {
    const response = await fetch('/ingredientes')
    const items = await response.json()
    return items
  } catch (e) {
    console.log(e)
    return []
  }
}

export async function getIngredientsByFilter(filter) {
  try {
    const filterString = `area=${filter.area || 0}&pallate=${filter.pallate || 0}&stomach=${filter.stomach || 0}&smell=${filter.smell || 0}&look=${filter.look || 0}&hear=${filter.hear || 0}`
    const response = await fetch(`/ingredientes?${filterString}`)
    const items = await response.json()
    return items
  } catch (e) {
    console.log(e)
    return []
  }
}

export async function getIngredientsTeste(filter) {
  try {
    const filterString = JSON.stringify(filter)
    const response = await fetch(`/potion?potion=${filterString}`)
    const items = await response.json()
    return items
  } catch (e) {
    console.log(e)
    return []
  }
}