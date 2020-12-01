import axios from 'axios'

export function saveAddress(address) {
    //post address to webservice using axios
    //return webservice response, containing all addresses in address book

  return axios.post("example.com/address", address)
    .then(response => response.data)
}