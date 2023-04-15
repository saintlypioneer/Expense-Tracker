import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function Analytics(props) {

    const data = useSelector(state => state.transactions.transactions);
    console.log(data);

    const groupBy = (array, key) => {
        return array.reduce((result, item) => {
            (result[item[key]] = result[item[key]] || []).push(item);
            return result;
        }, {});
    };

    const calculateTotal = (array, key) => {
        return array.reduce((result, item) => {
            return result + parseFloat(item[key]);
        }, 0);
    };

    const groupDataByTypeAndCategory = (data) => {
        const groupedByType = groupBy(data, 'type');
        const result = {};
        for (let type in groupedByType) {
            const groupedByCategory = groupBy(groupedByType[type], 'category');
            const chartData = {
                labels: Object.keys(groupedByCategory),
                datasets: [
                    {
                        label: 'Amount',
                        data: Object.values(groupedByCategory).map((d) => calculateTotal(d, 'amount')),
                        backgroundColor: [
                            '#FF6384',
                            '#36A2EB',
                            '#FFCE56',
                            '#4BC0C0',
                            '#9966FF',
                            '#FFA500',
                            '#00FF7F',
                            '#FA8072',
                            '#808000',
                            '#483D8B'
                        ]
                    }
                ]
            };
            result[type] = chartData;
        }
        return result;
    };

    const chartData = groupDataByTypeAndCategory(data);

    return (
        <Container>
            <div>
                {Object.keys(chartData).map((type, index) => (
                    <div key={index}>
                        <h3>{type} chart</h3>
                        {/* <Pie data={chartData[type]} /> */}
                    </div>
                ))}
            </div>
        </Container>
    );
}

const Container = styled.div`
    
    &>div{
        display: flex;
    }
`;

export default Analytics;