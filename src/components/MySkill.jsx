import styled from "styled-components";


export function MySkill() {
  return (
        <MyskillBox>
            <MyProfile>
                <p className="sub-text">Hellow! I’m jubee</p>
                <p className="sub-text2">상상력을 자극하는 디자이너 & 개발자</p>
                <h1 className="my-name">김주비</h1>
                <ul>
                    <li>생년월일</li>
                    <li>1994.04.14</li>
                    <li>전화번호</li>
                    <li>+82 010.6818.0600</li>
                    <li>kakao</li>
                    <li>mscojl24</li>
                    <li>Email</li>
                    <li>kimjubee@gmail.com</li>
                    <li>자격증</li>
                    <li>웹디자인기능사 <br/>GTQ 1급 <br/>2종보통 운전면허</li>
                </ul>
            </MyProfile>
            <MyStack></MyStack>
            <SkillData></SkillData>
        </MyskillBox>
  );
}


const MyskillBox = styled.div`
    display: flex;
    width: 100%;
    height: calc(100% - 160px);

    > article {
        overflow: hidden;
    }

    @keyframes OpenAni {
        100%{
            width: 100%;
        }
    }

`

const MyProfile = styled.article`
    width: 0%;
    border-right: 1px solid var(--color-main-003);
    animation: OpenAni 1s forwards;
    padding: 70px 0px 0px 70px;

    .sub-text {
        font-family: "Homemade Apple";
        color: var(--color-sub-002);
        margin-bottom: 30px;
    }

    .sub-text2 {
        color: var(--color-main-002);
        margin-bottom: 20px;
    }

    h1{
        font-size: 3.5rem;
        font-family: 'GmarketM';
        margin-bottom: 50px;
    }

    ul{
        display: flex;
        flex-wrap :wrap;
        width: 270px;
        letter-spacing: 1px;
    }

    ul>li{
        font-size: 0.8rem;
        line-height: 250%;
    }

    ul>li:nth-child(2n-1){
        width: 100px;
    }

    ul>li:nth-child(2n){
        width: 150px;
        opacity: 0.6;
    }
`

const MyStack = styled.article`
    width: 0%;
    border-right: 1px solid var(--color-main-003);
    background-color: rgba(0,0,0,0.4);
    animation: OpenAni 1s forwards 1s;
`

const SkillData = styled.article`
    width: 100%;
    
`