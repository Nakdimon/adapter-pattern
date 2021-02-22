import { IMediaPlayer } from '../../interfaces/IMediaPlayer';
import { MediaAdapter } from '../mediaAdapter/MediaAdapter';

export class AudioPlayer implements IMediaPlayer {
    public mediaAdapter: MediaAdapter;

    public play(audioType: string, fileName: string) {
        if (audioType.toLowerCase() === 'mp3') {
            return `Playing mp3 file. Name: ${fileName}`
        } else if (audioType.toLowerCase() === "vlc" || audioType.toLowerCase() === "mp4") {
            this.mediaAdapter = new MediaAdapter(audioType);
            return this.mediaAdapter.play(audioType, fileName)
        } else {
            return `Invalid media. ${audioType} format not supported`
        }
    }
}