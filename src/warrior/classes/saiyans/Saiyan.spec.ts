import { Saiyan } from './Saiyan'

let kakarotto;

beforeEach(() => {
    kakarotto = new Saiyan();
})

describe('Saiyans', () => {
    it('Can be instatiated', () => {
        expect(typeof kakarotto === 'object').toBe(true)
    })

    it('Attacks for less than 200', () => {
        expect(kakarotto.attack()).toBeLessThanOrEqual(200)
    })
})