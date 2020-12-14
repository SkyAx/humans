import { MutationTree } from 'vuex'
import { MutationTypes } from './mutation-types'
import { State } from './state'
import { ActionTypes } from '@/store/modules/humans/action-types';
import { Human } from '@/types/Human';

export type Mutations<S = State> = {
    [MutationTypes.SET_HUMANS](state: S, payload: [Human]): void,
    [MutationTypes.UPDATE_HUMAN_NETWORK](state: S, payload: any): void,
    [MutationTypes.SET_FILTERED_ELEMENTS](state: S, payload: any): void,
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.SET_HUMANS](state, payload: Human[]) {
        state.humans = payload
    },
    [MutationTypes.UPDATE_HUMAN_NETWORK](state, {user, networkRequest, actionType}) {
        const humanIdxToUpdate: number = state.humans.findIndex((human: Human) => human.id === user.id || human.registered === user.registered);
        const networkRequestIdxToUpdate: number = state.humans[humanIdxToUpdate].networkRequests.findIndex((request: Human) => request.id === networkRequest.id || request.registered === networkRequest.registred);

        state.humans = state.humans.map((human: Human, idx: number): Human => {
            if (humanIdxToUpdate === idx) {
                let humanCopy = state.humans[humanIdxToUpdate];

                humanCopy.networkRequests.splice(networkRequestIdxToUpdate, 1);

                if (actionType === ActionTypes.APPROVE_AS_NETWORK) {
                    humanCopy.network.push(networkRequest);
                }

                if (actionType === ActionTypes.DECLINE_AS_NETWORK) {
                    humanCopy.declinedRequest.push(networkRequest);
                }

                return humanCopy;
            } else {
                return human;
            }
        })
    },
    [MutationTypes.SET_FILTERED_ELEMENTS](state, payload: Human[]) {
        state.filteredHumans = payload;
    }
}
