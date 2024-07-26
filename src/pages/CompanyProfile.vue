<template>
  <q-page class="flex flex-center" style="background-color: #ebecf0">
    <q-card
      class="q-pa-md q-mb-md"
      style="max-width: 410px; border-radius: 14px"
    >
      <q-card-section>
        {{ combinedOtp }}
      </q-card-section>
      <q-card-section>
        <div class="q-mb-md text-center">
          <q-icon name="email" size="5.5rem" color="green" />
        </div>
        <div class="text-center">
          <p class="text-h5">Please check your email</p>
          <p class="text-muted" style="margin-top: -14px">
            We've sent a code to contact@curfcode.com
          </p>
        </div>
        <div class="q-mt-md text-center" style="margin-top: 25px">
          <input
            ref="otp1"
            class="otp-letter-input"
            @update:model-value="handleInput('otp1', $event, 'otp2')"
            v-model="otp1"
            maxlength="1"
          />
          <input
            ref="otp2"
            class="otp-letter-input"
            @update:model-value="handleInput('otp2', $event, 'otp3')"
            v-model="otp2"
            maxlength="1"
          />
          <input
            ref="otp3"
            class="otp-letter-input"
            @update:model-value="handleInput('otp3', $event, 'otp4')"
            v-model="otp3"
            maxlength="1"
          />
          <input
            ref="otp4"
            class="otp-letter-input"
            v-model="otp4"
            @update:model-value="handleInput('otp4', $event, 'otp5')"
            maxlength="1"
          />
          <input
            ref="otp5"
            @update:model-value="handleInput('otp5', $event, 'otp6')"
            class="otp-letter-input"
            v-model="otp5"
            maxlength="1"
          />
          <input
            ref="otp6"
            class="otp-letter-input"
            v-model="otp6"
            maxlength="1"
          />
        </div>
        <div class="text-center q-mt-md">
          <p class="text-muted">
            Didn't get the code?
            <q-btn
              rounded
              flat
              class="q-ml-xs"
              color="primary"
              @click="resendCode"
              >Click to resend.</q-btn
            >
          </p>
        </div>

        <q-card-actions class="q-mt-md q-px-lg justify-end">
          <q-btn label="Cancel" flat color="secondary" @click="cancel" />
          <q-btn label="Verify" color="primary" @click="verify" />
        </q-card-actions>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
      otp5: "",
      otp6: "",
    };
  },

  computed: {
    combinedOtp: {
      get() {
        return (
          this.otp1 + this.otp2 + this.otp3 + this.otp4 + this.otp5 + this.otp6
        );
      },
      set(value) {
        this.otp1 = value[0] || "";
        this.otp2 = value[1] || "";
        this.otp3 = value[2] || "";
        this.otp4 = value[3] || "";
        this.otp5 = value[4] || "";
        this.otp6 = value[5] || "";
      },
    },
  },

  methods: {
    handleInput(currentRef, value, nextRef) {
      /*   console.log("df"); */
      // Focus on the next input if the current one has a value
      if (value.length == 1) {
        this.$nextTick(() => {
          const nextInput = this.$refs[nextRef];
          if (nextInput) {
            nextInput.focus();
          }
        });
      }
    },
  },
};
</script>

<style scoped>
.iconcolor {
  background: linear-gradient(40deg, #279f27, #5fc331);
}

.otp-letter-input {
  max-width: 11%;
  height: 90px;
  margin-left: 10px;
  border: 1px solid #198754;

  border-radius: 10px;
  color: #198754;
  font-size: 40px;
  text-align: center;
  font-weight: bold;
}
</style>
