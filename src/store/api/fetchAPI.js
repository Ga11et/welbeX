export const fetchAPI = {
  async fetchData () {
    const response = await fetch(process.env.VUE_APP_URL + 'fetchData').then(resp => resp.json())
    return response
  }
}