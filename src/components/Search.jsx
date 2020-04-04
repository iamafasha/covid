import React, {useContext} from 'react'
import { DataContext } from './../context/Data';

function Search() {
    const {setsearch} = useContext(DataContext)
    return (
        <div className="search">
             <div className="container">
             <div className="input-group">
            <input onChange={(e)=>setsearch(e.target.value)}  className="form-control mr-sm-2" type="search" placeholder="Search Country"></input>
            </div>
             </div>
        </div>
    )
}

export default Search
