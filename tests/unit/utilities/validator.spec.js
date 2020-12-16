import {validatePhone} from "../../../src/utilities/validator";

beforeEach(() => {
  document.body.innerHTML = '<button id="submit-button" disabled="disabled"></button>'
})

describe('validatePhone', () => {
  it('should return true when phone number is valid', () => {
    expect(validatePhone('1234567890')).toEqual(true)
  })

  it.each(['123456789', '12345678901'])('should return false when phone number is the wrong length (%s)', (phoneNumber) => {
    expect(validatePhone(phoneNumber)).toEqual(false)
  })

  it('should enable submit button when phone number is valid', () => {
    validatePhone('1234567890')
    expect(document.getElementById('submit-button').disabled).toEqual(false)
  })
})



























// beforeEach(() => {
//   document.body.innerHTML = '<button disabled="disabled" id="save-button"></button>'
// })
//
// describe('validatePhone', () => {
//   it('should return true when phone number is valid', () => {
//     expect(validatePhone('1234567890')).toEqual(true)
//   })
//
//   it.each(['123456789', '12345678901'])('should return false when phone number has wrong length (%s)', (phoneNumber) => {
//     expect(validatePhone(phoneNumber)).toEqual(false)
//   })
//
//   it('should enable the save button when phone number is valid', () => {
//     validatePhone('1234567890')
//     expect(document.getElementById('save-button').disabled).toEqual(false)
//   })
// })








