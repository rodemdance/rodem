<template>
  <v-app>
    <v-app-bar  fixed app :hide-on-scroll="false" class="main-bar">
      <v-spacer v-show="$vuetify.breakpoint.mdAndUp" />
      <v-spacer v-show="$vuetify.breakpoint.mdAndUp" />
      <v-btn v-show="$vuetify.breakpoint.mdAndUp" color="red darken-2" @click="goTo(0)" text>Про клуб</v-btn>
      <v-spacer v-show="$vuetify.breakpoint.mdAndUp" />
      <v-btn v-show="$vuetify.breakpoint.mdAndUp" color="red darken-2" @click="goTo('eventsList')" text>Заходи</v-btn>
      <v-spacer v-show="$vuetify.breakpoint.mdAndUp" />
      <v-img contain height="50" @click="goTo(0)" src="/rodem.svg" style="max-width: 85px;"></v-img>
      <v-spacer v-show="$vuetify.breakpoint.mdAndUp" />
      <v-btn v-show="$vuetify.breakpoint.mdAndUp" color="red darken-2" @click="goTo('reviews')" text>Відгуки</v-btn>
      <v-spacer v-show="$vuetify.breakpoint.mdAndUp" />
      <v-btn v-show="$vuetify.breakpoint.mdAndUp" color="red darken-2" @click="goTo('contacts')" text>Контакти</v-btn>
      <v-spacer v-show="$vuetify.breakpoint.mdAndUp" />
      <v-spacer />
      <v-menu offset-y close-on-click rounded>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" class="hidden-md-and-up">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list class="top-list">
          <v-list-item v-for="(link, index) in menu" :key="'link-' + index" @click="goTo(link.selector)">
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main style="padding-top: 0px !important;">
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer dark padless class="font-family-philosopher">
      <v-card flat tile color="red lighten-1" class="white--text text-center w-100">
        <v-card-text class="mb-0 mt-4">
          <v-row class="justify-center custom-footer">
            <v-col cols="12" lg="3">
              <v-icon>mdi-mail</v-icon>
              <div class="mt-2"><a href="mailto:viktorija.ivanytska@gmail.com">viktorija.ivanytska@gmail.com</a></div>
            </v-col>
            <v-col cols="12" lg="3">
              <v-icon>mdi-phone</v-icon>
              <div class="mt-2"><a href="tel:+380663957382">066-395-7382</a></div>
            </v-col>
            <v-col cols="12" lg="3">
              <v-icon>mdi-facebook</v-icon>
              <div class="mt-2"><a href="https://www.facebook.com/RODEM.DANCE">RODEM.DANCE</a></div>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text">
          <div class="mb-2">Родем - танцювальна школа для людей будь-якого віку і рівнів підготовки.</div>
          <div @click="clicksOnCopyright = clicksOnCopyright + 1">&copy; Танцювальний клуб "Родем", {{ new Date().getFullYear() }}</div>
        </v-card-text>
      </v-card>
    </v-footer>
      <v-dialog v-model="hiddenLogin" width="460">
        <v-card
          style="max-width: 460px; width: 100%;"
          :tile="$vuetify.breakpoint.xs">
          <v-card-title class="red--text justify-center display-1">
            Вхід
          </v-card-title>
          <v-card-text class="pt-8" :class="{ 'pa-8': $vuetify.smAndUp }">
            <v-form>
              <v-text-field
                label="Ваш email"
                color="red"
                v-model="email"
                outlined
              ></v-text-field>
              <v-text-field
                color="red"
                label="Ваш пароль"
                v-model="password"
                :type="!showPassword ? 'password' : 'text'"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                outlined
              ></v-text-field>
            </v-form>
            <v-btn block color="red darken-2" class="rounded-pill" @click="login" dark>Увійти!</v-btn>
            <v-btn block color="blue" class="mt-2 mb-2" @click="logout" v-show="false">Вийти</v-btn>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-fade-transition>
      <div class="loading-screen" v-show="loading" style="position: fixed;">
        <v-img contain src="/rodem.svg" style="max-width: 50%; max-height: 50%;"></v-img>
      </div>
      </v-fade-transition>
  </v-app>
</template>

<script>

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const pallette1 = {
  primary: 'ffc8dd',
  complementary: 'ffafcc',
  secondary: 'a2d2ff',
  complementarySecondary: 'bde0fe',
  active: 'cdb4db'
}

const pallette2 = {
  primary: 'fec89a',
  complementary: 'f9dcc4',
  secondary: 'ffb5a7',
  complementarySecondary: 'fcd5ce',
  active: 'f8edeb'
}

export default {
  name: 'DefaultLayout',
  mounted () {
    window.onresize = () => {
      this.vh = window.innerHeight
    }
  },
  methods: {
    goTo (val) {
      if (val === 0) return this.$vuetify.goTo(0, { easing: 'easeInOutCubic', duration: 300, offset: 0 })
      this.$vuetify.goTo('#' + val, { easing: 'easeInOutCubic', duration: 300, offset: val === 'contacts' ? 64 : 0 })
    },
    async login () {
      const auth = getAuth()
      let res = await signInWithEmailAndPassword(auth, this.email, this.password).catch(err => { return 'nouser'})
      if (res === 'nouser') {
        console.log('User not found')
        return false
      }
      this.$store.dispatch('setUser', { id: res.user.uid })
      this.hiddenLogin = false
    },
    logout () {
      console.log('logout')
    },
    changeLoading (val) {
      console.log(val)
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  data () {
    return {
      vh: 0,
      email: '',
      password: '',
      showPassword: false,
      hiddenLogin: false,
      clicksOnCopyright: 0,
      items: [],
      menu: [
        { selector: 'about', title: 'Про клуб' },
        { selector: 'eventsList', title: 'Заходи' },
        { selector: 'reviews', title: 'Відгуки' },
        { selector: 'contacts', title: 'Контакти' }
      ]
    }
  },
  watch: {
    clicksOnCopyright (val) {
      if (val === 5) {
        this.clicksOnCopyright = 0
        this.hiddenLogin = true
      }
    }
  }
}
</script>
<style>
.w-100 {
  width: 100%;
}

.main-bar {
  background: rgb(248,237,235);
  background: radial-gradient(circle, rgba(248,237,235,1) 0%, rgba(255,181,167,1) 100%);
}

.v-app-bar {
  z-index: 200 !important;
}

.leaflet-container {
  z-index: 100 !important;
}

.custom-footer a {
  text-decoration: none;
  color: white !important;
  font-size: 120%;
}

.loading-screen {
  background: rgb(248,237,235);
  background: radial-gradient(circle, rgba(248,237,235,1) 0%, rgba(255,181,167,1) 100%);
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>