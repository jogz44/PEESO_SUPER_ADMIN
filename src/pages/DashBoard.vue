<template>
  <q-page>
    <!-- Main Content -->
    <q-page-section>
      <div class="row q-mx-xl q-my-md">
        <!-- Total Jobs Card -->
        <q-card
          class="col-6 col-xl-6 custom-card q-mx-md custom_card_TotalJobs"
          style="border-radius: 12px"
        >
          <q-card-section>
            <div class="row items-center" style="margin-top: -12px">
              <div class="row q-mt-md">
                <div class="col-12 text-center">
                  <q-avatar size="50px" square>
                    <img src="/jobpostingicon.png" />
                  </q-avatar>
                </div>
              </div>
              <div class="col" style="margin-left: 8px; margin-top: 20px">
                <div style="font-size: 14px">Total Jobs</div>
                <div style="font-size: 20px; font-weight: bolder">
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
                    <div
                      class="text-h6"
                      style="
                        font-size: 16px;
                        font-weight: 400;
                        font-weight: bolder;
                      "
                    >
                      231
                    </div>
                    <div
                      class="text-subtitle2 totalapplicant"
                      style="margin-top: -8px"
                    >
                      Active Job Posting
                    </div>
                  </div>
                </q-card-section>
              </div>

              <div class="col-3">
                <q-card-section class="row items-center">
                  <div>
                    <div
                      class="text-h6"
                      style="
                        font-size: 16px;
                        font-weight: 400;
                        font-weight: bolder;
                      "
                    >
                      554
                    </div>
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
                    <div
                      class="text-h6"
                      style="
                        font-size: 16px;
                        font-weight: 400;
                        font-weight: bolder;
                      "
                    >
                      23
                    </div>
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
                    <div
                      class="text-h6"
                      style="
                        font-size: 16px;
                        font-weight: 400;
                        font-weight: bolder;
                      "
                    >
                      145
                    </div>
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
          class="col-5 col-xl-5 custom_card_Applicant custom_card_TotalApplicant"
          style="border-radius: 12px"
        >
          <q-card-section>
            <div class="row items-center" style="margin-top: -12px">
              <div class="row q-mt-md">
                <div class="col-12 text-center">
                  <q-avatar size="50px" square>
                    <img src="/applicant.png" />
                  </q-avatar>
                </div>
              </div>
              <div class="col" style="margin-left: 8px; margin-top: 20px">
                <div style="font-size: 14px">Total Applicant</div>
                <div style="font-size: 20px; font-weight: bolder">
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
                    <div
                      class="text-h6"
                      style="
                        font-size: 16px;
                        font-weight: 400;
                        font-weight: bolder;
                      "
                    >
                      120
                    </div>
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
                    <div
                      class="text-h6"
                      style="
                        font-size: 16px;
                        font-weight: 400;
                        font-weight: bolder;
                      "
                    >
                      234
                    </div>
                    <div
                      class="text-subtitle2 totalapplicant"
                      style="margin-top: -8px"
                    >
                      Rejected
                    </div>
                  </div>
                </q-card-section>
              </div>

              <div class="col-4">
                <q-card-section class="row items-center">
                  <div>
                    <div
                      class="text-h6"
                      style="
                        font-size: 16px;
                        font-weight: 400;
                        font-weight: bolder;
                      "
                    >
                      432
                    </div>
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
                    <div
                      class="text-h6"
                      style="
                        font-size: 16px;
                        font-weight: 400;
                        font-weight: bolder;
                      "
                    >
                      554
                    </div>
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
/* .custom-card {
  background: rgba(229, 208, 162, 0.132);

  border-radius: 20px;
  box-shadow: 10px 10px 15px rgba(49, 47, 47, 0.15);
}

.custom_card_Applicant {
  background: rgba(6, 112, 241, 0.048);

  border-radius: 20px;
  box-shadow: 10px 10px 15px rgba(49, 47, 47, 0.15);
} */

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

.totalapplicant {
  color: rgb(50, 81, 139);
}
</style>
