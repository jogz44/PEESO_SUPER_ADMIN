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
        component: () => import("pages/WebPages/HomePage.vue"),
      },

      {
        path: "/WhatisPeeso",
        component: () => import("components/WhatisPeeso.vue"),
      },
    ],
  },

  {
    path: "/DashBoard",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/DashBoard.vue") },

      {
        path: "/CompanyProfile",
        component: () => import("pages/CompanyProfile.vue"),
      },

      {
        path: "/ViewAllJobs",
        component: () => import("pages/ViewAllJobs.vue"),
      },
      {
        path: "/MyCalendar_Jobs",
        component: () => import("pages/MyCalendar_Jobs.vue"),
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
