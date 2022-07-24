<template>
  <div>
    <v-card
      v-for="(event, index) in events"
      :key="'event-' + index"
      color="rgba(0,0,0,0)"
      class="elevation-0 event-card mb-8">
      <v-img :src="event.image" contain width="100%" class="event-image"></v-img>
      <div class="d-flex mt-2 mb-2">
        <div
          class="text-center d-flex align-center flex-column event-date"
          :class="{ 'justify-center': !$vuetify.breakpoint.smAndDown, 'pt-1': $vuetify.breakpoint.smAndDown }">
          <strong class="event-day">{{ (event.date.getDay() + '').padStart(2, '0') }}</strong>
          <strong>{{ (event.date.getMonth() + '').padStart(2, '0') }}.{{ event.date.getFullYear() }}</strong>
        </div>
        <div div class="flex-grow ml-6">
          <div class="d-flex justify-space-between rel">
            <div @click="selectEvent(event)" class="flex-grow font-weight-bold font-family-philosopher red--text text--darken-3 fake-link">
              {{ event.title }}
            </div>
            <div style="min-width: 64px">
              <div class="icon event-icon">
                <v-icon>mdi-human-male-child</v-icon>
              </div>
            </div>
          </div>
          <div class="font-family-philosopher">{{ event.description }}</div>
        </div>
      </div>
    </v-card>
    <v-dialog v-model="eventDialog" width="500" style="z-index: 3010;">
      <v-card>
        <v-card-title class="grey fs120 lighten-2 text--darken-2 red--text font-family-lobster">{{ currentEvent.title }}</v-card-title>
        <v-img :src="currentEvent.image" :aspect-ratio="16/9" style="width: 100%;" class="mb-4"></v-img>
        <v-card-text class="font-family-philosopher">
          <vue-markdown>{{ currentEvent.fullText }}</vue-markdown>
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

export default {
  props: ['events'],
  name: 'event',
  components: {
    VueMarkdown
  },
  data () {
    return {
      eventDialog: false,
      currentEvent: {}
    }
  },
  methods: {
    selectEvent (val) {
      this.$set(this, 'currentEvent', val)
      this.eventDialog = true
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