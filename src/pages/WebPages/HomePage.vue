<template>
  <q-page>
    <!-- Main Content -->
    <div class="row page flex-center">
      <div class="col-3">
        <q-item-label header>
          <img
            data-aos="fade-in"
            data-aos-duration="3000"
            src="/Peesopic.png"
            alt="Logo"
            style="height: 300px; margin-right: 8px; border-radius: 12px"
          />
          <img />
        </q-item-label>
      </div>

      <div class="col-6" style="margin-left: 15px; margin-top: 19px">
        <q-page-section>
          <div>
            <p
              data-aos="fade-right"
              data-aos-duration="1500"
              style="font-size: 15px; color: #48b544"
            >
              We can make it <span><b>HAPPEN</b></span>
            </p>
          </div>
          <h3
            data-aos="fade-up"
            data-aos-duration="1500"
            style="margin-top: 15px"
          >
            <span style="font-weight: bold; color: #3fb03f">CPEESO</span> <br />
          </h3>
          <h4
            data-aos="fade-up"
            data-aos-duration="1500"
            style="
              margin-top: -58px;
              color: #48b544;
              font-size: 16px;
              margin-left: 40px;
            "
          >
            TAGUM CITY
          </h4>

          <div class="row" style="margin-top: 40px">
            <div class="col-6">
              <p
                data-aos="fade-left"
                data-aos-duration="1500"
                style="justify-content: space-around"
              >
                Public Education and Employment Services Office (P.E.E.S.O.) is
                a government agency tasked in providing education and employment
                services under the Department of Labor and Employment (DOLE).
              </p>
            </div>
          </div>
        </q-page-section>
      </div>

      <div col="3">
        <div>
          <h4 style="margin-top: 30px">
            <span style="font-weight: 500">{{ displayNumber_TotalJobs }}+</span>
          </h4>
          <h4
            style="font-size: 20px; margin-top: -48px; font-family: sans-serif"
          >
            Over All Job Postings
          </h4>
        </div>

        <div>
          <h4 style="margin-top: 90px">
            <span style="font-weight: 500">{{ displayNumber_Vacancies }}+</span>
          </h4>
          <h4
            style="font-size: 20px; margin-top: -48px; font-family: sans-serif"
          >
            Over All Vacancies
          </h4>
        </div>
      </div>
    </div>
    <div class="row"></div>
  </q-page>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },

      startNumber: 0,
      dialog_sched: false,
      duration: 1500, // duration of the animation in milliseconds
      startTime: null,
      displayNumber_TotalJobs: 0,
      displayNumber_Vacancies: 0,
      totalJobs: 453, // Replace with actual data
      totalVacancies: 1500, // Replace with actual data
    };
  },

  methods: {
    animateNumber(timestamp) {
      if (!this.startTime) this.startTime = timestamp;
      const progress = timestamp - this.startTime;
      const progressFraction = progress / this.duration;
      this.displayNumber_Vacancies = Math.min(
        Math.floor(
          this.startNumber +
            progressFraction * (this.totalVacancies - this.startNumber)
        ),
        this.totalVacancies
      );
      if (progress < this.duration) {
        requestAnimationFrame(this.animateNumber);
      } else {
        this.displayNumber_Vacancies = this.totalVacancies;
      }
    },
    startAnimation() {
      this.startTime = null;
      requestAnimationFrame(this.animateNumber);
    },

    animateNumber_TotalJobs(timestamp) {
      if (!this.startTime) this.startTime = timestamp;
      const progress = timestamp - this.startTime;
      const progressFraction = progress / this.duration;
      this.displayNumber_TotalJobs = Math.min(
        Math.floor(
          this.startNumber +
            progressFraction * (this.totalJobs - this.startNumber)
        ),
        this.totalJobs
      );
      if (progress < this.duration) {
        requestAnimationFrame(this.animateNumber_TotalJobs);
      } else {
        this.displayNumber_TotalJobs = this.totalJobs;
      }
    },
    startAnimation_TotalJobs() {
      this.startTime = null;
      requestAnimationFrame(this.animateNumber_TotalJobs);
    },
  },

  components: {},

  mounted() {
    AOS.init();
    this.startAnimation_TotalJobs();
    this.startAnimation();
  },
};
</script>

<style scoped>
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

.page {
  margin-right: 100px;
  margin-left: 90px;
  margin-top: 80px;
}

.page2 {
  margin-right: 100px;
  margin-left: 120px;
  margin-top: 50px;
}

.page p {
  text-align: justify;
}
</style>
