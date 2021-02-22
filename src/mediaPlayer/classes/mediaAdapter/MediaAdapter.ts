import { IAdvancedMediaPlayer } from '../../interfaces/IAdvancedMediaPlayer';
import { IMediaPlayer } from '../../interfaces/IMediaPlayer';
import { VlcPlayer } from '../vlcPlayer/VlcPlayer';
import { Mp4Player } from '../mp4Player/Mp4Player';

export class MediaAdapter implements IMediaPlayer {
    public advancedMusicPlayer: IAdvancedMediaPlayer

    constructor(audioType: string) {
        if (audioType.toLowerCase() === "vlc") {
            this.advancedMusicPlayer = new VlcPlayer();

        } else if (audioType.toLowerCase() === "mp4") {
            this.advancedMusicPlayer = new Mp4Player();
        }
    }

    public play(audioType: string, fileName: string) {
        if (audioType.toLowerCase() === "vlc") {
            return this.advancedMusicPlayer.playVlc(fileName);
        }
        else if (audioType.toLowerCase() === "mp4") {
            return this.advancedMusicPlayer.playMp4(fileName);
        }
    }
}