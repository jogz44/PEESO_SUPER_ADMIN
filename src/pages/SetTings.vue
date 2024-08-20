<template>
  <!--  <q-field filled stack-label label="Enter items" class="chips-input"> -->
  <div class="input-chips-wrapper">
    <template v-for="(item, index) in items" :key="index">
      <q-chip removable @remove="removeItem(index)" class="chip-inline">{{
        item
      }}</q-chip>
    </template>
    <input
      v-model="inputValue"
      @keyup.enter="addItem"
      type="text"
      class="chips-input-field"
      placeholder="Type and press enter"
    />
  </div>
  <!--   </q-field> -->
</template>

<script>
export default {
  data() {
    return {
      inputValue: "", // Current input value
      items: [], // Array to store the entered items
    };
  },
  methods: {
    addItem() {
      const trimmedValue = this.inputValue.trim();
      if (trimmedValue) {
        this.items.push(trimmedValue);
        this.inputValue = ""; // Clear the input field
      }
    },
    removeItem(index) {
      this.items.splice(index, 1); // Remove the item at the given index
    },
  },
};
</script>

<style scoped>
.input-chips-wrapper {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 40px; /* Ensure a minimum height for the container */
}

.chip-inline {
  margin: 2px;
}

.chips-input-field {
  border: none;
  outline: none;
  flex-grow: 1;
  min-width: 150px; /* Minimum width for the input */
  padding: 4px;
  order: 1; /* Ensure the input comes after the chips */
}

.chips-input-field::placeholder {
  color: #aaa;
}
</style>
