import { render, screen } from "@testing-library/react";

import Login from "../page";

describe('Login page', () => {
    it('Renders a link to the registration page', () => {
        render(<Login />)

        const registerLink = screen.getByText('Click here to register')

        expect(registerLink).toHaveAttribute('href', '/register')
    })
    it('Renders a link to forgot password page', () => {
        render(<Login />)

        const forgotPasswordLink = screen.getByText('Click here')

        expect(forgotPasswordLink).toHaveAttribute('href', '/forgot-password')
    })
})