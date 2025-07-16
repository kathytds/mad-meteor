import { atom } from 'nanostores';
import type { Song } from './types/song';


export const $currentSong = atom<null | Song>(null)