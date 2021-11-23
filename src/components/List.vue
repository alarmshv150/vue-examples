<template>
  <div>
    <h1>The number of elements:{{ incorrectLength }}</h1>
    <element
      v-for="elem in list"
      :key="elem.index"
      :elem="elem"
      @click="addElement"
    />
    <div>
      <button @click="addElement">add element</button>
    </div>
  </div>
</template>

<script>
import Element from "@/components/Element";
import ListMixin from "@/mixins/ListMixin";

export default {
  components: { Element },
  mixins: [ListMixin],
};
</script>

<style scoped></style>
