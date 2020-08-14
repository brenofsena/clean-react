import React from 'react'
import Styles from './item-styles.scss'
import { Icon, IconName, Calendar } from '@/presentation/components'
import { LoadSurveyList } from '@/domain/useCases'

type Props = {
  survey: LoadSurveyList.Model
}

const SurveyItem: React.FC<Props> = ({ survey }: Props) => {
  const iconName = survey.didAnswer ? IconName.thumbUp : IconName.thumbDown

  return (
    <li className={Styles.surveyItemWrap}>
      <div className={Styles.surveyContent}>
        <Icon className={Styles.iconWrap} iconName={iconName} />
        <Calendar className={Styles.calendarWrap} date={survey.date} />
        <p data-testid="question">{survey.question}</p>
      </div>
      <a href="#">Ver Resultado</a>
    </li>
  )
}

export default SurveyItem
