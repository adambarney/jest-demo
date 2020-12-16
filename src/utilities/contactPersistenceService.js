import axios from 'axios'

function saveContact(contact) {
  //POST contact to webservice using axios
  //return webservice response, containing all contacts in DB
}





























// export function saveContact(contact) {
//   //POST contact to webservice using axios
//   //return webservice response, containing all contacts in DB
//
//   return axios.post('http://localhost:8080/contact', contact)
//     .then(response => response.data)
// }

function getContacts() {
  return axios.get('http://localhost:8080/contact')
    .then(response => response.data)
}

export {
  saveContact,
  getContacts
}
