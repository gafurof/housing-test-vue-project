<template>
  <v-sheet class="mx-auto mb-12" width="95%">
    <v-slide-group show-arrows>
      <v-slide-group-item v-for="n in 25" :key="n" class="mx-2">
        <v-card class="mr-6 ml-1" width="18rem">
          <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png" cover></v-img>

          <v-card-item>
            <v-card-title>Cafe Badilico</v-card-title>

            <v-card-subtitle>
              <span class="me-1">Local Favorite</span>
            </v-card-subtitle>
          </v-card-item>

          <div class="d-flex align-center justify-space-between pa-3" width="100%">
            <div class="d-flex flex-column align-center justify-center" style="font-size: 13px">
              <v-icon>mdi-account</v-icon>
              <p>4 beds</p>
            </div>
            <div class="d-flex flex-column align-center justify-center" style="font-size: 13px">
              <v-icon>mdi-account</v-icon>
              <p>5 baths</p>
            </div>
            <div class="d-flex flex-column align-center justify-center" style="font-size: 13px">
              <v-icon>mdi-account</v-icon>
              <p>1 agarage</p>
            </div>
            <div class="d-flex flex-column align-center justify-center" style="font-size: 13px">
              <v-icon>mdi-account</v-icon>
              <p>1200 Sq Ft</p>
            </div>
          </div>

          <v-divider class="mx-4 mb-1"></v-divider>

          <v-card-subtitle>
            <del class="me-1">$2,800/mo</del>
          </v-card-subtitle>
          <v-card-title>$7,500/mo</v-card-title>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>
