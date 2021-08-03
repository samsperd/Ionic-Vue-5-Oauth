<template>
    <h1>{{ authenticated }}</h1>
</template>
<script>
import { mapGetters } from 'vuex'

export default {

  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
    })
  },
   
}
</script>