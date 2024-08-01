<template>
  <q-page>
    <div class="custom-mx-xxl q-my-md">
      <div class="profile-container" v-if="userinfo.data && userinfo.data[0]">
        <div class="profile-avatar">
          <q-avatar class="avatar">
            <img :src="imgurl" />
          </q-avatar>
        </div>
        <div class="profile-details" style="margin-top: -25px">
          <h2 class="title" style="margin-bottom: -10px">
            <b> {{ userinfo.data[0].Company_name }} </b>
          </h2>
          <p class="title">{{ userinfo.data[0].Company_address }}</p>
          <br />
          <br />
          <p style="margin-bottom: -10px; margin-top: 20px; font-weight: 500">
            <!--   SALARY -->
          </p>
          <p></p>
          <p
            style="margin-bottom: -10px; margin-top: -2px; font-weight: 500"
          ></p>
          <p></p>
          <p
            style="margin-bottom: -10px; margin-top: -2px; font-weight: 500"
          ></p>
          <p></p>
        </div>
      </div>

      <div class="row">
        <div class="col-6">
          <div class="row q-my-xl">
            <q-card style="width: 720px; height: auto; border-radius: 13px">
              <q-card-section class="q-mt-md">
                <div class="row">
                  <div class="col-9" style="margin-left: -10px">
                    <q-card-section style="margin-top: -60px">
                      <h5>
                        <b> Create Job Posting </b>
                      </h5>
                    </q-card-section>
                    <q-card-section style="margin-top: -58px">
                      <p>Please Enter Information Details</p>
                    </q-card-section>
                  </div>

                  <div class="col-3" style="margin-top: -22px">
                    <q-avatar
                      size="65px"
                      class="q-ml-sm hoverimage"
                      @click="triggerFileUpload"
                      style="margin-left: 30px"
                    >
                      <img :src="imageUrl" alt="Upload" />
                    </q-avatar>
                    <p style="margin-left: 10px">Upload Job Profile</p>
                    <input
                      type="file"
                      ref="fileInput"
                      style="display: none"
                      @change="handleFileUpload"
                      accept="image/*"
                    />
                  </div>
                </div>
              </q-card-section>

              <q-card-section class="">
                <div class="col-12 col-xl-12 col-lg-6 col-md-6 col-sm-6">
                  <div class="custom-input-container marginforfield">
                    <q-icon name="description" class="input-icon" />
                    <input
                      v-model="txtjobtitle"
                      class="custom-input-posting"
                      placeholder="Job Title"
                    />
                  </div>
                </div>
              </q-card-section>

              <q-card-section style="margin-top: 20px">
                <div class="row">
                  <div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div class="custom-input-container marginforfield">
                      <q-icon name="payments" class="input-icon" />
                      <input
                        v-model="txtjobtitle"
                        class="custom-input"
                        placeholder="Expected Salary"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div class="custom-input-container marginforfield">
                      <q-icon name="chair_alt" class="input-icon" />
                      <input
                        v-model="txtjobtitle"
                        class="custom-input"
                        placeholder="Vacant Count"
                      />
                    </div>
                  </div>
                </div>
              </q-card-section>

              <q-card-section style="margin-top: 20px">
                <div class="row">
                  <div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div class="custom-input-container marginforfield">
                      <div class="date-input-container">
                        <div class="input-container" id="date-picker-container">
                          <label for="date-from">Date From</label>
                          <input type="date" id="date-checkin" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div class="custom-input-container marginforfield">
                      <div class="date-input-container">
                        <div class="input-container" id="date-picker-container">
                          <label for="date-from">Date To</label>
                          <input type="date" id="date-checkin" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </q-card-section>

              <q-card-section style="margin-top: 20px">
                <div class="row">
                  <div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div class="custom-input-container marginforfield">
                      <q-icon name="chair_alt" class="input-icon" />
                      <input
                        v-model="txtjobtitle"
                        class="custom-input"
                        placeholder="Number of Hours"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div class="custom-input-container marginforfield">
                      <q-icon name="work" class="input-icon" />
                      <input
                        v-model="txtjobtitle"
                        class="custom-input"
                        placeholder="Nature of Work"
                      />
                    </div>
                  </div>
                </div>
              </q-card-section>

              <q-card-section style="margin-top: 20px">
                <div class="row">
                  <div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div class="custom-input-container marginforfield">
                      <q-icon name="history_edu" class="input-icon" />
                      <input
                        v-model="txtjobtitle"
                        class="custom-input"
                        placeholder="Educational Level"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div class="custom-input-container marginforfield">
                      <q-icon name="school" class="input-icon" />
                      <input
                        v-model="txtjobtitle"
                        class="custom-input"
                        placeholder="Course"
                      />
                    </div>
                  </div>
                </div>
              </q-card-section>

              <q-card-section style="margin-top: 20px">
                <div class="row">
                  <div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div class="custom-input-container marginforfield">
                      <q-icon name="receipt_long" class="input-icon" />
                      <input
                        v-model="txtjobtitle"
                        class="custom-input"
                        placeholder="Work Experience"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div class="custom-input-container marginforfield">
                      <q-icon name="recent_actors" class="input-icon" />
                      <input
                        v-model="txtjobtitle"
                        class="custom-input"
                        placeholder="License"
                      />
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <div class="col-6">
          <div class="row q-my-xl">
            <q-card style="width: 720px; height: auto; border-radius: 13px">
              <q-card-section class="q-mt-md">
                <div class="row">
                  <div class="col-9" style="margin-left: -10px">
                    <q-card-section style="margin-top: -60px">
                      <h5>
                        <b> Create Description </b>
                      </h5>
                    </q-card-section>
                    <q-card-section style="margin-top: -58px">
                      <p>Please Enter Description Details</p>
                    </q-card-section>
                  </div>
                </div>
              </q-card-section>

              <q-card-section style="margin-top: -2px">
                <div class="col-12 col-xl-12 col-lg-6 col-md-6 col-sm-6">
                  <div class="custom-input-container marginforfield">
                    <q-icon name="description" class="input-icon" />
                    <input
                      v-model="txtjobtitle"
                      class="custom-input-posting"
                      placeholder="Place of Work"
                    />
                  </div>
                </div>
              </q-card-section>

              <q-card-section style="margin-top: -32px">
                <div class="q-pa-xs">
                  <q-editor
                    style="height: 263px"
                    v-model="qeditor"
                    :dense="$q.screen.lt.md"
                    :toolbar="[
                      [
                        {
                          label: $q.lang.editor.align,
                          icon: $q.iconSet.editor.align,
                          fixedLabel: true,
                          list: 'only-icons',
                          options: ['left', 'center', 'right', 'justify'],
                        },
                        /*  {
                          label: $q.lang.editor.align,
                          icon: $q.iconSet.editor.align,
                          fixedLabel: true,
                          options: ['left', 'center', 'right', 'justify'],
                        }, */
                      ],
                      [
                        'bold',
                        'italic',
                        /*    'strike', */
                        'underline',
                        'subscript',
                        /*  'superscript', */
                      ],
                      /*   ['token', 'hr', 'link', 'custom_btn'], */
                      /*  ['print', 'fullscreen'], */
                      [
                        {
                          /*  label: $q.lang.editor.formatting, */
                          /*   icon: $q.iconSet.editor.formatting, */
                          /*   list: 'no-icons',
                          options: [
                            'p',
                            'h1',
                            'h2',
                            'h3',
                            'h4',
                            'h5',
                            'h6',
                            'code',
                          ], */
                        },
                        {
                          label: $q.lang.editor.fontSize,
                          icon: $q.iconSet.editor.fontSize,
                          fixedLabel: true,
                          fixedIcon: true,
                          list: 'no-icons',
                          options: [
                            'size-1',
                            'size-2',
                            'size-3',
                            'size-4',
                            'size-5',
                            'size-6',
                            'size-7',
                          ],
                        },
                        {
                          label: $q.lang.editor.defaultFont,
                          icon: $q.iconSet.editor.font,
                          fixedIcon: true,
                          list: 'no-icons',
                          options: [
                            'default_font',
                            'arial',
                            'arial_black',
                            'comic_sans',
                            'courier_new',
                            'impact',
                            'lucida_grande',
                            'times_new_roman',
                            'verdana',
                          ],
                        },
                        /*  'removeFormat', */
                      ],
                      ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

                      /*    ['undo', 'redo'], */
                      /*  ['viewsource'], */
                    ]"
                    :fonts="{
                      arial: 'Arial',
                      arial_black: 'Arial Black',
                      comic_sans: 'Comic Sans MS',
                      courier_new: 'Courier New',
                      impact: 'Impact',
                      lucida_grande: 'Lucida Grande',
                      times_new_roman: 'Times New Roman',
                      verdana: 'Verdana',
                    }"
                  />
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
import { useLoginCheck } from "src/stores/SignUp_Store";
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "MonthSlotWeek",
  data() {
    return {
      userinfo: {},
      retrievedLogin: "",
      imgurl: "",
      imageUrl: "/upload.jpg",
      qeditor: "",
    };
  },

  created() {
    this.retrievedLogin = localStorage.getItem("Login");
    console.log("Retrieved Login:", this.retrievedLogin);

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

        if (!this.userinfo || !this.userinfo.data || !this.userinfo.data[0]) {
          console.error("Invalid user info retrieved.");
          return;
        }

        console.log("Data Retrieved:", this.userinfo);

        const baseUrl =
          "http://10.0.1.26:82/PEESOPORTAL/REGISTRATION/ADMIN/Logos/";
        const companyName = encodeURIComponent(
          this.userinfo.data[0].Company_name
        );
        const companyLogo = this.userinfo.data[0].Company_Logo
          ? encodeURIComponent(this.userinfo.data[0].Company_Logo)
          : "Company_Profile/e5d3982a1f7a511f789d.jpg";

        this.imgurl =
          companyLogo == "Company_Profile/e5d3982a1f7a511f789d.jpg"
            ? `${baseUrl}${companyLogo}`
            : `${baseUrl}${companyName}/${companyLogo}`;
        console.log("Image URL:", this.imgurl);
      })
      .catch((error) => {
        console.error("Error retrieving data:", error);
      });
  },
});
</script>

<style scoped>
/* RESET FORM ELEMENTS */
.input-container input[type="date"],
.input-container input[type="text"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: transparent;
  border: none;
  outline: none;
  box-shadow: none;
}

/* INPUT CONTAINER  */
.input-container {
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;

  height: 50px;
  padding: 5px 10px 10px 10px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid rgb(113, 126, 126);
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 10px;
  margin-right: -14px;
}

.input-container label {
  position: relative;
  width: 100%;
  font-family: "Segoe UI";
  font-weight: 600;
  font-size: 11px;
  letter-spacing: 0.1em;
  line-height: 20px;
  color: rgb(120, 124, 126);
  margin-left: 2px;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.input-container input {
  position: relative;
  align-items: center;
  width: auto;
  height: auto;

  font-family: "Lekton", Arial, sans-serif;
  margin-bottom: -23px;
  font-size: 14px;
  letter-spacing: 0.05em;
  line-height: 21px;
  text-transform: uppercase;
  margin-left: 0px;
}
.custom-input {
  width: 105%;
  height: 40px;
  padding-left: 40px; /* Space for the icon */
  border-radius: 12px;
  border: 1px solid rgb(113, 126, 126);
  outline: none;
  box-sizing: border-box;
}

.custom-input-posting {
  width: 213%;
  height: 40px;
  padding-left: 40px; /* Space for the icon */
  border-radius: 12px;
  border: 1px solid rgb(113, 126, 126);
  outline: none;
  box-sizing: border-box;
}

.input-icon {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 20px;
  color: gray;
}

.marginforfield {
  margin-top: 15px;
}

.custom-input-container {
  position: relative;
  width: 320px;
  margin-top: -50px;
}

@media only screen and (max-width: 1439px) {
  .responsive {
    margin-left: 45px;
  }
}

.custom-mx-xxl {
  margin-left: 45px;
  margin-right: 60px;
}

@media only screen and (max-width: 1904px) {
  .custom-mx-xxl {
    margin-left: 45px;
    margin-right: 35px;
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
  border-radius: 15%;
}

.avatar {
  width: 110px;
  height: 110px;
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
    background: white;
  }

  .profile-details {
    text-align: center;
    background: #ffffff;
    padding: 20px;
    border-radius: 8px;
  }
  .title {
    color: black;
  }
}
</style>
