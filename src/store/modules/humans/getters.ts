import { GetterTree } from 'vuex'
import { State } from './state'
import { Human } from '@/types/Human';

export type Getters = {
    HUMANS(state: State): Human[],
    FILTERED_HUMANS(state: State): Human[]
}

export const getters: GetterTree<State, State> & Getters = {
    HUMANS: (state): Human[] => {
        return state.humans
    },
    FILTERED_HUMANS: (state): Human[] => {
        return state.filteredHumans
    },
}
