import { MutationTree } from 'vuex'
import { MutationTypes } from './mutation-types'
import { State } from './state'
import { Human } from '@/types/Human';

export type Mutations<S = State> = {
    [MutationTypes.SET_HUMANS](state: S, payload: [Human]): void
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.SET_HUMANS](state, payload: Human[]) {
        state.humans = payload
    },
    [MutationTypes.PUSH_HUMAN](state, payload: Human) {
        state.humans.push(payload)
    },
}
