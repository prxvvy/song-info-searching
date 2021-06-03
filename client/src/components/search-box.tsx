import React, {FC} from "react";
import {Form} from "react-bootstrap";
import {handler, SearchBoxProps} from "./utils";

const SearchBox: FC<SearchBoxProps> = ({ state_setter }): JSX.Element => {

    const { handleSubmit, handleChange } = handler(state_setter);

    return (
        <Form
            onSubmit={handleSubmit}
            inline
        >
            <Form.Control
                type="text"
                onChange={handleChange}
                placeholder="Song name"
                autoFocus
            />
        </Form>
    );
};

export default SearchBox;