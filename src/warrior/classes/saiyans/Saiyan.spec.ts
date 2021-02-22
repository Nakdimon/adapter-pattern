import { Saiyan } from './Saiyan'

describe('Saiyans', () => {
    it('Can be instatiated', () => {
        const kakarotto = new Saiyan();
        expect(typeof kakarotto === 'object').toBe(true)
    })
})