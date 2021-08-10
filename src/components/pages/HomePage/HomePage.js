import { useState, useEffect } from "react";
import { fetchForHomePage } from '../../service/population-api'
import HomeStatisticBar from '../../HomeStatisticBar/HomeStatisticBar'
import Loader from '../../Loader/Loader'

const HomePage = () => {
    const [statistic, setStatistic] = useState([])
    const [error, setError] = useState(null)
    const [status, setStatus] = useState("idle");

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

    return (
        <>
            {status === "pending" && <Loader />}
            {status === "rejected" && <p>{error}</p>}
            {status === "resolved" && <HomeStatisticBar statistic={ statistic}/>}
        </>
    )
}

export default HomePage