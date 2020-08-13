import React from 'react'
import Styles from './survey-item-styles.scss'
import { Icon, IconName } from '@/presentation/components'

const SurveyItem: React.FC = () => {
  return (

    <li className={Styles.surveyItemWrap}>
      <div className={Styles.surveyContent}>
        <Icon className={Styles.iconWrap} iconName={IconName.thumbUp} />
        <time>
          <span className={Styles.day}>12</span>
          <span className={Styles.month}>08</span>
          <span className={Styles.year}>2020</span>
        </time>
        <p>Qual é seu framework web favorito?</p>
      </div>
      <a href="#">Ver Resultado</a>
    </li>
  )
}

export default SurveyItem
