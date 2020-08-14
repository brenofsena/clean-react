import { makeApiUrl } from '@/main/factories/http'
import { LoadSurveyList } from '@/domain/useCases'
import { RemoteLoadSurveyList } from '@/data/usecases'
import { makeAuthorizeHttpGetClientDecorator } from '@/main/factories/decorators'

export const makeRemoteLoadLoadSurveyList = (): LoadSurveyList => {
  return new RemoteLoadSurveyList(makeApiUrl('/surveys'), makeAuthorizeHttpGetClientDecorator())
}
