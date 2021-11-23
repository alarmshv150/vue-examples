<template>
  <div>
    <child />
  </div>
</template>

<script>
import Child from "@/components/Child";
export default {
  components: { Child },
  data() {
    return {
      user: {
        name: "alarmshv",
      },
    };
  },
  provide() {
    return {
      user: this.user,
    };
  },
};
</script>

<style scoped></style>
