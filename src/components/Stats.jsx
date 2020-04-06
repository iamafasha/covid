import React, {useContext} from 'react'
import { DataContext } from './../context/Data';
import CountryStats from './CountryStats';

function Stats() {
     const { coviddata , search,covidloader } = useContext(DataContext) ;
     let re;
     try {
        re=new RegExp(search,"gi")
     } catch (error) {
        re=new RegExp("","gi")
     }
     let x;
     if(covidloader===true){
        x=<div>
            loading
        </div>
     }  
    return (
        <div className="stats">
            <div className="covid-countries">
                <div className="wrapper">
                {x}
                {
                    coviddata.filter(data=>data.country.match(re)&&data.country!="All").sort((data1,data2)=>(data1.cases.total < data2.cases.total)?1:-1).map((data,index)=>{
                        return <CountryStats key={index} data={data} />
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Stats
