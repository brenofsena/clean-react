import { AddAccount } from '@/domain/useCases'
import { mockAccountModel } from '@/domain/test'

export class AddAccountSpy implements AddAccount {
  account = mockAccountModel()
  params: AddAccount.Params
  callsCount = 0

  async add (params: AddAccount.Params): Promise<AddAccount.Model> {
    this.params = params
    this.callsCount++
    return this.account
  }
}
