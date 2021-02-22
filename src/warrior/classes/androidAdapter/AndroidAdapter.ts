import { IWarrior } from '../../interfaces/IWarrior'
import { Android } from '../android/Android'

export class AndroidAdapter implements IWarrior {
    constructor(private android: Android) { }

    public ATTACK_BASE = 50;
    public attack(): number {
        return this.android.kick() + this.android.punch() + this.ATTACK_BASE;
    }

}