<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Please Login</ion-title>
      </ion-toolbar>
    </ion-header>      
      <ion-content>
        {{user}}
    <form @submit.prevent="handleRegister">
      <ion-card>

        <ion-item>
          <p>Or</p>
        </ion-item>
        <ion-item>
          <ion-button type="button" shape="round" router-link="/signup">
            Sign Up
          </ion-button>
        </ion-item>
      </ion-card>
    </form>
      </ion-content>
  </ion-page>

</template>
<script>

import { mapGetters } from 'vuex'

export default {
  name: 'Register',
  components: {  },
    data() {
        return {
        form: {
            email: "",
            password: ""
        }
        };
    },
    methods: {

        handleRegister() {
            // this.signIn(this.form);
            // console.log(this.authenticated);
        }
    },
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
    })
  },
   
}
</script>