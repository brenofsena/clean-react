import { SetStorage } from '@/data/protocols/cache/set-storage'

export class LocalStorageAdapater implements SetStorage {
  set (key: string, value: object): void {
    localStorage.setItem(key, JSON.stringify(value))
  }
}
