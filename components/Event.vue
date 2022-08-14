<template>
  <div>
    <v-card
      v-for="(event, index) in events"
      :key="'event-' + index"
      color="rgba(0,0,0,0)"
      class="elevation-0 event-card mb-8">
      <v-img @dragover.stop.prevent @drop.stop.prevent="dropHandler($event, event.index, event.title)" :src="event.image" width="100%" class="event-image">
        <v-btn
          @click="remove(event.index)"
          v-show="loggedIn"
          fab
          x-small
          style="position: absolute; top:12px; right: 12px;"
        ><v-icon>mdi-close</v-icon></v-btn>
      </v-img>
      <div class="d-flex mt-2 mb-2">

        <v-menu offset-y v-model="dateMenu" :close-on-click="false">
          <template v-slot:activator="{ on, attrs }">
            <div
              v-bind="attrs" v-on="on"
              @click="dateIndex = event.index"
              :style="{ cursor: loggedIn ? 'pointer' : 'inherit' }"
              class="text-center d-flex align-center flex-column event-date"
              :class="{ 'justify-center': !$vuetify.breakpoint.smAndDown, 'pt-1': $vuetify.breakpoint.smAndDown }">
              <strong class="event-day">{{ (new Date(event.date).getDate() + '').padStart(2, '0') }}</strong>
              <strong>{{ (new Date(event.date).getMonth() + 1 + '').padStart(2, '0') }}.{{ new Date(event.date).getFullYear() }}</strong>
            </div>
          </template>
          <v-date-picker v-model="datepicker" color="red darken-2" locale="uk-ua" :class="{ 'd-none': !loggedIn }"></v-date-picker>
        </v-menu>


        <div div class="flex-grow ml-6" style="width: 100%;">
          <div class="d-flex justify-space-between rel">
            <div @click="selectEvent(event)" class="flex-grow font-weight-bold font-family-philosopher red--text text--darken-3 fake-link">
              {{ event.title }}
            </div>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <div style="min-width: 64px" v-bind="attrs" v-on="on" :style="{ cursor: loggedIn ? 'pointer' : 'inherit' }">
                  <div class="icon event-icon">
                    <v-icon>{{ event.icon }}</v-icon>
                  </div>
                </div>
              </template>
              <v-list height="300px" style="background: #FFF;" :class="{ 'd-none': !loggedIn }">
                <v-list-item v-for="(icon, index) in icons" @click="update(event.index, 'icon', icon)" :key="index" style="background: #FFF;">
                  <v-list-item-title><v-icon left>{{ icon }}</v-icon> {{ icon }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
          <div
            class="font-family-philosopher"
            @blur="update(currentEvent.index, 'description', $event.target.innerText)"
            :contenteditable="loggedIn">{{ event.description }}</div>
        </div>
      </div>
    </v-card>
    <v-btn
      v-show="loggedIn && addBtn"
      @click="addEvent"
      block
      dark
      color="red darken-2"
    ><v-icon left>mdi-plus</v-icon>Додати захід</v-btn>
    <v-dialog v-model="eventDialog" width="500" style="z-index: 3010;">
      <v-card>
        <v-card-title
          class="grey fs120 lighten-2 text--darken-2 red--text font-family-lobster"
          @blur="update(currentEvent.index, 'title', $event.target.innerText)"
          :contenteditable="loggedIn">
          {{ currentEvent.title }}
        </v-card-title>
        <v-img @dragover.stop.prevent @drop.stop.prevent="dropHandler($event, currentEvent.index, currentEvent.title)" :src="currentEvent.image" :aspect-ratio="16/9" style="width: 100%;" class="mb-4"></v-img>
        <v-card-text class="font-family-philosopher">
          <vue-markdown :key="eventKey" v-show="!loggedIn">{{ currentEvent.fullText }}</vue-markdown>
          <pre style="white-space: break-spaces;" class="font-family-philosopher" @blur="update(currentEvent.index, 'fullText', $event.target.innerText)" :contenteditable="loggedIn" v-show="loggedIn">{{ currentEvent.fullText }}</pre>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey darken-2" class="rounded-pill" text @click="eventDialog = false">
            Закрити
          </v-btn>
          <v-btn color="red darken-2" class="rounded-pill" dark @click="eventDialog = false">Записатися!</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import VueMarkdown from '@adapttive/vue-markdown'
import { icons } from '~/static/icons'

const defaultEvent = {
  date: new Date().toISOString().substr(0, 10),
  title: 'Новий чудовий захід',
  description: 'Короткий опис нового чудового заходу',
  fullText: 'Довжелезний опис нового чудового заходу',
  icon: 'mdi-human-male-child',
  image: '/images/children_reading.jpg'
}

export default {
  props: ['events', 'addBtn'],
  name: 'event',
  components: {
    VueMarkdown
  },
  data () {
    return {
      eventDialog: false,
      currentEvent: {},
      eventKey: 0,
      datepicker: '',
      dateMenu: false,
      dateIndex: null
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    loggedIn () {
      return this.user !== null && typeof this.user !== undefined && this.user.id !== undefined
    },
    icons () {
      return icons
    }
  },
  methods: {
    update (index, field, value) {
      this.$emit('update', { index, field, value })
      this.eventKey = this.eventKey + 1
    },
    remove (index) {
      this.$emit('remove', index)
    },
    addEvent (index) {
      this.$emit('add', defaultEvent)
    },
    selectEvent (val) {
      this.$set(this, 'currentEvent', val)
      this.eventDialog = true
    },
    dropHandler(e, index, name) {
      this.$emit('updateimage', { e, index, name })
    }
  },
  watch: {
    datepicker (value) {
      this.update(this.dateIndex, 'date', value)
      this.dateMenu = false
    }
  }
}
</script>
<style>
.fake-link {
  cursor: pointer;
}
.fake-link:hover {
  text-decoration: underline;
}
</style>