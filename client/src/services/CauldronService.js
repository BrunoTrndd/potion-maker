export async function getAll() {
  try {
    const response = await fetch('/cauldrons')
    const cauldrons = await response.json()
    return cauldrons
  } catch (e) {
    console.log(e)
    return []
  }
}