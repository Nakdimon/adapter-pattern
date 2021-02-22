import { Android } from './Android'

let C17;

beforeEach(() => {
    C17 = new Android();
})

describe('Android', () => {
    it('Can be instatiated', () => {
        expect(typeof C17 === 'object').toBe(true)
    })

    it('Can punch for 10 damage', () => {
        expect(C17.punch()).toEqual(10)
    })

    it('Can kick for less than 20 damage', () => {
        expect(C17.punch()).toBeLessThanOrEqual(20)
    })
})