import { AddAcount, AddAcountParams } from '@/domain/useCases'
import { AccountModel } from '@/domain/models'
import { HttpPostClient } from '@/data/protocols/http'

export class RemoteAddAccount implements AddAcount {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AddAcountParams, AccountModel>
  ) {}

  async add (params: AddAcountParams): Promise<AccountModel> {
    await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    return null
  }
}
