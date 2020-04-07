import React, {useContext,useEffect, useState} from 'react'
import { DataContext } from './../context/Data';
import { WithContext as ReactTags } from 'react-tag-input';

function Search() {
    const {search,setsearch} = useContext(DataContext)
    const [tags, settags] = useState([])
    const delimiters = [188, 13];
    const stringmaker = (currentstr, addingstr,index,sourceArray) => {
        if(index==1){
            return currentstr.text +"|"+ addingstr.text;
        }else{
            return currentstr +"|"+ addingstr.text;
        }
        
    }

    useEffect(() => {
        if(tags.length==0){
            setsearch("")
        }
        if(tags.length==1){
            setsearch(tags[0].text)
        }
        if(tags.length>1){
            setsearch(tags.reduce(stringmaker))
        }
    }, [tags])

    const handleRemoveTag=(i)=>{
        settags( tags.filter((tag, index) => index !== i))
    }
    const handleAdditionTag=(tag)=> {
        settags([...tags, tag]);
    }

    return (
        <div className="search">
             <div className="container">
             <div className="input-group">
            {/* <input onChange={(e)=>setsearch(e.target.value)}  className="form-control mr-sm-2" type="search" placeholder="Search Country"></input> */}
            <ReactTags tags={tags}
                    delimiters={delimiters}
                    handleDelete={handleRemoveTag}
                    handleAddition={handleAdditionTag}
                    inline={true}
                    placeholder="Filter countries"
                    autofocus={true}
                     />
            </div>
             </div>
        </div>
    )
}

export default Search
