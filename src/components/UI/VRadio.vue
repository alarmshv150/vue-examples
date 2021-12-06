<template>
  <label>
    <input
      type="radio"
      :value="value"
      @change="$emit('update:modelValue', $event.target.value)"
      :checked="value === modelValue"
    />
    <slot />
  </label>
</template>

<script>
export default {
  name: "my-radio",
  props: {
    value: { type: String, default: null },
    modelValue: { type: String, default: null },
  },
};
</script>

<style scoped></style>
