import { Human } from '@/types/Human';

export const state = {
    humans: [] as Human[],
}

export type State = typeof state
