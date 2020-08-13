import { UpdateCurrentAccount } from '@/domain/useCases'
import { AccountModel } from '@/domain/models'

export class UpdateCurrentAccountMock implements UpdateCurrentAccount {
  account: AccountModel

  async save (account: AccountModel): Promise<void> {
    this.account = account
  }
}
