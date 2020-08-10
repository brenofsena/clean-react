import { AddAcountParams } from '@/domain/useCases'
import faker from 'faker'

export const mockAddAccountParams = (): AddAcountParams => {
  const password = faker.internet.password()

  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password,
    passwordConfirmation: password
  }
}
