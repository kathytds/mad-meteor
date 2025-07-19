import React from 'react'
import type { Song } from '../types/song';
import './tarjetaCanciones.css';
import { $currentSong } from '../store';

interface Props {
    // Aquí puedes definir las propiedades que tu componente recibirá
    song: Song

}

export default function ({ song }: Props) {

    function handlerClick() {
        // Aqui adentro voy a escribir lo que va a suceder cuando se haga click en el botón
        $currentSong.set(song)
    }

    return (
        <div className='flex items-center p-4'>
            <div className='flex items-center p-4 gap-8'>
                <img src={song.image.url} alt="" className='w-16 h-16 rounded-full' />
                <div className='flex-1'>
                    <h3 className='font-bold'>{song.title}</h3>
                    <p className='opacity-60'>{song.author}</p>
                </div>
            </div>
            <button className='bg-red-200 p2 rounded-full font-bold p-3'
                onClick={handlerClick}
            >
                Play
            </button>
        </div>
    );
}