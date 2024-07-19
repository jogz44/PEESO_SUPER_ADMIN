<template>
  <q-footer class="bg-black text-white">
    <div style="padding-right: 50px; padding-left: 50px">
      <q-toolbar>
        <q-toolbar-title> © 2024 City Goverment Of Tagum </q-toolbar-title>
        <div>
          <q-btn flat class="custom-hover" @click="scroll('HomePage')"
            >Home</q-btn
          >
          <q-btn flat class="custom-hover" @click="scroll('WhatisPeeso')"
            >WHAT IS PEESO</q-btn
          >
          <q-btn flat class="custom-hover" @click="scroll('ContactUs')"
            >Contact Us</q-btn
          >
          <q-btn flat class="custom-hover" @click="goToPage('')">Sign up</q-btn>
          <q-btn flat class="custom-hover" @click="goToPage('/DashBoard')"
            >Log in</q-btn
          >
        </div>
      </q-toolbar>
      <q-toolbar>
        <div>
          <div class="row">
            <div class="col-5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus ea magni eligendi ullam ratione in distinctio,
                tenetur suscipit magnam. Id rem eaque hic enim natus cumque
                impedit voluptas temporibus perferendis.
              </p>
            </div>
          </div>
        </div>
        <div>
          <q-icon name="people" size="30px"></q-icon>
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
  },
};
</script>

<style scoped>
.bg-black {
  background-color: black;
}
</style>
