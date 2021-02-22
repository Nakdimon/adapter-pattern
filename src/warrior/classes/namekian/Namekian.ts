import { IWarrior } from '../../interfaces/IWarrior';

export class Namekian implements IWarrior {
    public ATTACK_BASE = 50;
    public attack(): number {
        return Math.random() * 50 + this.ATTACK_BASE;
    }
}