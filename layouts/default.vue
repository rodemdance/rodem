<template>
  <v-app>
    <v-app-bar inverted-scroll :scroll-threshold="vh" fixed app elevate-on-scroll :hide-on-scroll="false" class="main-bar">
        <v-spacer />
        <v-spacer />
        <v-btn color="red darken-2" text>Про клуб</v-btn>
        <v-spacer />
        <v-btn color="red darken-2" text>Заходи</v-btn>
        <v-spacer />
        <v-img contain height="50" width="180" src="/rodem.svg"></v-img>
        <v-spacer />
        <v-btn color="red darken-2" text>Відгуки</v-btn>
        <v-spacer />
        <v-btn color="red darken-2" text>Контакти</v-btn>
        <v-spacer />
        <v-spacer />
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
  data () {
    return {
      vh: 0,
      items: [
      ],
      icons: [
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