import React from 'react'
import { render, screen } from '@testing-library/react'
import { Calendar } from '@/presentation/components'

const makeSut = (date: Date): void => {
  render(<Calendar date={date} />)
}

describe('Calendar Component', () => {
  test('Should render with correct values', () => {
    makeSut(new Date('2020-08-13T00:00:00'))
    expect(screen.getByTestId('day')).toHaveTextContent('13')
    expect(screen.getByTestId('month')).toHaveTextContent('ago')
    expect(screen.getByTestId('year')).toHaveTextContent('2020')
  })

  test('Should render with correct values', () => {
    makeSut(new Date('2019-05-03T00:00:00'))
    expect(screen.getByTestId('day')).toHaveTextContent('03')
    expect(screen.getByTestId('month')).toHaveTextContent('mai')
    expect(screen.getByTestId('year')).toHaveTextContent('2019')
  })
})
