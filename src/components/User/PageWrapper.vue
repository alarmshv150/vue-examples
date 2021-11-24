<template>
  <div class="page__wrapper">
    <div
      v-for="number in total"
      :key="number"
      @click="$emit('change', number)"
      class="page"
      :class="{ current__page: page === number }"
    >
      {{ number }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      required: true,
    },
    page: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.page__wrapper {
  display: flex;
  margin-top: 10px;
}
.page {
  border: 3px solid rgb(19, 109, 11);
  padding: 10px;
  margin-right: 10px;
  width: 40px;
}
.current__page {
  border: 4px solid rgb(1, 7, 21);
}
</style>
