<template>
  <v-app>
    <v-app-bar inverted-scroll :scroll-threshold="vh" fixed app elevate-on-scroll :hide-on-scroll="false" class="main-bar">
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
          <v-btn icon v-bind="attrs" v-on="on">
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
    <v-main>
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
          <!--
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
          -->
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text">
          <div class="mb-2">Родем - танцювальна школа для людей будь-якого віку і рівнів підготовки.</div>
          <div>&copy; Танцювальний клуб "Родем", {{ new Date().getFullYear() }}</div>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>

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
    }
  },
  data () {
    return {
      vh: 0,
      items: [
      ],
      icons: [
      ],
      menu: [
        { selector: 'about', title: 'Про клуб' },
        { selector: 'eventsList', title: 'Заходи' },
        { selector: 'reviews', title: 'Відгуки' },
        { selector: 'contacts', title: 'Контакти' }
      ]
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
  z-index: 2000 !important;
}

.custom-footer a {
  text-decoration: none;
  color: white !important;
  font-size: 120%;
}

</style>