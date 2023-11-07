import { render } from '@testing-library/react'
import Box, { type Props } from './Box'
import { type FC } from 'react'

it('renders correctly', () => {
  const { getByText } = render(<Box>Box</Box>)
  expect(getByText('Box')).toBeInTheDocument()
})

const renderComponent = function <T>(Component: FC<any>, config: T) {
  return (props: T) => render(<Component {...config} {...props} />)
}

const renderBox = renderComponent<Props>(Box, { children: 'Box' })

it('renders with the right padding, margin', () => {
  const { getByText } = render(<Box p={10} m={10}>Box</Box>)
  expect(getByText('Box')).toHaveStyle('padding: 10px; margin: 10px;')
})

it('renders with the right background color', () => {
  const { getByText } = render(<Box bg="red">Box</Box>)
  expect(getByText('Box')).toHaveStyle('background-color: red;')
})

it('renders with the right color', () => {
  const { getByText } = render(<Box color="red">Box</Box>)
  expect(getByText('Box')).toHaveStyle('color: red;')
})

it('renders with the right dimensions', () => {
  const { getByText } = renderBox({ width: '100%', height: '100%' })
  expect(getByText('Box')).toHaveStyle('width: 100%; height: 100%;')
})
