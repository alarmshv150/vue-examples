export default {
  data() {
    return {
      list: [1, 2],
    };
  },
  methods: {
    addElement() {
      this.list.push(this.list.length + 1);
    },
  },
  mounted() {
    console.log("list mixin mounted");
  },
  computed: {
    incorrectLength() {
      console.log("called");
      return this.list.length + 1;
    },
  },
  watch: {
    list: {
      handler(newValue) {
        console.log(newValue);
      },
      deep: true,
    },
  },
};

