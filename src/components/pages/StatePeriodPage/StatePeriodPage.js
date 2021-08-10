import { useState, useEffect } from "react";
import { fetchForStateYearPage } from '../../service/population-api'
import StatisticBar from '../../StatisticBar/StatisticBar'
import Loader from '../../Loader/Loader'
import style from '../StatePeriodPage/StatePeriodPage.module.css'

const StatePeriodPage = () => {
    const [statistic, setStatistic] = useState([])
    const [stateOfUSA, setStateOfUSA] = useState(null);
    const [stateOfYear, setStateOfYear] = useState(null);
    const [error, setError] = useState(null)
    const [status, setStatus] = useState("idle");
    let selectStateQueries = [];
    let selectYearQueries = []

    useEffect(() => {
        setStatus('pending');
        fetchForStateYearPage().then(postStatistic => {
            setStatistic(postStatistic.data)
            setStatus("resolved")
        }).catch(error => {
            setError(error)
            setStatus("rejected")
        })
    }, [])

    const handleStateOfUSAChange = (e) => {
          e.preventDefault()
          setStateOfUSA(e.currentTarget.value);
    };

    // selectQueries
    statistic.map(({State}) => selectStateQueries.includes(State) ? selectStateQueries : selectStateQueries.push(State))
    statistic.map(({ Year }) => selectYearQueries.includes(Year) ? selectYearQueries : selectYearQueries.push(Year))
    const newStatistic = statistic
        .filter(stat => stat.State === stateOfUSA && stat.Year === stateOfYear)
        .map(stat => stat.Population)

    return (
        <>
            {status === "pending" && <Loader />}
            {status === "rejected" && <p>{error}</p>}
            {status === "resolved" && (
                <form className={style.form}>
                <div className={style.selectWrapper}>
                    <p className={style.selectTitle}>Select State of USA</p>
                    <select className={style.selectBox}
                    onChange={handleStateOfUSAChange}>
                    <option value=""></option>
                    {selectStateQueries.map((State) => (
                    <option value={State} key={State}>
                        {State}
                    </option>
                    ))}
                    </select>
                    </div>
                    <div className={style.selectWrapper}>
                    <p className={style.selectTitle}>Select Year</p>
                    <select className={style.selectBox}
                    onChange={(e) => setStateOfYear(e.currentTarget.value)}>
                    <option value=""></option>
                    {selectYearQueries.map((Year) => (
                    <option value={Year} key={Year}>
                        {Year}
                    </option>
                    ))}
                    </select>
                </div>
                </form>
            )}
            {stateOfUSA && stateOfYear && <StatisticBar statistic={newStatistic} stateOfUSA={stateOfUSA} stateOfYear={ stateOfYear}/>}
            
        </>
    )
}

export default StatePeriodPage