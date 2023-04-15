import { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/userSlice";
import { Navigate } from "react-router-dom";

function Signup(){

    const [data, setData] = useState({});
    const dispatch = useDispatch();
    const {isWrongCredentials, isLoggedin} = useSelector(state => state.user);

    if (isLoggedin){
        return(<Navigate to='/dashboard' />);
    }

    function handleInput(e){
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e){
        e.preventDefault();
        dispatch(addUser(data));
    }

    return (
        <Container>
            <form onSubmit={e=>handleSubmit(e)}>
                <h1>Signup</h1>
                <input onChange={(e)=>handleInput(e)} name="fullname" type="text" placeholder="full name" required/>
                <input value={data.email || "a@b.c"} onChange={(e)=>handleInput(e)} name="email" type="email" placeholder="Email" required/>
                <input onChange={(e)=>handleInput(e)} name="password" type="password" placeholder="Password" required/>
                <input type="submit" value="Signup"/>
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

        &>input{
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

export default Signup;