import {saveAddress} from "../../../src/utilities/addressPersistenceService"
import axios from 'axios'

jest.mock('axios')

beforeEach(() => {
  jest.resetAllMocks()
})

describe('saveAddress', function() {

  it('should save new address', async () => {
    let newAddress = {
      zip: '12345',
      state: 'OH'
    }
    let oldAddress = {
      zip: 45202,
      state: "KY"
    }
    let allAddresses = [newAddress, oldAddress]

    axios.post.mockImplementationOnce(() => Promise.resolve({data: allAddresses}))
    await expect(saveAddress(newAddress)).resolves.toEqual([allAddresses])
    expect(axios.post).toHaveBeenLastCalledWith("example.com/address", newAddress)
  });
});