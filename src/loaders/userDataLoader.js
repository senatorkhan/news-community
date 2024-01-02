import { userStore } from '../store'

export async function userDataLoader() {
    await userStore.fetch()
    return null
}
