import { useState, useEffect } from "react";
import { fetchForStateYearPage } from '../../service/population-api'
import StatisticBar from '../../StatisticBar/StatisticBar'
import Loader from '../../Loader/Loader'
import style from '../StatePage/StatePage.module.css'

const StatePage = () => {
    const [statistic, setStatistic] = useState([])
    const [stateOfUSA, setStateOfUSA] = useState(null);
    const [error, setError] = useState(null)
    const [status, setStatus] = useState("idle");
    let selectStateQueries = [];
    let arrOfYear = []
    let arrOfPopulation = []

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
   

    const newStatistic = statistic.filter(stat =>  stat.State ===  stateOfUSA)
    newStatistic.map(stat => {
        arrOfYear.push(stat.Year)
        arrOfPopulation.push(stat.Population)
        return {arrOfYear, arrOfPopulation}
    })

    statistic.map(({State}) => selectStateQueries.includes(State) ? selectStateQueries : selectStateQueries.push(State))

    return (
        <>
            {status === "pending" && <Loader />}
            {status === "rejected" && <p>{error}</p>}
            {status === "resolved" && (
                <form>
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
                </form>
            )}
            {stateOfUSA  && <StatisticBar statistic={arrOfPopulation} stateOfUSA={stateOfUSA} stateOfYear={ arrOfYear} maxY={4500000}/>}
            
        </>
    )
}

export default StatePage