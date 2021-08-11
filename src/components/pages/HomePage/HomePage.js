import { useState, useEffect } from "react";
import { fetchForHomePage } from '../../service/population-api'
import StatisticBar from '../../StatisticBar/StatisticBar'
import Loader from '../../Loader/Loader'

const HomePage = () => {
    const [statistic, setStatistic] = useState([])
    const [error, setError] = useState(null)
    const [status, setStatus] = useState("idle");
    let arrOfYear = []
    let arrOfPopulation = []

    useEffect(() => {
        setStatus('pending');
        fetchForHomePage().then(postStatistic => {
            setStatistic(postStatistic.data)
            setStatus("resolved")
        }).catch(error => {
            setError(error)
            setStatus("rejected")
        })
    }, [])

    // statistics 
        statistic.map(stat => {
        arrOfYear.push(stat.Year)
        arrOfPopulation.push(stat.Population)
        return {arrOfYear, arrOfPopulation}
    })

    return (
        <>
            {status === "pending" && <Loader />}
            {status === "rejected" && <p>{error}</p>}
            {status === "resolved" && <StatisticBar statistic={arrOfPopulation} stateOfUSA={null} stateOfYear={arrOfYear} maxY={2000000000}/>}
        </>
    )
}

export default HomePage