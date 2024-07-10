<template>
  <div class="row justify-left">
    <q-card-section class="row" style="margin-top: -8px">
      <div>
        <div class="text-h6" :style="{ fontSize: '13px', fontWeight: '400' }">
          TODAY {{ dayName }} {{ day }} {{ monthName }} {{ year }}
        </div>
        <div class="text-subtitle2" :style="{ marginTop: '-5px' }">
          {{ monthName }} {{ day }}, {{ year }} / {{ time }}
        </div>
      </div>
    </q-card-section>
    <div class="q-pa-md q-gutter-sm row q-ml-lg">
      <q-btn no-cap class="button" style="margin: 2px" @click="$emit('today')">
        Today
      </q-btn>
      <q-btn no-caps class="button" style="margin: 2px" @click="$emit('prev')">
        &lt; Prev
      </q-btn>
      <q-btn no-caps class="button" style="margin: 2px" @click="$emit('next')">
        Next &gt;
      </q-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dayName: "",
      day: "",
      monthName: "",
      year: "",
      time: "",
    };
  },
  created() {
    this.setDateTime();
    setInterval(this.setDateTime, 60000); // Update the time every minute
  },
  methods: {
    setDateTime() {
      const date = new Date();
      const dayNames = [
        "SUNDAY",
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY",
      ];
      const monthNames = [
        "JANUARY",
        "FEBRUARY",
        "MARCH",
        "APRIL",
        "MAY",
        "JUNE",
        "JULY",
        "AUGUST",
        "SEPTEMBER",
        "OCTOBER",
        "NOVEMBER",
        "DECEMBER",
      ];

      this.dayName = dayNames[date.getDay()];
      this.day = date.getDate();
      this.monthName = monthNames[date.getMonth()];
      this.year = date.getFullYear();
      this.time = this.formatTime(date);
    },
    formatTime(date) {
      let hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      const strMinutes = minutes < 10 ? "0" + minutes : minutes;
      return hours + ":" + strMinutes + " " + ampm;
    },
  },
};
</script>

<style scoped>
.button {
  height: 8px;
  margin-top: -10px;
}
</style>
