import { SaveAccesstoken } from '@/domain/useCases'

export class SaveAccessTokenMock implements SaveAccesstoken {
  accessToken: string

  async save (accessToken: string): Promise<void> {
    this.accessToken = accessToken
  }
}
