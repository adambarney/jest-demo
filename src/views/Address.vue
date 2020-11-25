<template>
  <div class="home">
    <AddressBook></AddressBook>
  </div>
</template>

<script>
// @ is an alias to /src
import AddressBook from '@/components/AddressBook.vue'

export default {
  name: 'Address',
  components: {
    AddressBook
  }
}
</script>
