import { IAdvancedMediaPlayer } from '../../interfaces/IAdvancedMediaPlayer';

export class VlcPlayer implements IAdvancedMediaPlayer {
    public playVlc(fileName: string) {
        return `Playing vlc file. ${fileName}`
    }

    public playMp4(fileName: string) {
    }
}