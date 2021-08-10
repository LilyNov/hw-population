import PropTypes from "prop-types";
import {Bar} from 'react-chartjs-2';

const StatisticBar = ({ statistic, stateOfUSA, stateOfYear, maxY }) => {

    return (
        <div>
            <Bar
                height={400}
                width={400}
                data={{
                    labels: stateOfYear,
                    datasets: [{
                        label: stateOfUSA || 'Year & Measures',
                        data: statistic,
                        backgroundColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(180, 41, 71, 1)',
                        ],
                        borderWidth: 1,
                    }]
                }}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                    y: {
                        max: maxY
                        },
                    }
            }} />
        </div>
    )
}

StatisticBar.propTypes = {
    statistic: PropTypes.array.isRequired,
    stateOfUSA: PropTypes.string,
    stateOfYear: PropTypes.string,
};

export default StatisticBar