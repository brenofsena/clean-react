import React from 'react'
import { SurveyList } from '@/presentation/pages'
import { makeRemoteLoadLoadSurveyList } from '@/main/factories/usecases'

export const makeSurveyList: React.FC = () => {
  return (
    <SurveyList
      loadSurveyList={makeRemoteLoadLoadSurveyList()}
    />
  )
}
