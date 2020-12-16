<template>
  <div>
    <v-container>
      <h1>Contacts</h1>
      <v-row>
        <v-col cols="3">
          <v-form>
            <v-text-field
                data-test="name-input"
                label="Name"
                v-model="contactName">
            </v-text-field>
            <v-text-field
                data-test="phone-input"
                label="Phone Number"
                v-model="phoneNumber">
            </v-text-field>
            <v-btn data-test="submit-button"
                   id="submit-button"
                   @click="saveNewContact">Save
            </v-btn>
          </v-form>
        </v-col>
        <v-col>
          <v-data-table data-test="contact-table"
              :headers=headers
              :items=allContacts></v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {getContacts, saveContact} from '../utilities/contactPersistenceService'

export default {
  name: 'Contacts',
  data: function () {
    return {
      contactName: '',
      phoneNumber: '',
      headers: [
        {text: 'Name', value: 'name'},
        {text: 'Phone Number', value: 'phoneNumber'}
      ],
      allContacts: []
    }
  },
  mounted() {
    this.getExistingContacts()
  },
  methods: {
    saveNewContact: function () {
      saveContact({
        name: this.contactName,
        phoneNumber: this.phoneNumber
      }).then((response) => {
        this.allContacts = response
      })
    },
    getExistingContacts: function () {
      getContacts().then((response) => {
        this.allContacts = response
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  max-width: 960px;
}

</style>
