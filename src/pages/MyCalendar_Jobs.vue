<template>
  <!--   <q-page> -->

  <div class="custom-mx-xxl q-my-md">
    <div class="profile-container">
      <div class="profile-avatar">
        <q-avatar class="avatar">
          <img src="/lyr.png" />
        </q-avatar>
      </div>
      <div class="profile-details" style="margin-top: -40px">
        <h2 class="title" style="margin-bottom: -10px">
          <b>LYR LENDING CORPORATION </b>
        </h2>
        <p class="title">CRX4+7W6, Tagum, Davao del Norte</p>
        <br />
        <br />
        <p style="margin-bottom: -10px; margin-top: 20px; font-weight: 500">
          <!--   SALARY -->
        </p>
        <p></p>
        <p style="margin-bottom: -10px; margin-top: -2px; font-weight: 500"></p>
        <p></p>
        <p style="margin-bottom: -10px; margin-top: -2px; font-weight: 500"></p>
        <p></p>
      </div>
   
    </div>
  </div>
  <div class="row">
    <div
      class="q-my-sm q-mx-lg q-ml-xl col-xl-6 col-lg-6 col-md-11 col-sm-11 col-xs"
    >
      <q-card style="border-radius: 12px">
        <MyCalendar />
      </q-card>
    </div>
    <div
      class="q-my-sm q-mx-sm col-xl-5 col-lg-5 col-md-11 col-sm-11 responsive"
    >
      <q-card style="border-radius: 12px">
        <ShortListed_Scheduled />
      </q-card>
    </div>
  </div>

  <!--   </q-page> -->
</template>

<script>
import MyCalendar from "../components/MyCalendar.vue";
import ShortListed_Scheduled from "../components/ShortListed_Scheduled.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MonthSlotWeek",
  data() {
    return {};
  },
  components: {
    MyCalendar,
    ShortListed_Scheduled,
  },
});
</script>

<style scoped>
@media only screen and (max-width: 1439px) {
  .responsive {
    margin-left: 45px; /* or any desired value */
  }
}

.custom-mx-xxl {
  margin-left: 45px; /* or any desired value */
  margin-right: 60px; /* or any desired value */
}

@media only screen and (max-width: 1904px) {
  .custom-mx-xxl {
    margin-left: 45px; /* or any desired value */
    margin-right: 35px; /* or any desired value */
  }
}

.profile-card {
  max-width: 100%;
  margin: auto;
  margin-top: 2%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.skill-card {
  max-width: 70%;
  margin: auto;
  margin-top: 2%;
  border-radius: 5px;
  overflow: hidden;
}

.profile-container {
  border-radius: 12px;
  display: flex;
  align-items: center;
  background: linear-gradient(to bottom, rgb(3, 69, 113) 50%, #f0ecec 50%);
  padding: 20px;
}

.profile-avatar {
  flex: 0 0 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  background: white;
  padding: 10px;
  border-radius: 50%;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
}

.profile-details {
  flex: 1;
  padding: 10px;
  text-align: left;
}
.title {
  color: white;
}

.profile-details h2 {
  margin: 0 0 10px 0;
  font-size: 24px;
}

.profile-details p {
  margin: 5px 0;
  font-size: 15px;
}

/* Responsive design */
@media (max-width: 768px) {
  .profile-container {
    flex-direction: column;
    align-items: center;
    background: linear-gradient(to bottom, rgb(3, 69, 113) 50%, #ffffff 50%);
    padding: 20px;
  }

  .profile-avatar {
    margin-right: 0;
    margin-bottom: 20px;
    background: white; /* Blue background for the avatar */
  }

  .profile-details {
    text-align: center;
    background: #ffffff; /* White background for the details */
    padding: 20px;
    border-radius: 8px;
  }
  .title {
    color: black;
  }
}
</style>
