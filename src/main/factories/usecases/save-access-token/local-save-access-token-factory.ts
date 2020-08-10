import { SaveAccesstoken } from '@/domain/useCases'
import { LocalSaveAccessToken } from '@/data/usecases/save-access-token/local-save-access-token'
import { makeLocalStorageAdapter } from '@/main/factories/cache/local-storage-adapater-factory'

export const makeLocalSaveAccessToken = (): SaveAccesstoken => {
  return new LocalSaveAccessToken(makeLocalStorageAdapter())
}
