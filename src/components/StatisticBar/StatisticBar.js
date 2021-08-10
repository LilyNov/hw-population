import PropTypes from "prop-types";
import {Bar} from 'react-chartjs-2';

const StatisticBar = ({ statistic }) => {
    let arrOfYear = []
    let arrOfPopulation = []
    console.log(statistic);
   
    statistic.map(stat => {
        arrOfYear.push(stat.Year)
        arrOfPopulation.push(stat.Population)
        return {arrOfYear, arrOfPopulation}
    })
    console.log(arrOfYear);
    console.log(arrOfPopulation);
    return (
        <div>
            <Bar
                height={400}
                width={400}
                data={{
                    labels: arrOfYear,
                    datasets: [{
                        label: 'Year&measures',
                        data: arrOfPopulation,
                        backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(180, 41, 71, 1)',
                        
                        ],
                        borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        ],
                        borderWidth: 1,
                    }]
                }}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                    y: {
                        max: 2000000
                        },
                    }
            }} />
        </div>
    )
}
StatisticBar.propTypes = {
  statistic: PropTypes.array
};
export default StatisticBar