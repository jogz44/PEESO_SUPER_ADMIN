<template>
  <div class="q-pa-md">
    <!--  <div class="row">
      <p>View All JOBS</p>
    </div> -->

    <div class="row">
      <div class="col-4">
        <div style="max-width: 500px; margin-left: 40px">
          <!--    <q-tabs v-model="tab" class=""> -->
          <!-- <q-chip
            clickable
            outline
            color="primary"
            text-color="white"
            icon="add_task"
          >
            <q-btn color="blue" flat rounded size="14px" label="JOB POSTING" />
          </q-chip> -->

          <div>
            <q-btn
              outline
              size="12px"
              rounded
              color="primary"
              icon="add"
              label="JOB POSTING"
              class="q-mx-sm"
            />
            <input
              v-model="search_jobpost"
              class="textbox"
              placeholder="Search Job Post"
            />
          </div>

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
                          </div>
                        </q-card-section>

                        <q-card-section class="row items-center">
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
                        </q-card-section>

                        <q-card-section
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
                        </q-card-section>
                      </div>

                      <div class="col-5" style="margin-top: -8px">
                        <q-card-section class="row items-center">
                          <div>
                            <div
                              class="text-h6"
                              style="font-size: 13px; font-weight: 400"
                            >
                              Total Vacant Count
                            </div>
                            <div
                              class="text-subtitle2"
                              style="margin-top: -8px"
                            >
                              {{ jobPost.Total_Vacant_Count }}
                            </div>
                          </div>
                        </q-card-section>
                        <q-card-section class="row items-center">
                          <div>
                            <div
                              class="text-h6"
                              style="
                                font-size: 13px;
                                font-weight: 400;
                                margin-top: -28px;
                              "
                            >
                              Total Applied
                            </div>
                            <div
                              class="text-subtitle2 yellowgold"
                              style="margin-top: -8px"
                            >
                              {{ jobPost.Total_Applied }}
                            </div>
                          </div>
                        </q-card-section>

                        <q-card-section class="row items-center">
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
                        </q-card-section>
                      </div>
                    </div>

                    <!--   <div class="row">
            <div class="col-7">
              <q-card-section class="row items-center">
                <div class="circle-icon">
                  <q-icon name="check" class="q-ml-xs custom-icon-class" />
                </div>
                <div>
                  <div class="text-subtitle2">
                    Total Accept / {{ jobPost.Total_Accept }}
                  </div>
                </div>
              </q-card-section>
            </div>
            <div class="col-4">
              <div class="q-gutter-lg">

              </div>
            </div>
          </div> -->

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

      <div class="col-8">
        <div style="max-width: 1000px; margin-left: 40px">
          <q-tabs v-model="tab" class="">
            <q-chip
              clickable
              outline
              color="teal"
              text-color="white"
              icon="bookmark"
            >
              <q-tab name="receievedcvs" label="RECEIVED CV'S" />
            </q-chip>
            <q-chip
              clickable
              outline
              color="orange"
              text-color="white"
              icon-right="star"
            >
              <q-tab name="shortlisted" label="POTENTIAL APPLICANT" />
            </q-chip>

            <input
              v-model="search_jobpost"
              class="textbox"
              placeholder="Search Applicant"
            />
            <!--  <q-chip
          clickable
          outline
          color="orange"
          text-color="white"
          icon-right="star"
        >
          <q-tab name="history" label="HISTORY" />
        </q-chip> -->
          </q-tabs>

          <div class="q-gutter-y-sm" style="margin-top: -12px">
            <q-tab-panels v-model="tab" animated class="text-left">
              <q-tab-panel name="receievedcvs">
                <q-page class="flex flex-center q-pa-md">
                  <div class="scrollable-container">
                    <div class="q-gutter-md">
                      <q-card
                        v-for="user in users"
                        :key="user.id"
                        class="q-mb-md custom-card"
                      >
                        <div class="row">
                          <div class="col-4">
                            <q-card-section class="row items-center">
                              <q-avatar size="53px" class="q-mr-sm">
                                <img :src="user.avatar" alt="Profile Picture" />
                              </q-avatar>
                              <div>
                                <div class="text-h6 namecolor">
                                  {{ user.firstName }} {{ user.lastName }}
                                </div>
                                <div
                                  class="text-subtitle2"
                                  style="margin-top: -8px"
                                >
                                  Age: {{ user.age }}
                                </div>
                              </div>
                            </q-card-section>
                          </div>

                          <div class="col-3">
                            <q-card-section class="row items-center">
                              <div>
                                <div
                                  class="text-h6"
                                  style="font-size: 13px; font-weight: 400"
                                >
                                  Total Experience
                                </div>
                                <div
                                  class="text-subtitle2"
                                  style="margin-top: -8px"
                                >
                                  {{ user.YearsExperience }}
                                </div>
                              </div>
                            </q-card-section>
                          </div>

                          <div class="col-2">
                            <q-card-section class="row items-center">
                              <div>
                                <div
                                  class="text-h6"
                                  style="font-size: 13px; font-weight: 400"
                                >
                                  Expected Salary
                                </div>
                                <div
                                  class="text-subtitle2 yellowgold"
                                  style="margin-top: -8px"
                                >
                                  ₱ {{ user.ExpectedSalary }}
                                </div>
                              </div>
                            </q-card-section>
                          </div>

                          <div class="col-3">
                            <q-card-section class="row items-center">
                              <div>
                                <div
                                  class="text-h6"
                                  style="font-size: 13px; font-weight: 400"
                                >
                                  Address
                                </div>
                                <div
                                  class="text-subtitle2"
                                  style="margin-top: -8px"
                                >
                                  {{ user.address }}
                                </div>
                              </div>
                            </q-card-section>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-lg-7 col-xl-7">
                            <q-card-section
                              class="row items-center"
                              style="margin-top: -20px"
                            >
                              <div class="circle-icon_phone">
                                <q-icon
                                  name="call"
                                  class="q-ml-xs custom-icon-class"
                                />
                              </div>

                              <div>
                                <div class="text-subtitle2">
                                  Contact Number: 0915487625
                                </div>
                              </div>
                            </q-card-section>

                            <q-card-section
                              class="row items-center"
                              style="margin-top: -30px"
                            >
                              <div class="circle-icon">
                                <q-icon
                                  name="check"
                                  class="q-ml-xs custom-icon-class"
                                />
                              </div>
                              <div>
                                <div class="text-subtitle2">
                                  Applied Position / {{ user.AppliedPosition }}
                                </div>
                              </div>
                            </q-card-section>
                          </div>
                          <div
                            class="col-lg-5 col-xl-4"
                            style="margin-top: 8px"
                          >
                            <div class="q-gutter-sm">
                              <q-btn
                                color="blue"
                                flat
                                rounded
                                size="14px"
                                label="View Details"
                              />
                              <q-btn
                                class="glossy"
                                rounded
                                color="red"
                                size="12px"
                                label="Reject"
                              />
                              <q-btn
                                class="glossy"
                                size="12px"
                                rounded
                                color="green"
                                label="Accept"
                              />
                            </div>
                          </div>
                        </div>

                        <q-separator />
                      </q-card>
                      <q-infinite-scroll
                        :offset="100"
                        @load="loadMoreUsers"
                        :disable="!hasMore"
                      >
                        <q-spinner color="primary" />
                      </q-infinite-scroll>
                    </div>
                  </div>
                </q-page>
              </q-tab-panel>
            </q-tab-panels>
          </div>

          <div class="q-gutter-y-sm" style="margin-top: -8px">
            <q-tab-panels v-model="tab" animated class="text-left">
              <q-tab-panel name="shortlisted">
                <q-page class="flex flex-center q-pa-md">
                  <div class="scrollable-container">
                    <div class="q-gutter-md">
                      <q-card
                        v-for="user in users"
                        :key="user.id"
                        class="q-mb-md custom-card_Shortlisted"
                      >
                        <div class="row">
                          <div class="col-4">
                            <q-card-section class="row items-center">
                              <q-avatar size="53px" class="q-mr-sm">
                                <img :src="user.avatar" alt="Profile Picture" />
                              </q-avatar>
                              <div>
                                <div class="text-h6 namecolor">
                                  {{ user.firstName }} {{ user.lastName }}
                                </div>
                                <div
                                  class="text-subtitle2"
                                  style="margin-top: -8px"
                                >
                                  Age: {{ user.age }}
                                </div>
                              </div>
                            </q-card-section>
                          </div>

                          <div class="col-3">
                            <q-card-section class="row items-center">
                              <div>
                                <div
                                  class="text-h6"
                                  style="font-size: 13px; font-weight: 400"
                                >
                                  Total Experience
                                </div>
                                <div
                                  class="text-subtitle2"
                                  style="margin-top: -8px"
                                >
                                  {{ user.YearsExperience }}
                                </div>
                              </div>
                            </q-card-section>
                          </div>

                          <div class="col-2">
                            <q-card-section class="row items-center">
                              <div>
                                <div
                                  class="text-h6"
                                  style="font-size: 13px; font-weight: 400"
                                >
                                  Expected Salary
                                </div>
                                <div
                                  class="text-subtitle2 yellowgold"
                                  style="margin-top: -8px"
                                >
                                  ₱ {{ user.ExpectedSalary }}
                                </div>
                              </div>
                            </q-card-section>
                          </div>

                          <div class="col-3">
                            <q-card-section class="row items-center">
                              <div>
                                <div
                                  class="text-h6"
                                  style="font-size: 13px; font-weight: 400"
                                >
                                  Address
                                </div>
                                <div
                                  class="text-subtitle2"
                                  style="margin-top: -8px"
                                >
                                  {{ user.address }}
                                </div>
                              </div>
                            </q-card-section>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-lg-7 col-xl-7">
                            <q-card-section
                              class="row items-center"
                              style="margin-top: -20px"
                            >
                              <div class="circle-icon_phone">
                                <q-icon
                                  name="call"
                                  class="q-ml-xs custom-icon-class"
                                />
                              </div>

                              <div>
                                <div class="text-subtitle2">
                                  Contact Number: 0915487625
                                </div>
                              </div>
                            </q-card-section>

                            <q-card-section
                              class="row items-center"
                              style="margin-top: -30px"
                            >
                              <div class="circle-icon">
                                <q-icon
                                  name="check"
                                  class="q-ml-xs custom-icon-class"
                                />
                              </div>

                              <div>
                                <div class="text-subtitle2">
                                  Applied Position / {{ user.AppliedPosition }}
                                </div>
                              </div>
                            </q-card-section>
                          </div>
                          <div
                            class="col-lg-5 col-xl-4"
                            style="margin-top: 8px"
                          >
                            <div class="q-gutter-sm">
                              <q-btn
                                color="blue"
                                flat
                                rounded
                                size="14px"
                                label="View Details"
                              />
                              <!--  <q-btn
                                class="glossy"
                                rounded
                                color="red"
                                size="12px"
                                label="Reject"
                              /> -->
                              <q-btn
                                class="glossy"
                                size="12px"
                                rounded
                                color="green"
                                label="Schedule Interview"
                              />
                            </div>
                          </div>
                        </div>

                        <q-separator />
                      </q-card>
                      <q-infinite-scroll
                        :offset="100"
                        @load="loadMoreUsers"
                        :disable="!hasMore"
                      >
                        <q-spinner color="primary" />
                      </q-infinite-scroll>
                    </div>
                  </div>
                </q-page>
              </q-tab-panel>
            </q-tab-panels>
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
          `https://run.mocky.io/v3/5c4a6151-42bd-4c7e-809c-cec9084e0fcc`,
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
          `https://run.mocky.io/v3/d7b4f6ea-87a0-4aee-9485-de39293bb1b3`,
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
  border-top: 4px solid rgba(33, 82, 187, 0.799);
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

.circle-icon_phone {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 19px;
  border-radius: 50%;
  background-color: rgb(167, 60, 11);
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
  max-height: 85vh; /* Adjust based on your preference */
  overflow-y: auto;
  width: 100%;
}
</style>
