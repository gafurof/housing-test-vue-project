<template>
  <v-col v-if="$vuetify.display.mdAndUp" @click="dialog = true" cols="6" class="pa-1 cursor-pointer" style="margin-top: 5.5px;">
    <v-img :src="images[2]" height="195" cover>
      <div class="d-flex align-center justify-center text-white text-h5"
        style="background: rgba(0,0,0,0.5); height:100%;">
        +15
      </div>
    </v-img>
  </v-col>
  <v-col v-else cols="6" class="pa-3" @click="dialog = true">
    <v-img height="94" cover>
      <div class="d-flex align-center justify-center text-white text-h5"
        style="background: rgba(0,0,0,0.5); height:100%;">
        +15
      </div>
    </v-img>
  </v-col>


  <v-dialog v-model="dialog" fullscreen scrim="black" @click:outside="dialog = false">
    <v-card class="bg-black">

      <v-btn icon="mdi-close" class="position-absolute" style="top: 20px; right: 20px; z-index: 10"
        @click="dialog = false" />

      <v-carousel hide-delimiters show-arrows="hover" height="100vh">
        <v-carousel-item v-for="(image, index) in images" :key="index">
          <v-img :src="image" cover height="100vh" />
        </v-carousel-item>
      </v-carousel>

    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue'

const dialog = ref(false)

const images = [
  'https://images.unsplash.com/photo-1507089947368-19c1da9775ae',
  'https://images.unsplash.com/photo-1492724441997-5dc865305da7',
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
  'https://images.unsplash.com/photo-1484154218962-a197022b5858'
]
</script>