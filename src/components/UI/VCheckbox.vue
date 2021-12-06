<template>
  <label>
    <input
      type="checkbox"
      :value="value"
      :checked="modelValue.includes(value)"
      @change="(event) => onChange(event.target.value)"
    />
    <slot />
  </label>
</template>
<script>
export default {
  name: "my-checkbox",
  props: {
    value: { type: String, default: null },
    modelValue: { type: Array, default: () => [] },
  },
  methods: {
    onChange(value) {
      if (this.modelValue.includes(this.value)) {
        this.$emit(
          "update:modelValue",
          this.modelValue.filter((cv) => cv !== value)
        );
      } else {
        this.$emit("update:modelValue", this.modelValue.concat(value));
      }
    },
  },
};
</script>
<style scoped></style>
