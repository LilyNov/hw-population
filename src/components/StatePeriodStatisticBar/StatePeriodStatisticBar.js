import PropTypes from "prop-types";
import {Bar} from 'react-chartjs-2';

const StatePeriodStatisticBar = ({ statistic, stateOfUSA, stateOfYear }) => {

    const newStatistic = statistic
        .filter(stat => stat.State === stateOfUSA && stat.Year === stateOfYear)
        .map(stat => stat.Population)

    return (
        <div>
            <Bar
                height={400}
                width={400}
                data={{
                    labels: [stateOfYear],
                    datasets: [{
                        label: stateOfUSA,
                        data: newStatistic,
                        backgroundColor: [
                        'rgba(54, 162, 235, 1)',
                        ],
                        borderWidth: 1,
                    }]
                }}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                    y: {
                        max: 10000000
                        },
                    }
            }} />
        </div>
    )
}

StatePeriodStatisticBar.propTypes = {
    statistic: PropTypes.array.isRequired,
    stateOfUSA: PropTypes.string.isRequired,
    stateOfYear: PropTypes.string.isRequired,
};

export default StatePeriodStatisticBar