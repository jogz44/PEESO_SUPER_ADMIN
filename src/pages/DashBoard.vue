<template>
  <q-page>
    <!-- Main Content -->
    <q-page-section>
      <div class="row q-mx-xl q-my-md">
        <!-- Total Jobs Card -->
        <q-card
          class="col-12 col-xl-6 col-lg-6 col-md-11 col-sm-11 custom-card q-mx-md custom_card_TotalJobs"
          style="border-radius: 12px"
        >
          <q-card-section>
            <div class="row items-center" style="margin-top: -12px">
              <div class="row q-mt-md">
                <div class="col-12 text-center">
                  <q-avatar class="custom-avatar" square>
                    <img src="/jobpostingicon.png" />
                  </q-avatar>
                </div>
              </div>
              <div class="col" style="margin-left: 8px; margin-top: 20px">
                <div style="font-size: 14px">Total Jobs</div>
                <div class="totaljobpostNumber">
                  {{ totalJobs }}
                </div>
              </div>
            </div>
          </q-card-section>

          <div class="q-mx-md q-my-sm">
            <q-separator></q-separator>
          </div>

          <q-card-section>
            <div class="row" style="margin-top: -38px; margin-left: -10px">
              <div class="col-3">
                <q-card-section class="row items-center">
                  <div>
                    <div class="text-h6 numbersize">231</div>
                    <div
                      class="text-subtitle2 totalapplicant"
                      style="margin-top: -8px"
                    >
                      Active Job Post
                    </div>
                  </div>
                </q-card-section>
              </div>

              <div class="col-3">
                <q-card-section class="row items-center">
                  <div>
                    <div class="text-h6 numbersize">554</div>
                    <div
                      class="text-subtitle2 totalapplicant"
                      style="margin-top: -8px"
                    >
                      Vacant Position
                    </div>
                  </div>
                </q-card-section>
              </div>

              <div class="col-3">
                <q-card-section class="row items-center">
                  <div>
                    <div class="text-h6 numbersize">23</div>
                    <div
                      class="text-subtitle2 totalapplicant"
                      style="margin-top: -8px"
                    >
                      Closed Jobs
                    </div>
                  </div>
                </q-card-section>
              </div>

              <div class="col-3">
                <q-card-section class="row items-center">
                  <div>
                    <div class="text-h6 numbersize">145</div>
                    <div
                      class="text-subtitle2 totalapplicant"
                      style="margin-top: -8px"
                    >
                      Overdue Posting
                    </div>
                  </div>
                </q-card-section>
              </div>

              <!--  <div class="col-4">
                <q-card-section class="row items-center">
                  <div>
                    <div
                      class="text-h6"
                      style="font-size: 13px; font-weight: 400"
                    >
                      Potential Applicant
                    </div>
                    <div class="text-subtitle2" style="margin-top: -8px">
                      451
                    </div>
                  </div>
                </q-card-section>
              </div> -->

              <!--   <div class="col-2">
                <q-card-section class="row items-center">
                  <div>
                    <div
                      class="text-h6"
                      style="font-size: 13px; font-weight: 400"
                    >
                      Hired
                    </div>
                    <div class="text-subtitle2" style="margin-top: -8px">
                      478
                    </div>
                  </div>
                </q-card-section>
              </div> -->
            </div>
          </q-card-section>
        </q-card>

        <q-card
          class="col-12 col-xl-5 col-lg-5 col-md-11 col-sm-11 custom_card_Applicant custom_card_TotalApplicant"
          style="border-radius: 12px"
        >
          <q-card-section>
            <div class="row items-center" style="margin-top: -12px">
              <div class="row q-mt-md">
                <div class="col-12 text-center">
                  <q-avatar class="custom-avatar" square>
                    <img src="/applicant.png" />
                  </q-avatar>
                </div>
              </div>
              <div class="col" style="margin-left: 8px; margin-top: 20px">
                <div class="total_applicant">Total Applicant</div>
                <div class="totaljobpostNumber">
                  {{ totalJobs }}
                </div>
              </div>
            </div>
          </q-card-section>

          <div class="q-mx-md q-my-sm">
            <q-separator></q-separator>
          </div>

          <q-card-section>
            <div class="row" style="margin-top: -38px; margin-left: -10px">
              <div class="col-3">
                <q-card-section class="row items-center">
                  <div>
                    <div class="text-h6 numbersize">120</div>
                    <div
                      class="text-subtitle2 totalapplicant"
                      style="margin-top: -8px"
                    >
                      Registered
                    </div>
                  </div>
                </q-card-section>
              </div>

              <div class="col-3">
                <q-card-section class="row items-center">
                  <div>
                    <div class="text-h6 numbersize">234</div>
                    <div
                      class="text-subtitle2 totalapplicant"
                      style="margin-top: -8px"
                    >
                      Declined
                    </div>
                  </div>
                </q-card-section>
              </div>

              <div class="col-4">
                <q-card-section class="row items-center">
                  <div>
                    <div class="text-h6 numbersize">432</div>
                    <div
                      class="text-subtitle2 totalapplicant"
                      style="margin-top: -8px"
                    >
                      Potential Applicant
                    </div>
                  </div>
                </q-card-section>
              </div>

              <div class="col-2">
                <q-card-section class="row items-center">
                  <div>
                    <div class="text-h6 numbersize">554</div>
                    <div
                      class="text-subtitle2 totalapplicant"
                      style="margin-top: -8px"
                    >
                      Hired
                    </div>
                  </div>
                </q-card-section>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="row q-mx-xl q-my-md">
        <div class="col-6" style="margin-left: 13px">
          <q-card class="" style="border-radius: 12px">
            <Schedule_Calendar />
          </q-card>
        </div>

        <div class="col-5 q-ml-lg">
          <q-card><Scheduled_List /> </q-card>
        </div>
      </div>
    </q-page-section>
  </q-page>
</template>

<script>
import Schedule_Calendar from "../components/Schedule_Calendar.vue";
import Scheduled_List from "../components/Scheduled_List.vue";
export default {
  data() {
    return {
      totalJobs: 150, // Replace with actual data
      totalApplicants: 320, // Replace with actual data
    };
  },
  components: {
    Schedule_Calendar,
    Scheduled_List,
  },
};
</script>

<style scoped>
.custom-avatar {
  width: 50px;
  height: 50px;
}

.totaljobpostNumber {
  font-size: 20px;
  font-weight: bolder;
}

.total_applicant {
  font-size: 14px;
}

.numbersize {
  font-size: 16px;
  font-weight: 400;
  font-weight: bolder;
}
.totalapplicant {
  color: rgb(50, 81, 139);
}

@media only screen and (max-width: 1565px) {
  .numbersize {
    font-size: 14px;
  }

  .totalapplicant {
    color: rgb(50, 81, 139);
    font-size: 12px;
  }

  .custom-avatar {
    width: 45px;
    height: 45px;
  }

  .total_applicant {
    font-size: 12px;
  }

  .totaljobpostNumber {
    font-size: 15px;
    font-weight: bolder;
  }
}

@media only screen and (max-width: 1440px) {
  .custom_card_TotalApplicant {
    margin-left: 19px;
    margin-top: 10px;
  }
  .totalapplicant {
    color: rgb(50, 81, 139);
    font-weight: bold;
    font-size: 14px;
  }

  .numbersize {
    font-size: 16px;
  }

  .custom-avatar {
    width: 50px;
    height: 50px;
  }
}

.icon-background {
  background-color: rgba(34, 72, 223, 0.132);

  border-radius: 10%;
  padding: 10px;
}

.custom_card_TotalJobs {
  border-top: 4px solid rgba(211, 102, 44, 0.799);
  border-radius: 8px;
  overflow: hidden;
}

.custom_card_TotalApplicant {
  border-top: 4px solid rgba(6, 78, 235, 0.799);
  border-radius: 8px;
  overflow: hidden;
}
</style>
