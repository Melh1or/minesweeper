import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'

import {Reset} from './Reset'

describe('Reset button', function () {
  const ResetWithDummyHandler: React.FC = () => <Reset onReset={() => null} />

  it('should render element with default state', function () {
    render(<ResetWithDummyHandler />)
    expect(screen.getByText('🥺')).toBeInTheDocument()
  })
  it('should call onReset handler', function () {
    const onReset = jest.fn()
    render(<Reset onReset={onReset} />)
    const button = screen.getByText('🥺')
    fireEvent.click(button)
    expect(onReset).toBeCalled()
  })
  it('should change state when onMouseDown and onMouseLeave events happened', function () {
    render(<ResetWithDummyHandler />)

    fireEvent.mouseDown(screen.getByText('🥺'))
    expect(screen.getByText('😆️')).toBeInTheDocument()

    fireEvent.mouseLeave(screen.getByText('😆️'))
    expect(screen.getByText('🥺')).toBeInTheDocument()
  })
})
