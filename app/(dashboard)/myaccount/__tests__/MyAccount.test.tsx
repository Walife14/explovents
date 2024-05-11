import { render, screen } from '@testing-library/react'
import MyAccount from '../page'

describe('My Account page', () => {
    it('should render my account text on page', () => {
        render(<MyAccount />)

        const headerText = screen.getByText('My Account')

        expect(headerText).toBeInTheDocument()
    })
})