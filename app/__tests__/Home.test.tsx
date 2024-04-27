// testing library
import { render, screen } from '@testing-library/react'

// component to be tested
import Home from '@/app/page'

describe('Home Page', () => {
    it('Header with text Home Page', () => {

        render(<Home />)

        const header = screen.getByRole('heading')

        expect(header).toHaveTextContent('Home Page')
    })
})