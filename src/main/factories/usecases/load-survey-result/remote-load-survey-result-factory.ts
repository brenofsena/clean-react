import { makeApiUrl } from '@/main/factories/http'
import { LoadSurveyResult } from '@/domain/useCases'
import { RemoteLoadSurveyResult } from '@/data/usecases'
import { makeAuthorizeHttpGetClientDecorator } from '@/main/factories/decorators'

export const makeRemoteLoadSurveyResult = (id: string): LoadSurveyResult => {
  return new RemoteLoadSurveyResult(makeApiUrl(`/surveys/${id}/results`), makeAuthorizeHttpGetClientDecorator())
}
