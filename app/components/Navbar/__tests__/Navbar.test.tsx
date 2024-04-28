import { screen, render } from '@testing-library/react'

import Navbar from '../Navbar'

describe('Navbar', () => {
    it('Should render the logo', () => {
        render(<Navbar />)

        const logo = screen.getByTestId('logo')

        expect(logo).toBeInTheDocument()
    })

    it('Should render in the login and register links', () => {
        render(<Navbar />)

        const loginLink = screen.getByRole<HTMLElement>('link', { name: 'Login' })
        expect(loginLink).toHaveAttribute('href', '/login')

        const registerLink = screen.getByRole<HTMLElement>('link', { name: 'Register' })
        expect(registerLink).toHaveAttribute('href', '/register')
    })
})