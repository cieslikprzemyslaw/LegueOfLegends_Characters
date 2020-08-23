import React, { useState } from 'react';
import {TextField} from '@material-ui/core'
import useStyles from './useStyles';

const Search = () => {
    const classes = useStyles();
    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <form className={classes.root}>
            <TextField id="outlined-basic" label="Search movie/series" variant="outlined" onChange={handleChange} value={search}/>
        </form>
    );
};

export default Search;