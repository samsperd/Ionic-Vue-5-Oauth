<template>
  <div id="container">
      <div v-if="authenticated">
        <h3>My name is <strong>{{user.name}}</strong></h3>
        <h3>My email is <strong>{{user.email}}</strong></h3>
      </div>

    <p><strong>{{ name }}</strong></p>
    <!-- <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p> -->
      <ion-button href="/" type="submit" shape="round">
        Sign In
      </ion-button>
      <ion-button href="#" @click.prevent="signOut" type="submit" shape="round">
        Sign Out
      </ion-button>
      </div>
</template>

<script>
import {IonButton } from '@ionic/vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ExploreContainer',
  components: {IonButton },
  props: {
    name: String
  },
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user'
    }),
  },
  methods: {
    ...mapActions({
      signOutAction: 'auth/signOut'
    }),
    signOut() {
      this.signOutAction().then(() => {
        this.$router.replace({
          name: 'home'
        })
      })
    }
  },
  mounted() {
    // console.log(this.authenticated);
  },
}
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>