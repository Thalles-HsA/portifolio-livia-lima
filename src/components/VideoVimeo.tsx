import React, { useEffect, useRef } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

interface Props {
  videoId: string;
}

const VimeoVideo = ({ videoId }: Props) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
    const player = new Plyr(videoRef.current, {
      // Configurações opcionais do Plyr
      // Por exemplo, para desativar controles em tela cheia:
      fullscreen: { enabled: false }
    });

    return () => {
      player.destroy(); // Limpar o player Plyr quando o componente for desmontado
    };
  }
  }, []);

  return (
    <div ref={videoRef}>
      <iframe
        src={`https://player.vimeo.com/video/${videoId}`}
        width="250px"
        allow="autoplay; fullscreen"
      ></iframe>
    </div>
  );
};

export default VimeoVideo;
