<template>
  <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-badge color="teal"> Model: {{ combinedModel }} </q-badge>
      <q-badge color="purple" text-color="white" class="q-ma-md">
        Mask: YYYY-MM-DD HH:mm
      </q-badge>
    </div>

    <div class="q-gutter-md row items-start">
      <q-date v-model="date" mask="YYYY-MM-DD" color="purple" />
      <q-time v-model="time" mask="HH:mm" color="purple" />
    </div>

    <div class="q-gutter-md row items-start">
      <q-input v-model="date" label="Selected Date" outlined />
      <q-input
        v-model="formattedTime"
        label="Selected Time (24-hour)"
        outlined
      />
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const now = new Date();
    const formatDate = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    const formatTime = (date) => {
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      return `${hours}:${minutes}`;
    };

    const date = ref(formatDate(now));
    const time = ref(formatTime(now));

    const combinedModel = computed(() => {
      return `${date.value} ${time.value}`;
    });

    const formattedTime = computed(() => {
      // Ensures the time is always displayed in 24-hour format
      const [hours, minutes] = time.value.split(":");
      const hours24 = String(parseInt(hours, 10)).padStart(2, "0");
      return `${hours24}:${minutes}`;
    });

    return {
      date,
      time,
      combinedModel,
      formattedTime,
    };
  },
};
</script>

<style scoped>
.q-ma-md {
  margin: 16px;
}
</style>
