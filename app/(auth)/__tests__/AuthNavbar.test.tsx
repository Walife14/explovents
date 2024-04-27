import { render, screen } from '@testing-library/react'
import AuthNavbar from '@/app/(auth)/AuthNavbar'

describe("AuthNavbar", () => {
    it("should render logo with text Explovents", () => {
        // arrange
        render(<AuthNavbar />)

        // act
        const logo = screen.getByTestId('logo')

        // assert
        expect(logo).toBeInTheDocument()
        expect(logo).toHaveTextContent('Explovents')
    })
})