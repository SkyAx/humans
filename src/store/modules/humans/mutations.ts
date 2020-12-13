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
    [MutationTypes.UPDATE_HUMAN_NETWORK](state, {user, networkRequest}) {
        debugger;
        const humanIdxToUpdate: number = state.humans.findIndex((human: Human) => human.id === user.id || human.registered === user.registered);
        const networkRequestIdxToUpdate: number = state.humans[humanIdxToUpdate].networkRequests.findIndex((request: Human) => request.id === networkRequest.id || request.registered === networkRequest.registred);

        // tslint:disable-next-line:max-line-length
        // @ts-ignore
        state.humans = state.humans.map((human: Human, idx: number): { image: string; city: string; thumb: string; fullName: string; registered: Date; id: string; declinedRequest: Human[]; networkRequests: Human[]; network: number } | { image: string; city: string; thumb: string; fullName: string; registered: Date; id: string; declinedRequest: Human[]; networkRequests: Human[]; network: Human[] } => {
            return humanIdxToUpdate === idx ? {
                ...human,
                networkRequests: human.networkRequests.slice(networkRequestIdxToUpdate, 1),
                network: human.network.push(networkRequest),
            }
            :
            {
                ...human,
            };
        })
    },
}
