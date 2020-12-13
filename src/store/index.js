import Vue from 'vue';
import Vuex from 'vuex';
import humans from '@/store/modules/humans';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    humans: humans
  },
  strict: debug
});
