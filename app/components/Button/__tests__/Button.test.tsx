import { render, screen } from '@testing-library/react'
import Button from '../Button'

describe('Button component', () => {

    it('should render button with provided text', () => {
        render(<Button text="Button To Test" type="button" />)

        const button = screen.getByText('Button To Test')

        expect(button).toBeInTheDocument()
    })

    it('should render button with correct type attribute', () => {
        render(<Button text="Submit button" type="submit" />)

        const button = screen.getByText('Submit button')

        expect(button).toHaveAttribute('type', 'submit')
    })

    it('should render button with default type if no type provided', () => {
        render(<Button text="Submit button" />)

        const button = screen.getByText('Submit button')

        expect(button).toHaveAttribute('type', 'button')
    })
})