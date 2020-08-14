import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'
import { AddAccount } from '@/domain/useCases'
import { RemoteAddAccount } from '@/data/usecases'

export const makeRemoteAddAccount = (): AddAccount => {
  return new RemoteAddAccount(makeApiUrl('/signup'), makeAxiosHttpClient())
}
