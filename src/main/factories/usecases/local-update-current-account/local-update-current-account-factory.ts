import { UpdateCurrentAccount } from '@/domain/useCases'
import { LocalUpdateCurrentAccount } from '@/data/usecases/update-current-account/local-update-current-account'
import { makeLocalStorageAdapter } from '@/main/factories/cache/local-storage-adapater-factory'

export const makeLocalUpdateCurrentAccount = (): UpdateCurrentAccount => {
  return new LocalUpdateCurrentAccount(makeLocalStorageAdapter())
}
