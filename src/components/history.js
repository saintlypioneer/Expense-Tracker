import styled from "styled-components";
import { useSelector } from "react-redux";

function History(props) {

    const data = useSelector(state => state.transactions.transactions);

    return (
        <Container>
            <h1>History</h1>
            <Table>
                {
                    data.map((elem, idx) => {
                        return (
                            <card>
                                <left>
                                    <span>{elem.category}</span>
                                    <span>{elem.date}</span>
                                    <span>{elem.type}</span>
                                </left>
                                <right>
                                    {elem.amount}
                                </right>
                            </card>
                        );
                    })
                }
            </Table>
        </Container>
    );
}

const Container = styled.div`

    h1{
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 10px
    }
`;

const Table = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 350px;
    gap: 10px;

    card{
        display: flex;
        justify-content: space-between;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 10px;

        left{
            display: flex;
            flex-direction: column;
            align-items: start;
        }

        right{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }
`;

export default History;