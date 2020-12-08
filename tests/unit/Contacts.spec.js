import {createLocalVue, mount} from '@vue/test-utils'
import Vuetify from 'vuetify'
import Contacts from '../../src/components/Contacts'
const localVue = createLocalVue()
let vuetify = new Vuetify()

// let wrapper = mount(Contacts, {
//   localVue,
//   vuetify
// })
//
// describe('Save button', function() {
//   it('should save new contact when clicked, and update contacts table', () => {
//     wrapper.name = 'Joe'
//     wrapper.phoneNumber = '1234567890'
//     console.log('foo')
//   });
// });