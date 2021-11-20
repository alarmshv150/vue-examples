<template>
  <div class="app">
    <input v-model.number="firstInputValue" type="text" />
    <input v-model.trim="secondInputValue" type="text" />
    <!-- default onchange event instead input -->
    <input v-model.lazy="thirdInputValue" type="text" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstInputValue: "",
      secondInputValue: "",
      thirdInputValue: "",
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 30px;
}
</style>
