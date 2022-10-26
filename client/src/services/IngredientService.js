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

export async function getIngredientByArea() {
  
}