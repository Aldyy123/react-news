import React from 'react'
import { render } from '@testing-library/react'
import ListApp from '../views/ListApp'

describe('ListApp', () => {
  test('should render list cards', async () => {
    const list = render(
      <ListApp/>
    )
    const row = list.getByTestId('row')
    expect(row).toContainElement(document.querySelector('.row'))
  })
})
