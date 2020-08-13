import { SetStorage } from '@/data/protocols/cache/set-storage'

export class LocalStorageAdapater implements SetStorage {
  set (key: string, value: any): void {
    localStorage.setItem(key, value)
  }
}
