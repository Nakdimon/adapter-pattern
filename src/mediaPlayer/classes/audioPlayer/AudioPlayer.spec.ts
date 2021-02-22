import { AndroidAdapter } from '../../../warrior/classes/androidAdapter/AndroidAdapter'
import { AudioPlayer } from './AudioPlayer'

let audioPlayer: AudioPlayer;

beforeEach(() => {
    audioPlayer = new AudioPlayer();
})

describe('Audio player should play audio.', () => {
    it('Should play mp3', () => {
        expect(audioPlayer.play('mp3', 'lofi hip hop')).toEqual('Playing mp3 file. Name: lofi hip hop')
    })
    it('Should play mp4', () => {
        expect(audioPlayer.play('mp4', 'lofi hip hop')).toEqual('Playing Mp4 file. lofi hip hop')
    })
    it('Should play vlc', () => {
        expect(audioPlayer.play('vlc', 'lofi hip hop')).toEqual('Playing vlc file. lofi hip hop')
    })
    it('Should handle unexpected formats', () => {
        expect(audioPlayer.play('tar', 'lofi hip hop')).toEqual('Invalid media. tar format not supported')
    })

})