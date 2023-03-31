import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
  return (
    <div className='videoFooter'>
      <div className='videoFooter__text'>
        <h3>@pNathália Veneziano</h3>
        <p>Descrição do Vídeo</p>
        <div className='videoFooter__music'>
          <MusicNoteIcon className='videoFooetr__icon' />
          <div className='videoFooterMusic__text'>
            <p>Título da Música</p>
          </div>
        </div>
      </div>
      <img
        className='videoFooter__record'
        alt='Imagem de um vinil girando'
        src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png'
      />
    </div>
  );
}

export default VideoFooter;
