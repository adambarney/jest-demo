import {validateZip} from "../../../src/utilities/validator";

const $ = require('jquery');

beforeEach(() => {
    document.body.innerHTML='<div><button id="submit-button"/></div>'
})
describe('zip code validator', () => {
    it('should return true when valid zip code is supplied', () => {
        expect(validateZip('90210')).toBeTruthy()
    });

    it.each(['1234', '123456'])('should return false when zip code is invalid length (%s)', (zip) => {
        expect(validateZip(zip)).toBeFalsy()
    });

    it('should disable submit button when zip code is invalid', () => {
        validateZip('BADZIPCODE')
        expect(document.getElementById('submit-button').disabled).toBeTruthy()
    });
});




// describe('zip code validator', () => {
//     it('should return true when zip code is valid', () => {
//         expect(validateZip('90210')).toBeTruthy()
//     });
//
//     it.each([
//         ['1234', false],
//         ['12345', true],
//         ['123456', false]
//     ])('should only validate five digit zip codes (zip code %s, expecting %s)', (zip, result) => {
//         expect(validateZip(zip)).toEqual(result)
//     });
//
//     it('should disable the submit button when validation fails', () => {
//         document.body.innerHTML = '<input type="button" id="submitButton"></input>'
//         validateZip('ladikrnfg')
//         expect($('#submitButton').attr('disabled')).toEqual('disabled')
//     })
// })