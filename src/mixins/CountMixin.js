export default {
    data() {
        return {
            counter: 0,
        };
    },
    methods: {
        increment() {
            this.counter += 1;
        },
        decrement() {
            this.counter -= 1;
        },
    },
    /* mixins mounted before component */
    mounted() {
        console.log("count mixin mounted");
    },
    watch: {
        counter(newValue) {
            console.log(newValue);
        },
    },
};
