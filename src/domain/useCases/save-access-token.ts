export interface SaveAccesstoken {
  save: (accesstoken: string) => Promise<void>
}
