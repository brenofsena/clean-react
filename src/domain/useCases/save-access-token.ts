export interface SaveAccesstoken {
  save: (accessToken: string) => Promise<void>
}
