import {createLocalVue, mount} from '@vue/test-utils'
import flushPromises from 'flush-promises'
import Vuetify from 'vuetify'
import Contacts from '../../src/components/Contacts'
import * as contactService from '../../src/utilities/contactPersistenceService'

const localVue = createLocalVue()
const vuetify = new Vuetify()
let wrapper

const existingContact = {
  name: 'Joe',
  phoneNumber: '5131234567'
}
const newContact = {
  name: 'Jenny',
  phoneNumber: '5138675309'
}
const expectedContacts = [existingContact, newContact]

beforeEach(async () => {
  contactService.getContacts = jest.fn()
    .mockImplementation(() => {
      return Promise.resolve([existingContact])
    })
  contactService.saveContact = jest.fn()
    .mockImplementation(() => Promise.resolve(expectedContacts))

  wrapper = mount(Contacts, {
    localVue,
    vuetify
  })
  await flushPromises()
})



describe('Save button', () => {
  it('should save new contact when clicked, and update contacts table (v.1)', async () => {
    wrapper.find('[data-test=name-input]').setValue('Jenny')
    wrapper.find('[data-test=phone-input]').setValue('5138675309')
    wrapper.find('[data-test=submit-button]').trigger('click')
    await flushPromises()
    expect(wrapper.find('[data-test=contact-table]').find('tr:nth-child(2)').text()).toEqual('Jenny5138675309')
    expect(wrapper.find('[data-test=contact-table]').element.textContent).toContain('Joe5131234567')
  })

  it('should save new contact when clicked, and update contacts table (v.2)', async () => {
    wrapper.vm.contactName = 'Jenny'
    wrapper.vm.phoneNumber = '5138675309'
    wrapper.vm.saveNewContact()
    await flushPromises()
    expect(wrapper.vm.allContacts).toEqual(expectedContacts)
  })
})


describe('contacts', () => {
  it('should render correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})