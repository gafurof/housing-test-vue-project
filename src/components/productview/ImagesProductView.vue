<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-img :src="img" :height="$vuetify.display.mdAndUp ? '400' : '200'" cover />
    </v-col>

    <v-col cols="12" md="6">
      <v-row>

        <template v-if="$vuetify.display.mdAndUp">
          <v-col cols="6" v-for="(item, index) in 3" :key="index" class="pa-1" style="margin-top: 5.5px;">
            <v-img :src="img" height="195" cover></v-img>
          </v-col>
          <CoruselImages />
        </template>

        <template v-else>
          <v-col cols="6" class="pa-3">
            <v-img :src="img" height="94" cover />
          </v-col>

          <CoruselImages />

        </template>

      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
import CoruselImages from './CoruselImages.vue';
import img from '@/assets/unsplash_2gDwlIim3Uw.png'
</script>