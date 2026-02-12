<template>
  <v-sheet class="mx-auto mb-12 mt-2" width="94%">
    <v-slide-group show-arrows>
      <v-slide-group-item v-for="categorie in categories" :key="categorie.categorieTitle">
        <v-card :width="cardWidth" :height="cardHeight" class="ma-4">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="100%" width="100%" cover
            gradient="to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)" class="d-flex align-center justify-center">
            <v-row class="fill-height ma-0" align="center" justify="center" dense no-gutters>
              <v-col class="text-center">
                <v-icon size="64" color="white">mdi-home</v-icon>
                <div class="white--text subtitle-1 mt-2" style="color: white">My House</div>
              </v-col>
            </v-row>
          </v-img>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>

<script setup>
import { reactive, computed } from 'vue';
import { useDisplay } from 'vuetify'

const { mdAndUp } = useDisplay()

const cardWidth = computed(() => (mdAndUp.value ? 280 : 161))
const cardHeight = computed(() => (mdAndUp.value ? 350 : 201))

const categories = reactive([
  { categorieTitle: 'House' },
  { categorieTitle: 'Apartment' },
  { categorieTitle: 'Villa' },
  { categorieTitle: 'Office' },
  { categorieTitle: 'Shop' },
  { categorieTitle: 'Warehouse' },
  { categorieTitle: 'Studio' },
  { categorieTitle: 'Penthouse' },
  { categorieTitle: 'Studio' },
])
</script>
