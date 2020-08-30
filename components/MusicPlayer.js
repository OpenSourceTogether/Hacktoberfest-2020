import ReactPlayer from 'react-player'

export default function MusicPlayer({soundCloudUrl}) {
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
            url={soundCloudUrl}
        />
    )
}
