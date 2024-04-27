import { render, screen } from '@testing-library/react'

import Register from '../page'

describe('Register page', () => {
    it('renders link to login page', () => {
        render(<Register />)

        const loginLink = screen.getByRole('link', { name: 'Click here to login' })

        expect(loginLink).toBeInTheDocument()
    })
})