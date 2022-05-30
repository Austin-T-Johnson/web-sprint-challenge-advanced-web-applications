// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from 'react'
import { render, userEvent, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Spinner from './Spinner'
test('sanity', () => {
  expect(true).toBe(true)
})


test('renders without errors', () => {
render(<Spinner />)
})

test('renders Spinner text', () => {
    render(<Spinner on={true} />)

    const wait = screen.queryByText(/Please wait.../i)
    expect(wait).toBeInTheDocument()
    
})

test('spinner text does not render', () => {
    render(<Spinner on={false} />)
    const waitText = screen.queryByText(/Please wait.../i)
    expect(waitText).not.toBeInTheDocument()
})