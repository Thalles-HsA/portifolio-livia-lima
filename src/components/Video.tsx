'use client'

import { useEffect, useRef } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

interface Props {
  videoUrl: string;
}

const VideoPlayer = ({ videoUrl }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const player = new Plyr(videoRef.current, {
        controls: ['play', 'progress', 'current-time', 'mute'],
      });

      return () => {
        player.destroy();
      };
    }
  }, []);

  return (
    <video ref={videoRef}  >
      <source src={videoUrl} type="video/mp4"/>
    </video>
  );
};

export default VideoPlayer;

