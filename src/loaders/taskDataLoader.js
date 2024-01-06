import { userStore } from '../store'
import { userDataLoader } from './userDataLoader'

export async function taskDataLoader() {
    await userDataLoader()
    return userStore.sortedTasks
}
