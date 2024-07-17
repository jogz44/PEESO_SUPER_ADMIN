<template>
  <q-page class="flex-center">
    <div class="cards-container">
      <!-- Left Cards -->
      <div class="left-cards">
        <q-card class="q-ma-md" style="width: 300px">
          <q-card-section>
            <div class="text-h6">UI/UX Design</div>
            <div class="text-body-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
              placeat facere tenetur impedit molestias illo quibusdam sequi
              necessitatibus suscipit non neque maiores vero, temporibus
              accusantium eaque nisi quidem velit magnam.
            </div>
          </q-card-section>
        </q-card>

        <q-card class="q-ma-md" style="width: 300px; margin-top: 200px">
          <q-card-section>
            <div class="text-h6">UI/UX Design</div>
            <div class="text-body-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
              placeat facere tenetur impedit molestias illo quibusdam sequi
              necessitatibus suscipit non neque maiores vero, temporibus
              accusantium eaque nisi quidem velit magnam.
            </div>
          </q-card-section>
        </q-card>
      </div>

      <!-- Vertical Line -->
      <div class="vertical-line"></div>

      <!-- Right Cards -->
      <div class="right-cards">
        <q-card class="q-ma-md" style="width: 300px; margin-top: 220px">
          <q-card-section>
            <div class="text-h6">UI/UX Design</div>
            <div class="text-body-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
              placeat facere tenetur impedit molestias illo quibusdam sequi
              necessitatibus suscipit non neque maiores vero, temporibus
              accusantium eaque nisi quidem velit magnam.
            </div>
          </q-card-section>
        </q-card>

        <q-card class="q-ma-md" style="width: 300px; margin-top: 190px">
          <q-card-section>
            <div class="text-h6">UI/UX Design</div>
            <div class="text-body-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
              placeat facere tenetur impedit molestias illo quibusdam sequi
              necessitatibus suscipit non neque maiores vero, temporibus
              accusantium eaque nisi quidem velit magnam.
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.flex-center {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Align items to the top */
  height: 100vh; /* Full height to ensure vertical centering */
}

.cards-container {
  display: flex;
  align-items: flex-start; /* Align items to the top */
  justify-content: space-between; /* Distribute items evenly */
  width: 43%; /* Full width of the page */
  max-width: 1200px; /* Maximum width of the container */
}

.left-cards,
.right-cards {
  display: flex;
  flex-direction: column; /* Stack cards vertically */
  align-items: flex-start; /* Align items to the top */
}

.vertical-line {
  width: 5px;
  height: 830px; /* Adjust the height as needed */
  background-color: #000; /* Adjust the color as needed */
  margin: 10px 10px; /* Adjust margin for spacing between cards and line */
}

@media (max-width: 1200px) {
  .cards-container {
    flex-wrap: wrap; /* Allow cards to wrap on smaller screens */
  }
  .left-cards,
  .right-cards {
    width: calc(50% - 20px); /* Adjust width for two columns with margin */
    margin-bottom: 20px; /* Margin between left and right columns */
  }
}
</style>
