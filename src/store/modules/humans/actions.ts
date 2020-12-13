import { ActionTree, ActionContext } from 'vuex'
import { State } from './state'
import { Mutations } from './mutations'
import { ActionTypes } from './action-types'
import { MutationTypes } from './mutation-types'
import HumanDataService from '@/services/HumanDataService'
import {Human} from "@/types/Human";

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
    [ActionTypes.CREATE_USERS](
        { commit }: AugmentedActionContext,
        count: number,
    ): void
}

export const actions: ActionTree<State, State> & Actions = {
    [ActionTypes.CREATE_USERS]({ commit }, count) {
        HumanDataService
            .get(count)
            .then((res) => {
                const mappedHumans = res.data.results.map((data: any): Human => {
                    return {
                        id: data.id.value,
                        fullName: `${data.name.first} ${data.name.last}`,
                        city: data.location.city,
                        image: data.picture.large,
                        registered: data.registered.date
                    } as Human
                });
                commit(MutationTypes.SET_HUMANS, mappedHumans);
            })
            .catch((err) => console.error(err))
    },
};
