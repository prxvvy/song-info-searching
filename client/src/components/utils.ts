import {ChangeEvent, FormEvent, useState} from "react";
import {Song} from "../api/Song";
import api from "../api/Api";

const handler = (f: Function) => {

    let song_name: string;

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { value } = target;
        song_name = value.toLowerCase().replace(" ", "-");
        /**
         * TODO: this mightn't work properly.
         */
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(song_name);
        f(song_name);
    };

    return { handleSubmit, handleChange };
};

const HomeState = () => {

    const [songName, setSongName] = useState("");
    const [songInfo, setSongInfo] = useState<Song>({});

    const getSongInfo = async () => {
        let response;
        try {
            response = await api.getSongInfo("getSong", songName);
            const { song_name, artist_name, album, genre } = response;
            setSongInfo({
                song_name,
                artist_name,
                album,
                genre
            });
        } catch (e) {
            console.log(e);
        }
    };

    const stateSetter = (song_name: string) => {
        setSongName(song_name);
        getSongInfo().catch((e: Error) => console.error(e));
    }

    return { songInfo, stateSetter };
};

type SearchBoxProps = {
    state_setter: Function;
};

type SongCardProps = {
    songInfo: Song;
};

export { handler, HomeState as useHoneState };
export type { SearchBoxProps, SongCardProps };
