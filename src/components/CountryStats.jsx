import React from 'react'

function CountryStats({data}) {
    return (
        <div className="country">
                        <div className="country-wrapper">
                        <h4 className="country-name">{data.country}</h4>
                        <div className="data">
                            <ul>
                                <li className="card text-white bg-primary mb-3 total">
                                    <h6>TOTAL</h6>
                                    <h3>{data.cases.total}</h3>
                                </li>
                            <li className="card text-white bg-warning mb-3 critical">
                                <h6>CRITICAL</h6>
                                <h3>{data.cases.critical}</h3>
                            </li>
                            <li className="card text-white bg-secondary mb-3  active">
                                <h6>ACTIVE</h6>
                                <h3>{data.cases.active}</h3>
                            </li>
                            <li className="card text-white bg-success mb-3  active">
                                <h6>RECOVERED</h6>
                                <h3>{data.cases.recovered}</h3>
                            </li>
                            <li className="card text-white bg-danger mb-3  deaths">
                                <h6>Deaths</h6>
                                <h3>{data.deaths.total}</h3>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
    )
}

export default CountryStats
