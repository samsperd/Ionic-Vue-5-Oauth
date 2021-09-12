<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Please Login</ion-title>
      </ion-toolbar>
    </ion-header>      
      <ion-content>
    <form @submit.prevent="handleLogin">
      <ion-card>
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input v-model="form.email" id="email" type="email" required></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Password</ion-label>
          <ion-input v-model="form.password" type="password" id="password" required></ion-input>
        </ion-item>

        <ion-item>
          <ion-button color="success" type="submit" shape="round">
            Sign In
          </ion-button>
        </ion-item>

      </ion-card>
    </form>
          <ion-button href="/dashboard" type="button" shape="round">
        Dashboard
      </ion-button>

        <registerd />
      </ion-content>
  </ion-page>

</template>
<script>
import {mapActions} from 'vuex'
import Registerd from './checking';
// import egisterd from '/register.vue'
export default {
  name: 'SignIn',
  components: { Registerd  },
    data() {
        return {
        form: {
            email: "",
            password: ""
        }
        };
    },
    methods: {
        ...mapActions({
            signIn: 'auth/signIn'
        }),
        handleLogin() {
            this.signIn(this.form).then(() => {
              this.$router.replace({
                name: 'dashboard'
              })
            }).catch((e) => {
              console.log('failed');
            });
        }
    },
}
</script>