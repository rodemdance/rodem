<template>
  <div v-resize="onResize">
    <!-- Hero unit -->
    <v-row justify="center" align="center">
      <v-img
        gradient="to top right, rgba(255,181,167,0.3), rgba(109,104,117,0.53)"
        contains src="/images/header.jpg"
        class="bg align-center text-center hero-image">
        <v-menu v-model="colorPicker" absolute offset-y style="max-width: 600px;" :class="{ 'd-none': !loggedIn }">
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on" style="cursor: inherit;">
            <rodem-logo
              :style="{ width: $vuetify.breakpoint.smAndDown ? '80%' : '40%' }"
              :color="logoColor"
            ></rodem-logo>
            </div>
          </template>
          <v-color-picker v-model="logoColor" elevation="15" :class="{ 'd-none': !loggedIn }"></v-color-picker>
        </v-menu>
        <v-row class="pb-8 hero-text" v-show="changeHeader">
          <v-col cols="3" offset="1">
            <h4 class="mb-6 font-family-philosopher red--text fs135" @blur="handleText($event, 'mainText')" :contenteditable="loggedIn">
              {{ mainText }}
            </h4>
            <v-btn color="red darken-2" class="rounded-pill" dark>Хочу навчитись!</v-btn>
          </v-col>
        </v-row>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="position: absolute; bottom: 0; left: 0;">
          <path fill="#FFF" fill-opacity="1" d="M0,64L60,53.3C120,43,240,21,360,42.7C480,64,600,128,720,170.7C840,213,960,235,1080,218.7C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </v-img>
    </v-row>

    <!-- Main text if screen is small -->
    <v-row class="pb-8 text-center w-100 ma-0" v-show="!changeHeader">
      <v-col cols="12" class="text-center">
        <h4 class="mb-6 font-family-philosopher red--text fs135" @blur="handleText($event, 'mainText')" :contenteditable="loggedIn">
        {{ mainText }}
        </h4>
      <v-btn color="red darken-2 margin-auto" class="rounded-pill" dark>Хочу навчитись!</v-btn>
    </v-col>
  </v-row>

  <!-- About -->
  <v-row class="text-center pt-12 pb-12" justify="center" id="about" rel="about">
    <v-col cols="9">
      <h1 class="red--text text--darken-1 font-family-lobster mb-8">Про клуб</h1>
      <p class="font-family-philosopher mb-12 fs120" @blur="handleText($event, 'aboutText')" :contenteditable="loggedIn">{{ aboutText }}</p>
      <p class="font-family-philosopher font-weight-bold fs120" @blur="handleText($event, 'aboutStress')" :contenteditable="loggedIn">{{ aboutStress }}</p>
    </v-col>
  </v-row>

  <!-- Dance list -->
  <v-row id="danceList" rel="danceList" v-if="dances.length">
    <v-img
      gradient="to top right, rgba(248, 237, 235,0.95), rgba(248, 237, 235,0.95)"
      src="/images/smile.jpg" :aspect-ratio="16/1"
      class="bg align-center">

      <!-- Buttons -->
      <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 9" class="pt-12 pb-12 margin-auto">
        <v-sheet v-show="!$vuetify.breakpoint.smAndDown" class="mx-auto" color="rgba(0,0,0,0)" show-arrows>
          <v-slide-group v-model="currentDance">
            <v-slide-item v-for="(dance, index) in dances" :key="index" v-slot="{ active, toggle }">
              <v-btn class="mx-2" color="red" text :input-value="active" active-class="darken-4" mandatory rounded  @click="toggle">
                {{ dance.title }}
              </v-btn>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>

        <div class="text-center" v-show="$vuetify.breakpoint.smAndDown" v-if="typeof currentDance !== 'undefined'">
          <v-menu offset-y close-on-click rounded>
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="mx-2" color="red" dark active-class="darken-4" rounded v-bind="attrs" v-on="on">
                {{ dances[currentDance].title }}
                <v-icon right>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(dance, index) in dances" :key="index">
                <v-list-item-title @click="currentDance = index">{{ dance.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <!-- Dance information -->
        <v-card class="elevation-0 mt-8" color="rgba(0,0,0,0)" v-if="typeof currentDance !== 'undefined'" :key="danceKey">
          <v-card-text>
            <v-row>
              <v-col
                :cols="$vuetify.breakpoint.smAndDown ? 12 : 6"
                class="black--text font-family-philosopher"
                :class="{ 'offset-sm-6': !$vuetify.breakpoint.smAndDown && currentDance % 2 === 1 }">
                <v-fade-transition mode="in-out">
                <div v-show="Number.isInteger(currentDance)">
                  <div class="headline font-weight-bold mb-4" @blur="handleDance($event, 'title')" :contenteditable="loggedIn">
                    {{ dances[currentDance].title }}
                  </div>
                  <p @blur="handleDance($event, 'description')" :contenteditable="loggedIn">{{ dances[currentDance].description }}</p>
                  <div class="headline font-weight-bold mb-4">Розклад занять</div>
                  <vue-markdown :key="danceKey" v-show="!loggedIn">{{ dances[currentDance].time }}</vue-markdown>
                  <pre style="white-space: break-spaces;" class="font-family-philosopher" @blur="handleDance($event, 'time')" :contenteditable="loggedIn" v-show="loggedIn">{{ dances[currentDance].time }}</pre>
                  <v-btn color="red darken-2" class="rounded-pill mt-8" dark @click="danceDialog = true">Дізнатись більше</v-btn>
                  <v-btn color="grey lighten-1" class="rounded-pill mt-8 ml-2" @click="deleteDance" v-show="loggedIn  && dances.length > 1"><v-icon>mdi-delete</v-icon></v-btn>
                </div>
                </v-fade-transition>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions v-show="loggedIn" >
            <v-btn class="mx-2" color="red" text active-class="darken-4" rounded @click.prevent="addDance" left>
              <v-icon>mdi-plus</v-icon> Додати
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-img>
  </v-row>
  
  <!-- Events -->
  <v-row v-if="events.length" class="pt-16" justify="center"  id="eventsList" rel="eventsList">
    <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 8">
      <h1 class="red--text text-center text--darken-1 font-family-lobster mb-12">Найближчі події</h1>
      <v-row>
        <!-- Columns -->
        <v-col :cols="$vuetify.breakpoint.smAndDown || events.length === 1 ? 12 : 6">
          <event @update="updateEvent" @remove="removeEvent" @add="addEvent" :events="oddEvents" :add-btn="events.length % 2 === 0"></event>
        </v-col>
        <v-col :cols="$vuetify.breakpoint.smAndDown || events.length === 1 ? 12 : 6" class="mt-12">
          <event @update="updateEvent" @remove="removeEvent" @add="addEvent" :events="evenEvents" :add-btn="events.length % 2 === 1"></event>
        </v-col>
      </v-row>
    </v-col>
  </v-row>

  <!-- Reviews -->
  <v-row v-show="!editReview" style="position: relative; top:16px;" id="reviews" rel="reviews" class="pt-12" v-if="slides.length">
    <h1 class="text-center red--text text--darken-1 font-family-lobster margin-auto w-100 mb-0 pt-12" style="background: #EEE">Про нас говорять <v-icon v-show="loggedIn" @click="editReview = !editReview">mdi-pencil</v-icon></h1>
    <v-carousel cycle style="min-height: 300px;" hide-delimiter-background show-arrows-on-hover class="pb-4">
      <v-carousel-item interval="10000" v-for="(slide, i) in slides" :key="i">
        <v-sheet color="#EEE" class=pt-10>
          <v-row class="fill-height text-center" align="center" justify="center">
            <div style="width:60%" class="margin-auto">
              <div><v-img :src="slide.authorImg" :aspect-ratio="1" width="140" class="margin-auto mb-6 rounded-circle"></v-img></div>
              <div class="font-family-philosopher mb-8 fs120">{{ slide.text }}</div>
              <div class="font-family-lobster pb-16 fs150">
                <a target="_blank" :href="slide.url">{{ slide.author }}</a>
              </div>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-row>

  <v-row v-show="loggedIn && editReview" style="position: relative; top:16px; background: rgb(238, 238, 238);" id="reviews" rel="reviews" class="pt-12 pb-16" v-if="slides.length">
    <h1 class="text-center red--text text--darken-1 font-family-lobster margin-auto w-100 mb-0 pt-12" style="background: #EEE">Про нас говорять <v-icon @click="editReview = !editReview">mdi-pencil</v-icon></h1>
      <v-col cols="5" v-for="(slide, i) in slides" :key="'editReview-' + i" style="margin: auto;background: rgb(238, 238, 238);">
        <v-card>
          <v-card-text>
            <v-text-field
              label="Ім'я"
              v-model="slide.author"
            ></v-text-field>
            <v-text-field
              label="Посилання"
              v-model="slide.url"
            ></v-text-field>
            <v-text-field
              label="Картинка"
              v-model="slide.authorImg"
            ></v-text-field>
            <v-textarea
              label="Посилання"
              v-model="slide.text"
            ></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="deleteReview(i)" color="red darken-2" dark><v-icon left>mdi-delete</v-icon> видалити</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="5" style="margin: auto;">
        <v-card style="height: 100%;" tile class="elevation-0" color="rgba(0,0,0,0)">
          <v-card-text class="text-center">
            <v-btn @click="addReview" fab dark color="red darken-2" style="margin: auto;"><v-icon>mdi-plus</v-icon></v-btn>
          </v-card-text>
        </v-card>
      </v-col>
  </v-row>


  <!-- Contacts -->
  <v-row style="position: relative;"  id="contacts" rel="contacts">
    <h1 class="text-center red--text text--darken-1 font-family-lobster margin-auto w-100 mb-4 pt-4" style="position:absolute; z-index: 101; top: 0px;">Завітай вже сьогодні</h1>
    <div id="map" style="width: 100%; height: 75vh;"></div>
  </v-row>

  <!-- Save button -->
  <v-btn class="mx-2" v-show="loggedIn" @click="saveContent" fab dark large color="red darken-4" style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;">
    <v-icon dark>
      mdi-content-save
    </v-icon>
  </v-btn>

  <!-- Dance dialog -->
  <v-dialog v-if="dances && dances.length && Number.isInteger(currentDance)" v-model="danceDialog" width="500" style="z-index: 3010;">
    <v-card>
      <v-card-title class="grey fs120 lighten-2 text--darken-2 red--text font-family-lobster">{{ dances[currentDance].title }}</v-card-title>
      <v-img :src="dances[currentDance].image" :aspect-ratio="16/9" style="width: 100%;" class="mb-4"></v-img>
      <v-card-text class="font-family-philosopher">
        <vue-markdown :key="danceKey" v-show="!loggedIn">{{ dances[currentDance].fullDescription }}</vue-markdown>
        <pre style="white-space: break-spaces;" class="font-family-philosopher" @blur="handleDance($event, 'fullDescription')" :contenteditable="loggedIn" v-show="loggedIn">{{ dances[currentDance].fullDescription }}</pre>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="grey darken-2" class="rounded-pill" text @click="danceDialog = false">
          Закрити
        </v-btn>
        <v-btn color="red darken-2" class="rounded-pill" dark @click="danceDialog = false">Записатися!</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  </div>
</template>

<script>
import VueMarkdown from '@adapttive/vue-markdown'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { getDatabase, ref, get, set, child, push, update } from 'firebase/database'
import defaults from '~/static/defaults'
import icons from '~/static/icons'

const firebaseConfig = {
  apiKey: 'AIzaSyCovJ9Ogx5LfCd2-n4bz-Ysdb9ATDsRQLQ',
  authDomain: 'dance-rodem.firebaseapp.com',
  projectId: 'dance-rodem',
  storageBucket: 'dance-rodem.appspot.com',
  messagingSenderId: '1022956137580',
  appId: '1:1022956137580:web:5f6cf07f9ee441157bbc49',
  measurementId: 'G-1Z9Y3KX2W4',
  databaseURL: 'https://dance-rodem-default-rtdb.europe-west1.firebasedatabase.app/',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const r = ref(getDatabase(), 'rodem')

const deafultDance = {
  title: 'Гопак',
  image: '/images/header.jpg',
  description: 'Тут має бути опис гопака або якогось іншого гарного танця',
  time: `**Кожного дня**: з 8:00 до 20:00 (0-99 років)`,
  fullDescription: 'Довгий та чудовий текст про цей прекрасний танець'
}

const defaultReview = {
  text: '«Безумовно, це найкращі танці в Ужгороді!»',
  author: 'Добрі люди',
  authorImg: '/images/happy.jpg',
  url: 'https://facebook.com'
}


export default {
  name: 'IndexPage',
  components: {
    VueMarkdown
  },
  beforeMount () {
    // Set default values
    for (let [key, value] of Object.entries(defaults)) {
      this.$set(this, key, value)
    }
  },
  async mounted () {
    // Create Map
    const map = L.map('map', {
      gestureHandling: true,
      gestureHandlingOptions: {
        text: {
          touch: 'Щоб перемістити положення карти, користуйтеся двома пальцями',
          scroll: 'Для наближення карти, натисність Ctrl та використовуйте скрол',
          scrollMac: 'Для наближення карти, натисність \u2318 та використовуйте скрол'
        }
      }
    }).setView([48.6268452,22.3015054], 16)

    // Create map marker
    const rodemIcon = L.icon({
      iconUrl: '/map-marker.png',
      iconSize:     [38, 52],
      iconAnchor:   [22, 51],
      popupAnchor:  [-3, -50]
    })

    // Create map tile
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 20,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    }).addTo(map)

    // Add marker to the map
    const marker = L.marker([48.6254452,22.3015054], { icon: rodemIcon }).addTo(map)

    marker.bindPopup(`
      <img style="width:100%;" src="/images/fedyncia.jpg">
      <b>Танцювальний клуб "Родем",</b><br/>вулиця О. Фединця 43,<br/>Ужгород`)

    if (window.innerHeight > 500) marker.openPopup()

    this.initCustomValues()
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    loggedIn () {
      return this.user !== null && typeof this.user !== undefined && this.user.id !== undefined
    },
    changeHeader () {
      return this.windowWidth >= 1440
    },
    oddEvents () {
      let events = this.events.map((el, index) => {
        el.index = index
        return el
      })
      return this.events.filter((el, index) => index % 2 === 0)
    },
    evenEvents () {
      let events = this.events.map((el, index) => {
        el.index = index
        return el
      })
      return this.events.filter((el, index) => index % 2 === 1)
    },
    icons () {
      return icons
    }
  },
  methods: {
    async initCustomValues () {
      let d = await get(r, 'rodem')
      for (let [key, value] of Object.entries(d.val())) {
        this.$set(this, key, value)
      }
      this.$store.dispatch('setLoading', false)
    },
    onResize () {
      this.windowWidth = window.innerWidth
    },
    handleText (event, key) {
      this.$set(this, key, event.target.innerText)
    },
    handleDance (event, key) {
      this.$set(this.dances[this.currentDance], key, event.target.innerText)
      this.danceKey = this.danceKey + 1
    },
    updateEvent (event) {
      this.$set(this.events[event.index], event.field, event.value)
    },
    removeEvent (event) {
      this.events.splice(event, 1)
    },
    addEvent (event) {
      this.events.push(event)
    },
    addDance () {
      this.dances.push(deafultDance)
    },
    deleteDance () {
      this.dances.splice(this.currentDance, 1)
    },
    addReview () {
      this.slides.push(defaultReview)
    },
    deleteReview (index) {
      this.slides.splice(index, 1)
    },
    saveContent () {
      set(r,{
        mainText: this.mainText,
        aboutText: this.aboutText,
        aboutStress: this.aboutStress,
        logoColor: this.logoColor,
        slides: this.slides,
        dances: this.dances,
        events: this.events
      })
    }
  },
  watch: {
    currentDance (val) {
      this.danceKey = this.danceKey + 1
    }
  },
  data () {
    return {
      colorPicker: false,
      editReview: false,
      danceKey: 0,
      id: 'rodem',
      mainText: '',
      aboutText: '',
      aboutStress: '',
      logoColor: '#FFFFFF99',
      danceDialog: false,
      eventDialog: false,
      currentDance: 0,
      windowWidth: 1440,
      currentEvent: {},
      slides: [],
      dances: [],
      events: []
    }
  }
}

</script>

<style>
.bg {
  background-color: #4158D0;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 30%, #FFCC70 66%, #ffffff 100%);
}
.vh100 {
  height: 100vh;
}
.font-family-lobster {
  font-family: 'Lobster', 'Arial', sans-serif !important;
}
.font-family-philosopher {
  font-family: 'Philosopher', 'Arial', sans-serif;  
}
.fade {
  height: 1px;
  color: red;
  color: $color;
  background-image: linear-gradient(
    90deg,
    rgba($color, 0),
    rgba($color, 1) 50%,
    rgba($color, 0) 100%);
}
.v-slide-group__content {
  justify-content: space-around;
}
.margin-auto {
  margin: auto !important;
}
.hero-image {
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.main-logo {
  margin: auto;
  margin-bottom: 10%;
  opacity:0.6;
}
.hero-text {
  z-index: 1000;
  position: absolute;
  bottom:0;
  width: 100%;
}
.fs150 {
  font-size: 150%;
}
.fs135 {
  font-size: 135%;
}
.fs120 {
  font-size: 120%;
}
.event-image {
  border-radius: 8px;
}
.event-date {
  font-size: 80%;
  min-width: 64px;
}
.event-day {
  font-size:220%;
  line-height: 1;
}
.rel {
  position: relative;
}
.event-icon {
  background: rgba(248,237,235,1);
  padding: 4px;
  border-radius: 6px;
  position: absolute;
  right: 16px;
  top: -28px;
  border: rgba(255,181,167,1) 1px solid;
}
.v-carousel, .v-carousel__item {
  height: auto !important;
}
.v-carousel__controls {
  margin-bottom: 10px;
}
.v-dialog .v-card__title {
  background: radial-gradient(circle, rgba(248,237,235,1) 0%, rgba(255,181,167,1) 100%);
}

.v-dialog {
  z-index: 2004 !important;
}

.v-dialog::-webkit-scrollbar {
  width: 6px;
}

.v-dialog::-webkit-scrollbar-track {
  background: #CCC;
}

.v-dialog::-webkit-scrollbar-thumb {
  background-color: #666;
  border-radius: 20px;
}
.v-card__text ul {
  margin-bottom: 30px;
}
</style>