import styled from "styled-components";
import {stackData} from "../../data/stackData"
import {toolData} from "../../data/toolData"
import {studyingData} from "../../data/studyingData"

import { SkillDataState, SkillIdxState } from '../../atom/skillIcon';
import { useRecoilState } from 'recoil';

export function MyStack() {

    const [ , setSkillData] = useRecoilState(SkillDataState);
    const [ skillIdx, setSkillIdx ] = useRecoilState(SkillIdxState);

    const handelSkillIcon = (item,idx) => {
        setSkillData(item)
        setSkillIdx(idx)
    }

    return (
            <MyStackBox>
                <StackContent>
                <h2>STACK</h2>
                <ul className="icons-box">
                    {stackData.map((item,idx)=>(<li key={idx} className={`skill-icon ${
                skillIdx === item.index && `icon-click`
                }`} onClick={() => {handelSkillIcon(item,item.index)}}>{item.icon} {item.name}</li>))}
                </ul>
                </StackContent>

                <StackContent>
                <h2>TOOL</h2>
                <ul className="icons-box">
                    {toolData.map((item,idx)=>(<li key={idx} className={`skill-icon ${
                skillIdx === item.index && `icon-click`
                }`} onClick={() => {handelSkillIcon(item,item.index)}}>{item.icon} {item.name}</li>))}
                </ul>
                </StackContent>

                <StackContent>
                <h2>STUDYING</h2>
                <ul className="icons-box">
                    {studyingData.map((item,idx)=>(<li key={idx} className="skill-icon">{item.icon} {item.name}</li>))}
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
    overflow: hidden;
    min-width: 400px;

    @media (max-width: 1500px) {
        min-width: auto;
    }


    h2 {
        margin-bottom: 20px;
    }

    .icons-box {
        display: flex;
        flex-wrap: wrap;
    }

    
    .skill-icon{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.6rem;
        margin: 5px;
        text-transform: uppercase;
        padding: 0px 10px;
        height: 27px;
        letter-spacing: 1px;
        border-radius: 50px;
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
    
    .skill-icon:hover {
        color: var(--color-main-001);
    }
    
    .icon-click{
        border-color: var(--color-main-002);
        color: var(--color-main-001);
    }
    
`