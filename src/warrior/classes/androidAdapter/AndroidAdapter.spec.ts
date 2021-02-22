import { Android } from '../android/Android';
import { AndroidAdapter } from './AndroidAdapter';

let C17;
let warriorC17;

beforeEach(() => {
    C17 = new Android;
    warriorC17 = new AndroidAdapter(C17);
})

describe('Android Adapter makes C17 a warrior compliant class', () => {
    it('Should have attack base', () => {
        expect(warriorC17.ATTACK_BASE).toEqual(50)
    })

    it('Should have an attack move', () => {
        expect(warriorC17.attack()).toBeLessThanOrEqual(80)
    })
})