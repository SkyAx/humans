import api from '@/share/api';
import axios from 'axios';

const state = {
  humans: [],
};

// @ts-ignore
const getters = {
  HUMANS: state => state.humans
};

const mutations = {
  SET_HUMANS: (state, payload) => state.humans = payload,
  PUSH_HUMAN: (state, payload) => state.humans.push(payload)
};

const actions = {
  createHuman: async () => {
    return new Promise((resolve, reject) => {
      axios.all([
        axios.get(`${api}`).then(res => res.data.results[0]),
        axios.get(`${api}?results=10`).then(res => res.data.results)
      ])
        .then(axios.spread((human, friends) => {
          resolve({
            ...human,
            friends: friends
          });
        }))
        .catch(err => reject(err));
    });
  },
  createList: async ({ commit, dispatch }, count) => {
    dispatch('createHuman')
      .then(human => {
        commit('PUSH_HUMAN', human)
      })
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
