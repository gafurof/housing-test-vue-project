<template>
  <v-img src="@/assets/unsplash_2gDwlIim3Uw.png" class="my-bg" cover>
    <v-sheet class="overlay" tile></v-sheet>

    <v-row class="fill-height d-flex flex-column align-center justify-center">
      <p class="title-text">Skyper Pool Partment</p>
      <p class="address-text mt-1">112 Glenwood Ave Hyde Park, Boston, MA</p>

      <div class="d-flex ga-4 align-center mt-3">
        <div class="d-flex flex-column align-center justify-center">
          <v-icon color="white">mdi-account</v-icon>
          <p class="icon-text">diuabwud</p>
        </div>
        <div class="d-flex flex-column align-center justify-center">
          <v-icon color="white">mdi-account</v-icon>
          <p class="icon-text">diuabwud</p>
        </div>
        <div class="d-flex flex-column align-center justify-center">
          <v-icon color="white">mdi-account</v-icon>
          <p class="icon-text">diuabwud</p>
        </div>
        <div class="d-flex flex-column align-center justify-center">
          <v-icon color="white">mdi-account</v-icon>
          <p class="icon-text">diuabwud</p>
        </div>
      </div>

      <p class="custom-text mt-3">$5.250/mo</p>

      <v-btn class="outline-btn mt-5" variant="outlined" size="large">
        Read More
      </v-btn>
    </v-row>
  </v-img>
</template>

<style scoped>
.my-bg {
  position: relative;
  height: 571px;
}

@media (max-width: 600px) {
  .my-bg {
    height: 712px;
  }
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.fill-height {
  position: relative;
  z-index: 2;
  color: white;
  text-align: center;
}

.outline-btn {
  width: 180px;
  height: 44px;
  border-radius: 2px;
}

.title-text {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  letter-spacing: -0.02em;
  margin: 0;
}

.custom-text {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.02em;
  margin: 0;
}

.icon-text {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  margin-top: 4px;
  color: white;
}

.address-text {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0;
  margin: 12px 0 0 0;
  color: white;
}

@media (max-width: 600px) {
  .title-text {
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
  }

  .icon-text {
    font-size: 12px;
    line-height: 14px;
  }

  .address-text {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
