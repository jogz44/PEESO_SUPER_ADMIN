<template>
  <q-layout class="backgroundcolor">
    <div class="row" id="HomePage">
      <HomePage />
    </div>
    <div class="row flex-center1" id="WhatisPeeso">
      <WhatisPeeso />
    </div>
    <div class="row flex-contactus" id="ContactUs">
      <ContactUs />
    </div>
    <q-footer>
      <FooterPage />
    </q-footer>
  </q-layout>
</template>

<script>
import FooterPage from "pages/WebPages/FooterPage.vue";
import ContactUs from "pages/WebPages/ContactUs.vue";
import HomePage from "pages/WebPages/HomePage.vue";
import WhatisPeeso from "pages/WebPages/WhatisPeeso.vue";
export default {
  data() {
    return {};
  },
  components: {
    FooterPage,
    HomePage,
    WhatisPeeso,
    ContactUs,
  },
};
</script>

<style scoped>
@media only screen and (max-width: 375px) {
  .backgroundcolor {
    overflow-x: hidden;
  }
}

.backgroundcolor {
  background-color: rgba(252, 250, 250, 0.943);
}

.flex-contactus {
  margin-top: 450px;

  display: flex;
  justify-content: center;
  align-items: flex-start; /* Align items to the top */
}

.flex-center1 {
  margin-top: -640px;
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Align items to the top */
  height: 100vh; /* Full height to ensure vertical centering */
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Align items to the top */
  height: 100vh; /* Full height to ensure vertical centering */
}
</style>
