<template>
  <div class="home">
    <Contacts></Contacts>
  </div>
</template>

<script>
// @ is an alias to /src
import Contacts from '@/components/Contacts.vue'

export default {
  name: 'ContactView',
  components: {
    Contacts
  }
}
</script>
