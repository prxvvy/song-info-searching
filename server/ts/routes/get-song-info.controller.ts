import { Request, Response } from "express";
import itunesAPI = require("node-itunes-search");

const getSongInfoController = async (req: Request, res: Response): Promise<any> => {
    if (!req.params["song_name"]) return res.json({ success: false, message: "Need a song name." });
    const song_name: string = req.params["song_name"];
    const searchOptions: itunesAPI.ItunesSearchOptions = new itunesAPI.ItunesSearchOptions({
        term: song_name,
        limit: 1
    });
    try {
     const result: itunesAPI.ItunesResult = await itunesAPI.searchItunes(searchOptions);
     const song_ = result.results[0];
     if (!song_) return res.json({ success: false, message: `No song was found by that name, ${song_name} :(` });
        /**
         * can add whatever you want, see the package docs.
         */
     const song: Song = {
         song_name: song_.trackName,
         artist_name: song_.artistName,
         album: song_.collectionName,
         genre: song_.primaryGenreName
     };
     return res.send(song);
    } catch (error) {
        console.log(error);
    }
};

interface Song {
    song_name: string | undefined;
    artist_name: string | undefined;
    album: string | undefined;
    genre: string | undefined;
}

export = getSongInfoController;