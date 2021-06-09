import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://jrwee.mocklab.io',
})
