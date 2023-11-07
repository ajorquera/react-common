import React from 'react'
import Card from './Card'

import { render } from '@testing-library/react'

test('should render component', () => {
  const { container } = render(<Card>My card</Card>)

  expect(container).toMatchSnapshot()
})
