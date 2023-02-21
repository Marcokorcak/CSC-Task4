import { useEffect, useState } from "react";


const SearchBar = ({search, setSearch, maxLength,setMaxLength, ascdesc, setascdesc, moviesCur, SetMoviesSort}) =>{
    const searchHandler = (e) =>{
        setSearch(e.target.value);
    }

    const maxLengthHandler = (e) => {
        setMaxLength(e.target.value);
    }

    const sortHandler = () => {
        if(ascdesc === 'ascending'){
            moviesCur.sort((a,b) => b.length - a.length);
            setascdesc('descending');
        }
        else {
            moviesCur.sort((a,b) => a.length - b.length);
            setascdesc('ascending');
        }
        SetMoviesSort(moviesCur);

    }
    return <>
        <label htmlFor = "search"> Search Query</label>
        <input type="text" name = "search" onChange = {searchHandler} vale= {search}/>
        <label htmlFor="max-length">Max Length</label>
        <input type="number" name = "max-length" onChange = {maxLengthHandler} value = {maxLength} />
        <button onClick = {sortHandler}> Sort:  {ascdesc}  </button>
    </>
}


export default SearchBar;