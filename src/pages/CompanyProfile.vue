<template>
  <q-page class="q-pa-md flex flex-center">
    <q-card class="message-icon-card">
      <q-card-section class="q-pa-none">
        <q-icon name="mail" size="5rem" class="message-icon" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "MessageIconCard",
};
</script>

<style scoped>
.message-icon-card {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3eb13c; /* Green background color */
  border-radius: 50%; /* Make it circular */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.3s;
}

.message-icon-card:hover {
  background-color: #2a8a2a; /* Darker green on hover */
  transform: scale(1.1); /* Slightly increase size on hover */
}

.message-icon {
  color: white; /* Icon color */
}
</style>
