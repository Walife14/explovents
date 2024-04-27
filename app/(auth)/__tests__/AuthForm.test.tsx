import { render, screen } from '@testing-library/react'
import AuthForm from '@/app/(auth)/AuthForm'

describe('AuthForm Component', () => {

    // login load tests
    it('renders with provided props', () => {
        const handleSubmit = jest.fn()
        render(<AuthForm isRegister={false} handleSubmit={handleSubmit} />)

        const header = screen.getByRole('heading')
        expect(header).toHaveTextContent('Login')

        const emailInput = screen.getByPlaceholderText('Email Address')
        expect(emailInput).toBeInTheDocument()

        const passwordInput = screen.getByPlaceholderText('Password')
        expect(passwordInput).toBeInTheDocument()

        const confirmPasswordInput = screen.queryByPlaceholderText('Confirm Password')
        expect(confirmPasswordInput).not.toBeInTheDocument()
    })

    // register load tests
    it('should render confirm password if isRegister is true', () => {
        const handleSubmit = jest.fn()
        render(<AuthForm isRegister={true} handleSubmit={handleSubmit} />)

        const header = screen.getByRole('heading')
        expect(header).toHaveTextContent('Register')

        const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password')
        expect(confirmPasswordInput).toBeInTheDocument()
    })
})