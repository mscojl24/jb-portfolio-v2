import styled from "styled-components";
import {stackData} from "../../data/stackData"
import {toolData} from "../../data/toolData"
import {studyingData} from "../../data/studyingData"

export function MyStack() {


    return (
            <MyStackBox>
                <StackContent>
                <h2>STACK</h2>
                <ul className="icons-box">
                    {stackData.map((item,idx)=>(<li>{item.icon} {item.name}</li>))}
                </ul>
                </StackContent>

                <StackContent>
                <h2>TOOL</h2>
                <ul className="icons-box">
                    {toolData.map((item,idx)=>(<li>{item.icon} {item.name}</li>))}
                </ul>
                </StackContent>

                <StackContent>
                <h2>STUDYING</h2>
                <ul className="icons-box">
                    {studyingData.map((item,idx)=>(<li>{item.icon} {item.name}</li>))}
                </ul>
                </StackContent>
            </MyStackBox>
    );
}

const MyStackBox = styled.article`
    width: 0%;
    border-right: 1px solid var(--color-main-003);
    background-color: rgba(0,0,0,0.4);
    animation: OpenAni 1s forwards 1s;

`

const StackContent = styled.div`
    margin: 70px;

    h2 {
        margin-bottom: 20px;
    }

    .icons-box {
        display: flex;
        flex-wrap: wrap;
    }

    .icons-box> li{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.7rem;
        margin: 5px;
        text-transform: uppercase;
        padding: 0px 10px;
        height: 27px;
        letter-spacing: 1px;
        border-radius: 5px;
        color: #727272;
        font-family: 'GmarketM';
        border: 1px solid var(--color-main-003);
        background-color: #212121;
        cursor: pointer;
        transition: all ease-in-out 0.3s;

        >* {
            margin: 0px 5px;
        }
    }

    .icons-box> li:hover {
        border-color: var(--color-main-002);
        color: var(--color-main-001);
    }

`