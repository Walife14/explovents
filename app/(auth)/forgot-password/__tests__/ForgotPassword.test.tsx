import { fireEvent, render, screen } from '@testing-library/react'

import ForgotPassword from '../page'

jest.mock("next/navigation", () => ({
    useRouter() {
        return {
            prefetch: () => null
        }
    }
}))

describe('Forgot Password Page', () => {
    it('should display an error message whenever given email is invalid and the form is submitted', async () => {
        render(<ForgotPassword />)

        const emailInput = screen.getByPlaceholderText('Email Address')
        fireEvent.change(emailInput, { target: { value: 'test@emai' } })

        const submitButton = screen.getByRole('button', { name: 'Send' })
        fireEvent.click(submitButton)

        fireEvent.submit(emailInput)

        const errorMessage = await screen.findByText('Email is not valid!')
        expect(errorMessage).toBeInTheDocument()
    })
})