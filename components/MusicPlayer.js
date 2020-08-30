import ReactPlayer from 'react-player'

export default function MusicPlayer() {
    return (
        <ReactPlayer
            config={{
                soundcloud: {
                    options: {
                        auto_play: true
                    }
                }
            }}
            width="100%"
            height="100%"
            volume={1}
            url='https://soundcloud.com/nocopyrightsounds/cartoon-howling-ft-asena-ncs-release'
        />
    )
}
