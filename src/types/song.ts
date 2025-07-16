

export interface Song {
    _id: number
    title: string
    artist: string
    album: string
    author: string
    audio: File
    image: File

}

interface File {
    url: string
    id: string
    filename: string
}