import React, {useContext} from 'react'
import { DataContext } from './../context/Data';
import CountryStats from './CountryStats';
import Search from './Search';

function Stats() {
     const { coviddata , search,covidloader } = useContext(DataContext) ;
     const re=new RegExp(search,"gi")
     let x;
     if(covidloader===true){
        x=<div>
            loading
        </div>
     }  
    return (
        <div className="stats">
            <Search />
            <div className="covid-countries">
                <div className="wrapper">
                {x}
                {
                    coviddata.filter(data=>data.country.match(re)).map((data,index)=>{
                        return <CountryStats key={index} data={data} />
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Stats
