import { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addTransaction } from "../redux/transactionSlice";

function Tracker(){

    const [data, setData] = useState({
        type: "Income"
    });

    const dispatch = useDispatch();

    function handleInput(e){
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(addTransaction(data));
    }

    const ifIncome = ["Salary", "Gifts", "Refunds", "Other"];
    const ifExpense = ["Food & Drinks", "Shopping", "Housing", "Bills", "Vehicle & Transport", "Lifestyle"];

    return (
        <Container>
            <form onSubmit={e=>handleSubmit(e)}>
                <h1>Add Transaction</h1>
                <select onChange={(e)=>handleInput(e)} name="type" placeholder="Type">
                    <option value="Income" defaultChecked>Income</option>
                    <option value="Expense">Expense</option>
                </select>
                <select onChange={(e)=>handleInput(e)} name="category" placeholder="Category">
                    {
                        data.type=="Income"?
                            // if Income
                            ifIncome.map((ele, idx)=>{
                                return(
                                    <option value={ele} defaultChecked={idx==0}>{ele}</option>
                                );
                            }):
                            // if Expense
                            ifExpense.map((ele, idx)=>{
                                return(
                                    <option value={ele} defaultChecked={idx==0}>{ele}</option>
                                );
                            })
                    }
                </select>
                <input onChange={(e)=>handleInput(e)} name="amount" type="number" placeholder="Amount" />
                <input onChange={(e)=>handleInput(e)} name="date" type="date" placeholder="Date" />
                <input type="submit" value="Create"/>
            </form>
        </Container>
    );
}

const Container = styled.div`
    width: 90%;
    max-width: 250px;
    margin: auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &>form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        gap: 5px;
        padding: 10px;

        &>h1{
            margin: 0;
            text-align: center;
            margin-bottom: 10px;
        }

        &>input, select{
            padding: 5px 10px;
            border: 1px solid black;

            &[type="submit"]{
                background-color: black;
                color: white;
                transition: 0.2s all;
                border: 1px solid black;

                &:hover{
                    background-color: white;
                    color: black;
                }
            }
        }
    }
`;

export default Tracker;