import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 4M1Xh3VfE2p2kpHhjW8BFUVX_M_SX9DowJ4ib2ZUnJA',
  },
})
