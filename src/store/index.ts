import Vue from 'vue';
import Vuex from 'vuex';
import { useHumanStore } from '@/store/modules/humans'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    humans: useHumanStore()
  },
  strict: debug
});
