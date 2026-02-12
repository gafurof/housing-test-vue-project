<template>
  <div class="d-flex flex-column w-100 bg-lightBlue">
    <v-container class="mt-13 mb-13">
      <h2 class="text-center">Why Choose Us?</h2>
      <p class="text-center">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
      <v-sheet class="d-flex flex-wrap mt-5 bg-lightBlue ga-10 justify-center">
        <v-sheet v-for="choose in chooses" :key="choose.chooseTitle" width="235px" class="bg-lightBlue d-flex flex-column align-center text-center ga-3 pa-2">
          <v-icon style="font-size: 50px" color="primary" :icon="choose.chooseIcon"></v-icon>
          <h4>{{ choose.chooseTitle }}</h4>
          <p>{{ choose.chooseSubTitle }}</p>
        </v-sheet>
      </v-sheet>
    </v-container>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const chooses = reactive([
  {
    chooseIcon: 'mdi-emoticon-outline',
    chooseTitle: 'Trusted By Thousands',
    chooseSubTitle: 'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.'
  },
  {
    chooseIcon: 'mdi-home-outline',
    chooseTitle: 'Trusted By Thousands',
    chooseSubTitle: 'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.'
  },
  {
    chooseIcon: 'mdi-phone-outline',
    chooseTitle: 'Trusted By Thousands',
    chooseSubTitle: 'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.'
  },
  {
    chooseIcon: 'mdi-map-marker-outline',
    chooseTitle: 'Trusted By Thousands',
    chooseSubTitle: 'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.'
  }
])
</script>
