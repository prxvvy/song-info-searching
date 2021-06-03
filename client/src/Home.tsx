import React, {FC} from "react";
import SearchBox from "./components/search-box";
import {useHoneState} from "./components/utils";
import { Container } from "react-bootstrap";
import Song from "./components/Song";

const Home: FC = (): JSX.Element => {

    const { stateSetter, songInfo } = useHoneState();

    return (
        <div className="text-center">
            <Container>
                <SearchBox state_setter={stateSetter} />
                <Song songInfo={songInfo} />
            </Container>
            {songInfo.song_name}
        </div>
    );
};

export default Home;