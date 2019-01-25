const axios = require('axios')

module.exports = class CharacterApi {
  constructor({ client, apiUrl } = {}) {
    this.client = client || axios
    this.apiUrl = apiUrl || process.env.API_URL
  }

  getCharacters() {
    return this.client.get(`${this.apiUrl}/characters`).then(json => json.data)
  }

  getCharacter(id) {
    return this.client
      .get(`${this.apiUrl}/characters/${id}`)
      .then(json => json.data)
  }

  updateCharacter(data) {
    return this.client
      .put(`${this.apiUrl}/characters/${data.id}`, data)
      .then(json => json.data)
  }

  addCharacter(data) {
    return this.client
      .post(`${this.apiUrl}/characters`, data)
      .then(json => json.data)
  }
}
