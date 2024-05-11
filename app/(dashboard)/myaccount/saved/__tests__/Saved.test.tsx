import { render, screen } from '@testing-library/react'
import Saved from '../page'

jest.mock("next/navigation", () => ({
    useRouter() {
        return {
            prefetch: () => null
        }
    }
}))

describe('Saved events page', () => {
    it('should render saved events text', () => {
        render(<Saved />)

        const savedText = screen.getByText('Saved Events')

        expect(savedText).toBeInTheDocument()
    })
})