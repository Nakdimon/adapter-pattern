export class Android {
    public punch = (): number => 10;

    public kick = (): number => Math.random() * this.punch() + this.punch();
}