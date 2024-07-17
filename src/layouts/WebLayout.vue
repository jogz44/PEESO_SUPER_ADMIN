<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="page">
      <q-toolbar class="bg-white text-black">
        <q-toolbar-title style="font-weight: bold">
          <span style="color: #3eb13c"> #WEARE</span
          ><span style="color: #e3db06">TAGUM</span>
        </q-toolbar-title>
        <q-space />
        <q-btn flat class="text-black" @click="goToPage('/')">Home</q-btn>
        <q-btn flat class="text-black" @click="goToPage('/WhatisPeeso')"
          >WHAT IS PEESO</q-btn
        >
        <q-btn flat class="text-black" @click="goToPage('/')">COntact us</q-btn>
        <q-btn flat class="text-black" @click="goToPage('/')">Sign up </q-btn>
        <q-btn flat class="text-black" @click="goToPage('/DashBoard')"
          >Log in</q-btn
        >
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!--  <q-footer>
      <q-toolbar>
        <q-toolbar-title> © 2024 My Portfolio </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->
  </q-layout>
</template>

<script>
export default {
  name: "WebLayout",
  methods: {
    goToPage(page) {
      this.$router.push(page);
    },
  },
};
</script>

<style scoped>
.page {
  margin-right: 100px;
  margin-left: 100px;
  margin-top: 20px;
}

.q-toolbar.bg-black {
  background-color: rgba(250, 250, 250, 0);
}

.q-btn.text-white {
  color: white;
}

.q-btn.text-white:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
