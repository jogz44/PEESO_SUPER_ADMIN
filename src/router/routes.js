const routes = [
  /* {
    path: "/",
    component: () => import("layouts/LoginPage.vue"),
  }, */

  {
    path: "/",
    component: () => import("layouts/WebLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/WebPages/HomeContainer.vue"),
      },

      {
        path: "/ContactUs",
        component: () => import("pages/WebPages/ContactUs.vue"),
      },

      {
        path: "/WhatisPeeso",
        component: () => import("pages/WebPages/WhatisPeeso.vue"),
      },

      {
        path: "/HomePage",
        component: () => import("pages/WebPages/HomePage.vue"),
      },

      {
        path: "/LoginPage",
        component: () => import("layouts/LoginPage.vue"),
      },

      {
        path: "/SignUpPage",
        component: () => import("layouts/SignUpPage.vue"),
      },

      /*  {
        path: "/FooterPage",
        component: () => import("pages/WebPages/FooterPage.vue"),
      }, */
    ],
  },

  {
    path: "/DashBoard",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/DashBoard.vue") },

      {
        path: "/CompanyList",
        component: () => import("pages/CompanyList.vue"),
      },

      {
        path: "/TrainingsSeminar",
        component: () => import("src/pages/TrainingsSeminar.vue"),
      },
      {
        path: "/EvenTs",
        component: () => import("pages/EvenTs.vue"),
      },


 
      {
        path: "/SetTings",
        name: "SetTings", // Ensure this matches exactly
        component: () => import("pages/SetTings.vue"),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
