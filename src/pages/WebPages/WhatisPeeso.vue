<template>
  <q-page class="flex-center">
    <!--  <div class="row">
      <HomePage />
    </div> -->
    <div class="row">
      <div class="cards-container">
        <!-- Center Card -->
        <div
          data-aos="fade-down"
          data-aos-duration="3000"
          class="q-ma-md center-card"
          style="width: 650px; border-radius: 12px; margin-bottom: 18px"
        >
          <q-card-section>
            <h5 class="text-center" style="font-weight: 700">

              ACCESSIBILITY AND INCLUSIVITY
            </h5>
            <div class="text-body-2 text-center" style="margin-top: -30px">
              Regardless of a person's background or ability, we are committed
              to offering accessible and inclusive services. We guarantee that
              everyone has an equal chance to succeed in the job market thanks
              to our platform.
            </div>
          </q-card-section>
        </div>

        <div class="cards-sub-container">
          <!-- Left Cards -->
          <div class="left-cards">
            <q-card
              data-aos="fade-left"
              data-aos-duration="3000"
              class="q-ma-md card-hover"
              style="width: 300px; border-radius: 12px"
            >
              <q-card-section>
                <div class="card-title">Discover fascinating Jobs</div>
                <div class="text-body-2 card_content">
                  Find a world of fascinating career opportunities catered to
                  your talents and interests. Open up a world of possibilities
                  and start down the path to a successful career.
                </div>
              </q-card-section>
            </q-card>

            <q-card
              data-aos="fade-left"
              data-aos-duration="3000"
              class="q-ma-md card-hover"
              style="width: 300px; margin-top: 160px; border-radius: 12px"
            >
              <q-card-section>
                <div class="text-h6 card-title">Develop Your Potential</div>
                <div class="text-body-2">
                  Forge meaningful connections with leading employers in your
                  industry. Our extensive network provides exclusive access to
                  job openings, internships, and apprenticeships, ensuring you
                  stay ahead in the competitive job market.
                </div>
              </q-card-section>
            </q-card>

            <q-card
              data-aos="fade-left"
              data-aos-duration="3000"
              class="q-ma-md card-hover"
              style="width: 300px; margin-top: 180px; border-radius: 12px"
            >
              <q-card-section>
                <div class="text-h6 card-title">
                  Opportunities for Lifelong Learning
                </div>
                <div>
                  Take advantage of our extensive selection of training programs
                  to improve your skills. We provide possibilities for you to
                  develop your skills and improve your employability, from
                  workshops to online courses.
                </div>
              </q-card-section>
            </q-card>
          </div>

          <!-- Vertical Line -->
          <div class="vertical-line"></div>

          <!-- Right Cards -->
          <div class="right-cards">
            <q-card
              data-aos="fade-right"
              data-aos-duration="3000"
              class="q-ma-md card-hover"
              style="width: 300px; margin-top: 190px; border-radius: 12px"
            >
              <q-card-section>
                <div class="text-h6 card-title">Personalized Support</div>
                <div class="text-body-2">
                  Our staff of committed career advisors will offer you tailored
                  advice. We are here to offer individualized support at every
                  stage of the trip since we recognize that each person's path
                  is unique.
                </div>
              </q-card-section>
            </q-card>

            <q-card
              data-aos="fade-right"
              data-aos-duration="3000"
              class="q-ma-md card-hover"
              style="width: 300px; margin-top: 180px; border-radius: 12px"
            >
              <q-card-section>
                <div class="text-h6 card-title">Connect with Employers</div>
                <div class="text-body-2">
                  Forge meaningful connections with leading employers in your
                  industry. Our extensive network provides exclusive access to
                  job openings, internships, and apprenticeships, ensuring you
                  stay ahead in the competitive job market.
                </div>
              </q-card-section>
            </q-card>

            <q-card
              data-aos="fade-right"
              data-aos-duration="3000"
              class="q-ma-md card-hover"
              style="width: 300px; margin-top: 210px; border-radius: 12px"
            >
              <q-card-section>
                <div class="text-h6 card-title">Community Engagement</div>
                <div class="text-body-2">
                  Join a vibrant community of job seekers, professionals, and
                  experts. Participate in forums, networking events, and job
                  fairs to expand your network and tap into collective
                  knowledge.
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
/* import HomePage from "pages/WebPages/HomePage.vue"; */

export default {
  data() {
    return {};
  },
  components: {
    /*  HomePage, */
  },
};
</script>

<style scoped>
/* .fontcolor {
  color: rgb(20, 183, 20);
}
 */
.card_content {
  font-family: Helvetica;
}

.card-hover {
  padding-right: 5px;
  padding: 5px;
  background-color: rgba(250, 253, 250, 0.644);
}

/* Hover effect */
.card-hover:hover {
  background: linear-gradient(40deg, #279f27, #5fc331);
  transition: background-color 0.3s ease;
  color: white;
}
.card-title {
  font-weight: 700;
  color: #000000; /* Initial green color */
  font-family: Arial;
  font-size: 16px;
  padding-top: -10px;
}

.card-hover:hover .card-title {
  color: white; /* Change text color to white */
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Align items to the top */
  height: 100vh; /* Full height to ensure vertical centering */
}

.cards-container {
  display: flex;
  flex-direction: column; /* Stack center card and other cards vertically */
  align-items: center; /* Center align items */
  width: 100%; /* Full width of the page */
  max-width: 1200px; /* Maximum width of the container */
}

.cards-sub-container {
  display: flex;
  align-items: flex-start; /* Align items to the top */
  justify-content: space-between; /* Distribute items evenly */
  width: 100%;
  border-radius: 12px;
}

.left-cards,
.right-cards {
  display: flex;
  flex-direction: column; /* Stack cards vertically */
  align-items: flex-start; /* Align items to the top */
}

.vertical-line {
  border-radius: 5px;
  width: 5px;
  height: 1170px; /* Adjust the height as needed */
  background-color: rgb(91, 95, 91);
  margin: 10px 10px; /* Adjust margin for spacing between cards and line */
}

.text-center {
  text-align: center;
}

@media (max-width: 1200px) {
  .cards-container {
    flex-wrap: wrap; /* Allow cards to wrap on smaller screens */
  }
  .left-cards,
  .right-cards {
    width: calc(50% - 20px); /* Adjust width for two columns with margin */
    margin-bottom: 20px; /* Margin between left and right columns */
  }
}
</style>
