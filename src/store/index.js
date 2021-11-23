import { createStore } from "vuex";
import { todoModule } from "@/store/todoModule";

export default createStore({
  state: {
    isAuth: false,
  },
  modules: {
    todo: todoModule,
  },
});
