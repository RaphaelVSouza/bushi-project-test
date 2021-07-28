import axios from 'axios'

const apiAnime = axios.create({
  baseURL: 'https://kitsu.io/api/edge/anime',
  headers: {
    'Accept': 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json'
  }
})

export default apiAnime