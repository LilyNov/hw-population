import { useState, useEffect } from "react";
import { fetchForHomePage } from '../../service/population-api'
import StatisticBar from '../../StatisticBar/StatisticBar'

const HomePage = () => {
const [statistic, setStatistic] = useState([])
    const [error, setError] = useState(null)
    const [status, setStatus] = useState("idle");

    useEffect(() => {
        setStatus('pending');
        fetchForHomePage().then(postStatistic => {
            console.log(postStatistic);
            setStatistic(postStatistic.data)
            setStatus("resolved")
        }).catch(error => {
            setError(error)
            setStatus("rejected")
        })
    }, [])

    return (
        <>
            {status === "pending" && <p>LOADER</p>}
            {status === "rejected" && <p>{error}</p>}
            {status === "resolved" && <StatisticBar statistic={ statistic}/>}
        </>
    )
}

export default HomePage