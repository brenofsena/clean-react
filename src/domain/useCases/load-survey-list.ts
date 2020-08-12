import { SurveyModel } from '@/domain/models'

export interface LoadSurveyLust {
  loadAll: () => Promise<SurveyModel[]>
}
