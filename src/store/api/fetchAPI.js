export const fetchAPI = {
  async fetchData () {
    const response = await fetch('https://fyodorwelbex.herokuapp.com/').then(resp => resp.json())
    return response.rows
  }
}