import { Namekian } from './Namekian'
let picollo = new Namekian();

beforeEach(() => {
    picollo = new Namekian();
})

describe('Namkeians', () => {
    it('Can be instatiated', () => {
        expect(typeof picollo === 'object').toBe(true)
    })

    it('Attacks for less than 100', () => {
        expect(picollo.attack()).toBeLessThanOrEqual(100)
    })
})