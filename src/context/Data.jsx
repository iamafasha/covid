import React, { createContext, useEffect, useState }from 'react'

export const DataContext = createContext()

function Data(props) {
    const [coviddata, setcoviddata] = useState([])
    const [covidloader, setCovidloader]=useState(true)
    const [search, setsearch] = useState("")
    const formatNumber=(num)=>{
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      }
    useEffect(() => {
        //Covid Stat
        const myHeaders = new Headers();
        myHeaders.append("x-rapidapi-host", "covid-193.p.rapidapi.com");
        myHeaders.append("x-rapidapi-key", "70b9825a6emsh27f87794c3f587bp1241cbjsnecc3db1fc5a5");

        const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };
        setCovidloader(true);
        const temp_data=JSON.parse(localStorage.getItem('covid_data'));
        fetch("https://covid-193.p.rapidapi.com/statistics", requestOptions)
        .then(response => response.json())
        .then(result => {
            setcoviddata([...result.response])
            setCovidloader(false);
            localStorage.setItem('covid_data', JSON.stringify(result.response));
        })
        .catch(error => {
            console.log('error', error)
            if(temp_data==null||temp_data==[]){
                setCovidloader(undefined);
            }else{
                setcoviddata(JSON.parse(localStorage.getItem('covid_data')))
                alert('This data might not be upto date...Connect to internet')
            }
        });
    },[])
    return (
    <DataContext.Provider value={{formatNumber, coviddata, search, setsearch,covidloader, setCovidloader }} >{props.children}</DataContext.Provider>
    )
}
export default Data
