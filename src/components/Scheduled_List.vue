<template>
  <div class="q-pa-md">
    <!--  <div class="row">
      <p>View All JOBS</p>
    </div> -->
    <div class="row" style="margin-top: -50px">
      <h6>SCHEDULED INTERVIEWS</h6>
    </div>

    <div style="margin-top: -30px">
      <q-separator></q-separator>
    </div>

    <div class="row" style="margin-top: -20px">
      <div class="col-12">
        <div style="max-width: 800px; margin-left: 1px">
          <!-- </q-tabs> -->

          <div class="q-gutter-y-sm">
            <!--  <q-tab-panels v-model="tab" animated class="text-left">
              <q-tab-panel name="jobposting"> -->

            <div style="margin-top: 38px">
              <div class="scrollable-container">
                <div class="q-gutter-md">
                  <q-card
                    v-for="jobPost in filteredJobPosts"
                    :key="jobPost.id"
                    class="q-mb-md custom-card_jobpost"
                  >
                    <div class="row">
                      <div class="col-7">
                        <q-card-section class="row items-center">
                          <img
                            style="max-width: 80px"
                            :src="jobPost.Position_Title_Picture"
                            alt="Position Picture"
                            :imgProps="{ width: '100px', height: '100px' }"
                          />
                          <div class="q-ml-sm">
                            <div class="text-h6 namecolor">
                              {{ jobPost.Position_Title }}
                            </div>
                            <div
                              class="text-subtitle2"
                              style="margin-top: -8px"
                            >
                              Salary: ₱ {{ jobPost.Salary }}
                            </div>
                            <div
                              class="text-subtitle2"
                              style="margin-top: -1px"
                            >
                              Potential Applicant: 50
                            </div>
                          </div>
                        </q-card-section>

                        <!--    <q-card-section class="row items-center">
                          <div class="circle-icon-reject">
                            <q-icon
                              name="close"
                              class="q-ml-xs custom-icon-class-reject"
                            />
                          </div>
                          <div>
                            <div class="text-subtitle2">
                              Total Reject / {{ jobPost.Total_Reject }}
                            </div>
                          </div>
                        </q-card-section> -->

                        <!--     <q-card-section
                          class="row items-center"
                          style="margin-top: -23px"
                        >
                          <div class="circle-icon">
                            <q-icon
                              name="check"
                              class="q-ml-xs custom-icon-class-reject"
                            />
                          </div>
                          <div>
                            <div class="text-subtitle2">
                              Total Accept / {{ jobPost.Total_Accept }}
                            </div>
                          </div>
                        </q-card-section> -->
                      </div>

                      <div class="col-5" style="margin-top: -1px">
                        <q-card-section class="row items-center">
                          <div>
                            <div
                              class="text-h6"
                              style="font-size: 13px; font-weight: 400"
                            >
                              Schedule Date
                            </div>
                            <div
                              class="text-subtitle2"
                              style="margin-top: -5px"
                            >
                              July 27,2024 / 9:00 AM
                            </div>
                          </div>
                        </q-card-section>

                        <!--    <q-card-section class="row items-center">
                          <div>
                            <div
                              class="text-h6"
                              style="
                                font-size: 13px;
                                font-weight: 400;
                                margin-top: -28px;
                              "
                            >
                              Total Hired
                            </div>
                            <div
                              class="text-subtitle2"
                              style="margin-top: -8px"
                            >
                              {{ jobPost.Total_Hired }}
                            </div>
                          </div>
                        </q-card-section> -->
                      </div>
                    </div>

                    <q-separator />
                  </q-card>
                  <q-infinite-scroll
                    :offset="100"
                    @load="loadMoreJobPosts"
                    :disable="!hasMore"
                  >
                    <q-spinner color="primary" />
                  </q-infinite-scroll>
                </div>
              </div>
            </div>
            <!--     </q-tab-panel>
            </q-tab-panels> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  name: "JobPostList",

  data() {
    return {
      search_jobpost: "",
      jobPosts: [],
      page: 1,
      limit: 10,
      hasMore: true,
      loading: false,

      users: [],
      page_1: 1,
      limit_1: 10, // Number of records per request
      hasMore_1: true, // To check if more data is available
      loading_1: false, // To prevent multiple simultaneous requests
    };
  },

  computed: {
    filteredJobPosts() {
      const searchTerm = this.search_jobpost.toLowerCase();
      return this.jobPosts.filter((jobPost) =>
        jobPost.Position_Title.toLowerCase().includes(searchTerm)
      );
    },
  },

  methods: {
    async loadMoreJobPosts() {
      if (this.loading) return;
      this.loading = true;

      try {
        const response = await axios.get(
          `https://joemarie123.github.io/Fake_API_Testing/JobPost_Sample.json`,
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        console.log("API Response:", response.data); // Log the response data
        const newJobPosts = response.data.JobPost;

        this.jobPosts = this.jobPosts.concat(newJobPosts);
        this.page++;
        this.hasMore = newJobPosts.length === this.limit;
      } catch (error) {
        console.error("Error fetching job posts:", error);
      } finally {
        this.loading = false;
      }
    },

    async loadMoreUsers() {
      if (this.loading1) return;
      this.loading1 = true;

      try {
        const response = await axios.get(
          `https://joemarie123.github.io/Fake_API_Testing/users_sampe.json`,
          {
            params: {
              _page: this.page_1,
              _limit: this.limit_1,
            },
          }
        );
        console.log("kini", response.data); // Add this line to log the response data
        // Extract the users array from the response
        const newUsers = response.data.users;

        this.users = this.users.concat(newUsers);
        this.page++;
        this.hasMore_1 = newUsers.length === this.limit;
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        this.loading1 = false;
      }
    },
  },
  created() {
    this.loadMoreJobPosts();
    this.loadMoreUsers();
  },
  setup() {
    const tab = ref("receievedcvs");
    return {
      tab,
    };
  },
};
</script>

<style scoped>
@media only screen and (max-width: 1023px) {
  .scheduleinterview {
    margin-top: 10px;
    margin-left: 15px;
  }
}

.textbox {
  padding: 10px;
  border: 1px solid #0b66a3;
  border-radius: 13px;
  width: 250px;
  height: 28px;
}

.custom-input .q-field__control {
  height: 2px; /* Adjust the height as needed */
}

.q-page {
  display: flex;
  justify-content: left;
  align-items: flex-start;
  height: 100vh;
}
.scrollable-container {
  max-height: 80vh;
  overflow-y: auto;
  /* Custom scrollbar */
  scrollbar-width: unset; /* For Firefox */
}

/* Custom scrollbar for WebKit browsers */
.scrollable-container::-webkit-scrollbar {
  width: 5px;
}

.scrollable-container::-webkit-scrollbar-track {
  background: transparent;
}

.scrollable-container::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.custom-card_jobpost {
  border-top: 4px solid rgba(136, 152, 133, 0.877);
  border-radius: 8px;
  overflow: hidden;
}

.custom-card_Shortlisted {
  border-top: 4px solid rgba(245, 97, 17, 0.799);
  border-radius: 8px;
  overflow: hidden;
}

.custom-card {
  border-top: 4px solid rgba(14, 170, 176, 0.799);
  border-radius: 8px;
  overflow: hidden;
}

.namecolor {
  color: rgb(8, 131, 189);
  font-size: 15px;
}

.circle-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 19px;
  border-radius: 50%;
  background-color: rgb(11, 167, 11);
  margin-right: 4px;
}
.circle-icon q-icon {
  color: white;
}
.custom-icon-class {
  color: #ffffff;
  margin-left: 1px;
}

.circle-icon-reject {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 19px;
  border-radius: 50%;
  background-color: rgb(242, 73, 17);
  margin-right: 4px;
}
.circle-icon-reject q-icon {
  color: white;
}
.custom-icon-class-reject {
  color: #ffffff;
  margin-left: 1px;
}

.yellowgold {
  color: rgb(231, 198, 35);
}

.q-page {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 50vh;
}
.scrollable-container {
  max-height: 43vh; /* Adjust based on your preference */
  overflow-y: auto;
  width: 100%;
}
</style>
