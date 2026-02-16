<template>
  <v-container>
    <v-row class="align-center" :class="{ 'elevation-3 rounded-lg ma-1': !mdAndUp }">
      <v-col cols="12" md="8">
        <v-text-field
          variant="outlined"
          label="Enter an address, neighborhood, city, or ZIP code"
          hide-details
          density="comfortable"
          rounded="0"
          style="border-radius: 1px #E6E9EC"
        >
          <template #prepend-inner>
            <v-icon color="primary">mdi-home</v-icon>
          </template>
        </v-text-field>
      </v-col>

      <v-col cols="12" md="2">
        <AdvancedDialog/>
      </v-col>

      <v-col cols="12" md="2">
        <v-btn block color="primary" size="large" prepend-icon="mdi-magnify" rounded="0">
          Search
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useDisplay } from 'vuetify'
import AdvancedDialog from './AdvancedDialog.vue';

const { mdAndUp } = useDisplay()
</script>
