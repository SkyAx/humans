import { ActionTree, ActionContext } from 'vuex'
import { State } from './state'
import { Mutations } from './mutations'
import { ActionTypes } from './action-types'
import { MutationTypes } from './mutation-types'
import { Human } from '@/types/Human';
import HumanDataService from '@/services/HumanDataService'

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
    [ActionTypes.CREATE_USERS](
        { commit, dispatch }: AugmentedActionContext,
        count: number,
    ): void,
    [ActionTypes.APPROVE_AS_NETWORK](
        { commit }: AugmentedActionContext,
        object: any,
    ): void,
    [ActionTypes.FILTER_BY_STR](
        { commit, getters }: AugmentedActionContext,
        str: string,
    ): void
}

export const actions: ActionTree<State, State> & Actions = {
    async [ActionTypes.CREATE_USERS]({ commit, dispatch }, count) {
        await HumanDataService
            .get(count)
            .then((res) => {
                const randomNumber = Math.floor(Math.random() * (80 + 1));
                const randomNetworkRequest = res.data.results.length ? [...res.data.results.slice(randomNumber, randomNumber + 10)] : [];
                const mappedNetworkRequest = randomNetworkRequest.map((data: any) => {
                    return {
                        id: data.id.value,
                        fullName: `${data.name.first} ${data.name.last}`,
                        city: data.location.city,
                        image: data.picture.large,
                        thumb: data.picture.thumbnail,
                        registered: data.registered.date,
                        networkRequests: [],
                        network: [],
                        declinedRequest: [],
                    }
                });
                const mappedHumans = res.data.results.length ? res.data.results.map((data: any): Human => {
                    return {
                        id: data.id.value,
                        fullName: `${data.name.first} ${data.name.last}`,
                        city: data.location.city,
                        image: data.picture.large,
                        thumb: data.picture.thumbnail,
                        registered: data.registered.date,
                        networkRequests: mappedNetworkRequest,
                        network: [],
                        declinedRequest: [],
                    } as Human
                }) : [] as Human[];
                commit(MutationTypes.SET_HUMANS, mappedHumans);
            })
            .catch((err) => console.error(err))
    },
    [ActionTypes.APPROVE_AS_NETWORK]({ commit }, { user, networkRequest }) {
        commit(MutationTypes.UPDATE_HUMAN_NETWORK, { user, networkRequest, actionType: ActionTypes.APPROVE_AS_NETWORK })
    },
    [ActionTypes.DECLINE_AS_NETWORK]({ commit }, { user, networkRequest }) {
        commit(MutationTypes.UPDATE_HUMAN_NETWORK, { user, networkRequest, actionType: ActionTypes.DECLINE_AS_NETWORK })
    },
    [ActionTypes.FILTER_BY_STR]({ getters, commit }, str ) {
        const result = getters.HUMANS.filter((human: Human) => human.fullName.toLowerCase().includes(str.toLowerCase()));
        commit(MutationTypes.SET_FILTERED_ELEMENTS, result)
    },
};
