import { IWarrior } from '../../interfaces/IWarrior';

export class Saiyan implements IWarrior {
    public ATTACK_BASE = 100;
    public attack(): number {
        return Math.random() * 100 + this.ATTACK_BASE;
    }
}