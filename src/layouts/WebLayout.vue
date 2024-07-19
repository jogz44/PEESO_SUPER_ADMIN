<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="page">
      <q-toolbar class="bg-white text-black">
        <q-toolbar-title style="font-weight: bold">
          <span style="color: #3eb13c"> #WEARE</span>
          <span style="color: #e3db06">TAGUM</span>
        </q-toolbar-title>
        <q-space />
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
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page>
        <router-view />
      </q-page>
    </q-page-container>


  </q-layout>
</template>

<script>
/* import FooterPage from "pages/WebPages/FooterPage.vue"; */

export default {
  name: "WebLayout",
  components: {
   /*  FooterPage, */
  },
  methods: {
    goToPage(page) {
      this.$router.push(page);
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
.transparent-color {
  background-color: rgba(0, 0, 0, 0.5);
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
}

.page {
  margin-right: 200px;
  margin-left: 200px;
  margin-top: 20px;
}

.q-toolbar.bg-black {
  background-color: rgba(250, 250, 250, 0);
}

.q-btn.text-white {
  color: white;
}

.custom-hover {
}

.custom-hover:hover {
  background: linear-gradient(40deg, #279f27, #5fc331);
  transition: background-color 0.3s ease;
  color: white;
  border-radius: 18px;
}
</style>
