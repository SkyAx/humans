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
}

export const actions: ActionTree<State, State> & Actions = {
    async [ActionTypes.CREATE_USERS]({ commit, dispatch }, count) {
        await HumanDataService
            .get(count)
            .then((res) => {
                const randomNumber = Math.floor(Math.random() * (80 + 1));
                const randomFriends = res.data.results.length ? [...res.data.results.slice(randomNumber, randomNumber + 10)] : [];
                const mappedHumans = res.data.results.length ? res.data.results.map((data: any): Human => {
                    return {
                        id: data.id.value,
                        fullName: `${data.name.first} ${data.name.last}`,
                        city: data.location.city,
                        image: data.picture.large,
                        registered: data.registered.date,
                        friends: randomFriends,
                    } as Human
                }) : [] as Human[];
                commit(MutationTypes.SET_HUMANS, mappedHumans);
                dispatch(ActionTypes.UPDATE_USER_FRIENDS);
            })
            .catch((err) => console.error(err))
    },
};
