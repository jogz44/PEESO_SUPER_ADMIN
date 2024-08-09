<template>
  <div>
    <q-page>
      <q-page-container>
        <q-page>
          <div v-if="Data_Retrieved && Data_Retrieved.data">
            <q-list bordered padding>
              <q-item v-for="job in Data_Retrieved.data" :key="job.ID">
                <q-card>
                  <q-card-section>
                    <div class="row items-center q-gutter-md">
                      <img
                        :src="getJobImage(job.pic)"
                        class="col-auto"
                        style="max-width: 100px; max-height: 100px"
                      />
                      <div class="col">
                        <h6>{{ job.Title }}</h6>
                        <div>{{ job.Description }}</div>
                        <q-chip outline color="primary" class="q-ma-xs">
                          {{ job.WorkPlace }}
                        </q-chip>
                        <q-chip outline color="secondary" class="q-ma-xs">
                          {{ job.Type }}
                        </q-chip>
                      </div>
                    </div>
                  </q-card-section>
                  <q-separator></q-separator>
                  <q-card-section>
                    <div class="row justify-between">
                      <div class="col-auto">
                        <strong>Salary:</strong> {{ job.Salary }} PHP
                      </div>
                      <div class="col-auto">
                        <strong>From:</strong> {{ job.DateFrom }}
                        <strong>To:</strong> {{ job.DateTo }}
                      </div>
                    </div>
                    <div class="row justify-between">
                      <div class="col-auto">
                        <strong>Education Level:</strong>
                        {{ job.EducationLevel }}
                      </div>
                      <div class="col-auto">
                        <strong>Course:</strong> {{ job.Course }}
                      </div>
                    </div>
                    <div class="row justify-between">
                      <div class="col-auto">
                        <strong>Work Experience:</strong>
                        {{ job.WorkExperience }} years
                      </div>
                      <div class="col-auto">
                        <strong>License:</strong> {{ job.License }}
                      </div>
                    </div>
                  </q-card-section>
                  <q-separator></q-separator>
                  <q-card-actions align="right">
                    <q-btn flat color="primary" @click="applyForJob(job.ID)">
                      Apply
                    </q-btn>
                  </q-card-actions>
                </q-card>
              </q-item>
            </q-list>
          </div>
        </q-page>
      </q-page-container>
    </q-page>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useJobpost } from "src/stores/JobPost_Store";
import { useLoginCheck } from "src/stores/SignUp_Store";

export default {
  data() {
    return {
      retrievedLogin: null,
      userinfo: null,
      userData: null,
      Data_Retrieved: null,
      imgurl: null,
      imahe: "http://10.0.1.26:82/PEESOPORTAL/REGISTRATION/ADMIN/Logos/",
    };
  },
  created() {
    this.loadMoreJobPosts();
    this.loadMoreUsers();

    this.retrievedLogin = localStorage.getItem("Login");
    console.log("Retrieved Login Local Storage:", this.retrievedLogin);

    if (!this.retrievedLogin) {
      console.error("No login found in localStorage.");
      return;
    }

    const store = useLoginCheck();
    let data = new FormData();
    data.append("LoginID", this.retrievedLogin);

    store
      .RetrievedData_function(data)
      .then((res) => {
        this.userinfo = store.RetrievedData;

        if (
          !this.userinfo ||
          !this.userinfo.data ||
          !this.userinfo.data.length
        ) {
          console.error("Invalid user info retrieved.");
          return;
        }

        this.userData = this.userinfo.data[0];
        if (!this.userData) {
          console.error("Invalid user info retrieved.");
          return;
        }

        console.log("Data Retrieved View All jobs:", this.userData);

        const store1 = useJobpost();
        let data1 = new FormData();
        data1.append("CompanyID", this.userData.ID);
        store1.Retrieve_Jobs(data1).then((res) => {
          this.Data_Retrieved = store1.RetrieveJobs_Array;
          console.log("Database:", this.Data_Retrieved.data);
        });

        const baseUrl =
          "http://10.0.1.26:82/PEESOPORTAL/REGISTRATION/ADMIN/Logos/";
        const companyName = encodeURIComponent(this.userData.Company_name);
        const companyLogo = this.userData.Company_Logo
          ? encodeURIComponent(this.userData.Company_Logo)
          : "Company_Profile/e5d3982a1f7a511f789d.jpg";

        this.imgurl =
          companyLogo === "Company_Profile/e5d3982a1f7a511f789d.jpg"
            ? `${baseUrl}${companyLogo}`
            : `${baseUrl}${companyName}/${companyLogo}`;
        console.log("Image URL:", this.imgurl);
      })
      .catch((error) => {
        console.error("Error retrieving data:", error);
      });
  },

  methods: {
    getJobImage(pic) {
      const baseUrl = "http://10.0.1.26:82/peesoportal/jobs/admin/jobpic/";
      const imgUrl = pic
        ? `${baseUrl}${encodeURIComponent(pic)}`
        : "http://10.0.1.26:82/peesoportal/jobs/admin/jobpic/11e1bd61fc0e33272c58.png";
      console.log("Image URL:", imgUrl);
      return imgUrl;
    },
    applyForJob(jobId) {
      console.log("Apply for job with ID:", jobId);
      // Implement your apply logic here
    },
    loadMoreJobPosts() {
      // Implement the method to load more job posts
    },
    loadMoreUsers() {
      // Implement the method to load more users
    },
  },
};
</script>

<style scoped>
.q-card {
  margin-bottom: 16px;
}
</style>
