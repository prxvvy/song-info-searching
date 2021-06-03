import React, {FC} from "react";
import {SongCardProps} from "./utils";
import {Card} from "react-bootstrap";

const Song: FC<SongCardProps> = ({ songInfo }): JSX.Element => {

    const { song_name, artist_name, album, genre } = songInfo;

    return (
        <Card>
            <Card.Header>Song information</Card.Header>
            <Card.Body>
                <Card.Title>{song_name}</Card.Title>
                {artist_name}
                {album}
                {genre}
            </Card.Body>
        </Card>
    );
};

export default Song;