<template>
  <div>
    <v-container>
      <h1>Contacts</h1>
      <v-row>
        <v-col cols="3">
          <v-form>
            <v-text-field
                label="Name"
                v-model="name">
            </v-text-field>
            <v-text-field
                label="Phone Number"
                v-model="phoneNumber">
            </v-text-field>
            <v-btn>Save</v-btn>
          </v-form>
        </v-col>
        <v-col>
          <v-data-table :headers="headers" :items="allContacts" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'AddressBook',
  data: function() {
    return {
      name: '',
      phoneNumber: '',
      headers: [
        {text: 'Name', value: 'name'},
        {text: 'Phone Number', value: 'phoneNumber'}
      ],
      allContacts: [
        {name: 'Joe', phoneNumber: '5131234567'},
        {name: 'Mike', phoneNumber: '5132223322'}
      ]
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
