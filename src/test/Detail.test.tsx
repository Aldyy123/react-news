import React from 'react'
import { render } from '@testing-library/react'
import Detail from '../views/Detail'

describe('Detail', () => {
  test('should when props undefined', () => {
    const detail = render(<Detail location />)
    expect(detail.getByText('Maaf tidak ada data')).toHaveTextContent(
      'Maaf tidak ada data',
    )
  })
})
