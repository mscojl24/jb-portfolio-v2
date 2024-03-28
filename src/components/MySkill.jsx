import styled from "styled-components";
import { MyProfile } from "../components/myinfo/MyProfile"
import { MyStack } from '../components/myinfo/MyStack'
import { SkillData } from '../components/myinfo/SkillData'

export function MySkill() {
  return (
    <MyskillBox>
        <MyProfile />
        <MyStack />
        <SkillData />
    </MyskillBox>
  );
}


const MyskillBox = styled.div`
    display: flex;
    width: 100%;

    > article {
        overflow: hidden;
    }

    @keyframes OpenAni {
        100%{
            width: 100%;
        }
    }

    @media (max-width: 1050px) {
        height: 100%;
        flex-wrap: wrap;

        > article{
        border: none;
        }
    }


`
