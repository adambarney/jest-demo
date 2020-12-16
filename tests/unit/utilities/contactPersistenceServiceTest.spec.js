import {saveContact} from '../../../src/utilities/contactPersistenceService'
import axios from 'axios'

// jest.mock('axios')
//
// beforeEach(() => {
//   jest.resetAllMocks()
// })
//
// describe('saveContact', () => {
//   it('should return updated list of contacts', async () => {
//     let existingContact = {
//       name: 'Joe',
//       phoneNumber: '5131234567'
//     }
//
//     let newContact = {
//       name: 'Jenny',
//       phoneNumber: '5138675309'
//     }
//     let expectedContacts = [existingContact, newContact]
//     axios.post.mockImplementationOnce(() => Promise.resolve({data: expectedContacts}))
//     await expect(saveContact(newContact)).resolves.toEqual(expectedContacts)
//     expect(axios.post).toHaveBeenCalledWith('http://localhost:8080/contact', newContact)
//   })
// })
