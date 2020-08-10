import { LocalStorageAdapater } from './local-storage-adapter'
import faker from 'faker'
import 'jest-localstorage-mock'

describe('LocalStorageAdapater', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('Should call localStorage with correct values', async () => {
    const sut = new LocalStorageAdapater()
    const key = faker.database.column()
    const value = faker.random.word()
    await sut.set(key, value)
    expect(localStorage.setItem).toHaveBeenCalledWith(key, value)
  })
})
