<template>
  <v-dialog v-model="dialog" max-width="920">
    <template #activator="{ props: activatorProps }">
      <v-btn block variant="outlined" size="large" rounded="0" color="#E6E9EC" v-bind="activatorProps">
        <template #prepend>
          <v-icon color="primary">mdi-tune-variant</v-icon>
        </template>
        <span style="color: black">Advanced</span>
      </v-btn>
    </template>

    <v-card>
      <v-card-text class="pb-0">
        <v-card-title>Address</v-card-title>
        <v-row dense>
          <v-col cols="6" md="3">
            <v-text-field variant="outlined" label="Country"></v-text-field>
          </v-col>
          <v-col cols="6" md="3">
            <v-text-field variant="outlined" label="Region"></v-text-field>
          </v-col>
          <v-col cols="6" md="3">
            <v-text-field variant="outlined" label="City"></v-text-field>
          </v-col>
          <v-col cols="6" md="3">
            <v-text-field variant="outlined" label="Zip code"></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-text class="pt-0 pb-0">
        <v-card-title>Apartment info</v-card-title>
        <v-row dense>
          <v-col cols="6" md="3">
            <v-text-field variant="outlined" label="Rooms"></v-text-field>
          </v-col>
          <v-col cols="6" md="3">
            <v-text-field variant="outlined" label="Size"></v-text-field>
          </v-col>
          <v-col cols="6" md="3">
            <v-text-field variant="outlined" label="Sort"></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-text class="pt-0 pb-0">
        <v-card-title>Price</v-card-title>
        <v-row dense>
          <v-col cols="6" md="3">
            <v-text-field variant="outlined" label="Min Price"></v-text-field>
          </v-col>
          <v-col cols="6" md="3">
            <v-text-field variant="outlined" label="Max Price"></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions class="bg-blue-lighten-5">
        <v-spacer></v-spacer>
        <v-btn text @click="dialog = false">Cancel</v-btn>
        <v-btn color="primary" text @click="dialog = false">Submit</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { shallowRef } from 'vue'

const dialog = shallowRef(false)
</script>
