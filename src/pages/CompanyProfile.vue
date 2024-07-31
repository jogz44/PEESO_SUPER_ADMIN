<template>
  <div class="col-5">
    <div class="custom-input-container marginforfield">
      <input
        v-model="txtemail"
        class="custom-input"
        placeholder="Email"
        @blur="validateEmail"
        ref="emailInput"
      />
      <q-icon name="email" class="input-icon" />
      <div
        data-aos="fade-in"
        data-aos-duration="1500"
        v-if="errors.txtemail"
        class="tooltip_email"
      >
        {{ errors.txtemail }}
      </div>
    </div>
    <div class="custom-input-container marginforfield">
      <input
        v-model="txtname"
        class="custom-input"
        placeholder="Name"
        @focus="checkEmailBeforeFocus"
        ref="nameInput"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      txtemail: "",
      txtname: "",
      errors: {
        txtemail: "",
      },
    };
  },
  watch: {
    txtemail(value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(value)) {
        this.errors.txtemail = "";
      }
    },
  },
  methods: {
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (this.txtemail && !emailRegex.test(this.txtemail)) {
        this.errors.txtemail = "Please enter a valid email address.";
        this.$refs.emailInput.focus();
      } else {
        this.errors.txtemail = "";
      }
    },
    checkEmailBeforeFocus(event) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (this.txtemail && !emailRegex.test(this.txtemail)) {
        this.errors.txtemail = "Please enter a valid email address.";
        event.preventDefault();
        this.$refs.emailInput.focus();
      }
    },
  },
};
</script>

<style scoped>
.custom-input-container {
  position: relative;
}
.marginforfield {
  margin-bottom: 1rem;
}
.custom-input {
  width: 100%;
  padding: 0.5rem;
}
.input-icon {
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
}
.tooltip_email {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
</style>
