import { IAdvancedMediaPlayer } from '../../interfaces/IAdvancedMediaPlayer';

export class Mp4Player implements IAdvancedMediaPlayer {
    public playVlc(fileName: string) {
    }

    public playMp4(fileName: string) {
        return `Playing Mp4 file. ${fileName}`

    }
}