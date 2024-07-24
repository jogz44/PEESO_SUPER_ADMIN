<template>
  <q-footer class="bg-black text-white">
    <div style="padding-right: 50px; padding-left: 50px">
      <q-toolbar>
        <q-toolbar-title><b>ABOUT US</b> </q-toolbar-title>
        <div>
          <q-btn-dropdown
            flat
            class="custom-hover fontnibai"
            v-if="$q.screen.width <= 375"
            label="Menu"
            icon="menu"

            style="margin-left: -100px; margin-right: -40px"
          >
            <q-item clickable @click="scroll('HomePage')">
              <q-btn class="custom-hover" flat>Home</q-btn></q-item
            >
            <q-item clickable @click="scroll('WhatisPeeso')">
              <q-btn class="custom-hover" flat>About Us</q-btn></q-item
            >
            <q-item clickable @click="scroll('ContactUs')"
              ><q-btn class="custom-hover" flat>Contact Us</q-btn></q-item
            >
            <q-item clickable @click="goToPage('')"
              ><q-btn class="custom-hover" flat>Sign up</q-btn></q-item
            >
            <q-item clickable @click="goToPage('/DashBoard')"
              ><q-btn class="custom-hover" flat>Log in</q-btn></q-item
            >
          </q-btn-dropdown>

          <!-- Regular buttons for larger screens -->
          <div v-else>
            <q-btn flat class="custom-hover" @click="scroll('HomePage')"
              >Home</q-btn
            >
            <q-btn flat class="custom-hover" @click="scroll('WhatisPeeso')"
              >What is Peeso</q-btn
            >
            <q-btn flat class="custom-hover" @click="scroll('ContactUs')"
              >Contact Us</q-btn
            >
            <q-btn flat class="custom-hover" @click="goToPage('')"
              >Sign up</q-btn
            >
            <q-btn flat class="custom-hover" @click="goToPage('/DashBoard')"
              >Log in</q-btn
            >
          </div>
        </div>
      </q-toolbar>
      <q-toolbar>
        <div>
          <div class="row">
            <div class="col-5">
              <p>
                Welcome to PEESO, your go-to platform for seamless and efficient
                job matching. Our web app is designed to bridge the gap between
                employers and job seekers, making the recruitment process more
                accessible and effective.
              </p>
            </div>
          </div>
        </div>
        <div style="margin-left: -100px; margin-top: -3 0px">
          <q-btn>
            <q-icon size="24px" name="fab fa-facebook" />
          </q-btn>

          <q-btn>
            <q-icon size="24px" name="fab fa-twitter" />
          </q-btn>
          <q-btn>
            <q-icon size="24px" name="fab fa-instagram" />
          </q-btn>
          <q-btn>
            <q-icon size="24px" name="fab fa-youtube" />
          </q-btn>
        </div>
      </q-toolbar>
    </div>
  </q-footer>
</template>

<script>
export default {
  name: "FooterPage",
  methods: {
    goToPrivacyPolicy() {
      this.$router.push("/privacy-policy");
    },
    goToTermsOfService() {
      this.$router.push("/terms-of-service");
    },

    scroll(refName) {
      const element = document.getElementById(refName);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style scoped>
.bg-black {
  background-color: black;
}
</style>
