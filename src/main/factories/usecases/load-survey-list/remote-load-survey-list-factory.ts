import { makeAxiosHttpClient } from '@/main/factories/http/axios-http-client-factory'
import { makeApiUrl } from '@/main/factories/http/api-url-factory'
import { LoadSurveyList } from '@/domain/useCases'
import { RemoteLoadSurveyList } from '@/data/usecases'

export const makeRemoteLoadLoadSurveyList = (): LoadSurveyList => {
  return new RemoteLoadSurveyList(makeApiUrl('/surveys'), makeAxiosHttpClient())
}
