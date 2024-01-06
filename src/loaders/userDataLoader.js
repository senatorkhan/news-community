import { userStore } from '../store'

export async function userDataLoader() {
    if (!userStore.loaded) {
        await userStore.fetch()
    }

    return null
}
