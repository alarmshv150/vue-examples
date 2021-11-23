<template>
  <div>
    <div>{{ elem }}</div>
  </div>
</template>

<script>
export default {
  props: {
    elem: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped></style>
