import styled from "styled-components";
import { MainImage } from "./MainImage";
import { IoIosArrowForward } from "react-icons/io";
import { designData } from "../data/designData"

export function LandingPage() {

    return (
        <LandingSection>

            <ul className="my-position">
                <li>WEB DESIGN</li>
                <li>FRONTEND</li>
                <li>PUBLISING</li>
            </ul>
            <TitleBox>
                <h1>
                    <span className="title title-motion1">J</span>
                    <span className="title title-motion2">U</span>
                    <span className="title title-motion3">B</span>
                    <span className="title title-motion4">E</span>
                    <span className="title title-motion5">E</span><br/>
                    <span className="title title-motion6">P</span>
                    <span className="title title-motion7">O</span>
                    <span className="title title-motion8">R</span>
                    <span className="title title-motion9">T</span>
                    <span className="title title-motion10">F</span>
                    <span className="title title-motion11">O</span>
                    <span className="title title-motion12">L</span>
                    <span className="title title-motion13">I</span>
                    <span className="title title-motion14">O</span>
                    
                    
                </h1>
                <h2>
                디자인과 프론트엔드 개발을 좋아하는 김주비 입니다. 상상할수 있는것을 구현하며, <br/>
                더 나아가 누군가의 상상이 될수있는 <span>프론트엔드 개발자</span>가 되고자합니다.
                <p>
                <br/>
                * 본 페이지는 비상업적 목적의 개인포트폴리오 페이지입니다.
                </p>
                </h2>
                <MainImage/>
            </TitleBox>
            <TeamProject>
                <div className="team-project">
                    <span>Team Project</span>
                    <button>MORE <IoIosArrowForward/></button>
                </div>
                <ul className="project-card">
                    <li>
                        <img className="projext-image" src="/asset/image/design/067.png" alt=""/>
                        <div className="project-text">
                            <h2>UNCOVER</h2>
                            <p>저작권 무료음원 플랫폼</p>
                        </div>
                    </li>
                    <li>
                    <img className="projext-image" src="/asset/image/design/071.png" alt=""/>
                        <div className="project-text">
                            <h2>TICAT</h2>
                            <p>지역 축제안내 서비스</p>
                        </div>
                    </li>
                </ul>
            </TeamProject>
            <PersonalDesign>
                <div className="team-project">
                    <span>Personal Design</span>
                    <button>MORE <IoIosArrowForward/></button>
                </div>
                <div className="personal-design">
                    {designData.slice(0, 24).map((item,index) => (
                        <DesignCard src={item.image[0]} alt={item.name} sec={(index + 1) * 0.1} key={index}/>
                    ))}
                </div>
            </PersonalDesign>
        </LandingSection>
  );
}

const LandingSection = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 70px;
    width: 100%;
    
    .my-position{
        display: flex;
        margin-bottom: 170px;
        animation: fade 1s forwards;
        >li {
            padding-right: 40px;
            letter-spacing: 1px;
            font-size: 0.8rem;
        }
    }

@media (max-width: 1050px) {
        justify-content: center;
        align-items: center;

        .my-position{
        >li {
            padding: 10px;
            letter-spacing: 1px;
        }
    }

    @media (max-width: 540px) {
        padding: 30px;
        font-size: 0.7em;
        >li {
            padding: 0px;
        }
}
}
    `
const TitleBox = styled.div`
    
    display: flex;
    flex-direction: column;
    height: 100%;
    
    h1 {
        font-size: 6rem;
        font-family: 'GmarketB';
        margin-bottom: 50px;
    }

    h2{
        line-height: 180%;
        width: 580px;
        animation: fade 1s forwards;
        >p{
            color: var(--color-main-003)
        }
        >span {
            color: var(--color-sub-002);
            border-bottom: 1px solid var(--color-sub-002);
            border-style: dashed;
        }
    }
    @media (max-width: 1050px) {
        text-align: center;
        
        h1 {
            font-size: 4em;
        }
        h2{
            width: auto;
        }
    
    @media (max-width: 540px) {
        text-align: center;
        
        h1 {
            font-size: 3em;
        }
        h2{
            width: auto;
        }
        }
    }





    /**타이틀 모션 css */

    .title{
        font-family: 'GmarketB';
        opacity: 0;
    }

    .title-motion1{animation: identifier 7s infinite 0s;} 
    .title-motion2{animation: identifier 7s infinite 0.1s;}
    .title-motion3{animation: identifier 7s infinite 0.2s;}
    .title-motion4{animation: identifier 7s infinite 0.3s;}
    .title-motion5{animation: identifier 7s infinite 0.4s;}
    .title-motion6{animation: identifier 7s infinite 0.5s;}
    .title-motion7{animation: identifier 7s infinite 0.6s;}
    .title-motion8{animation: identifier 7s infinite 0.7s;}
    .title-motion9{animation: identifier 7s infinite 0.8s;}
    .title-motion10{animation: identifier 7s infinite 0.9s;}
    .title-motion11{animation: identifier 7s infinite 1s;}
    .title-motion12{animation: identifier 7s infinite 1.1s;}
    .title-motion13{animation: identifier 7s infinite 1.2s;}
    .title-motion14{animation: identifier 7s infinite 1.3s;}

    @keyframes identifier {
        0%{
            opacity: 0;
            filter: blur(20px);
        }
        20%{
            opacity: 1;
            filter: blur(0px);
        }
        80%{
            opacity: 1;
            filter: blur(0px);
        }

        100%{
            opacity: 0;
            filter: blur(20px);
        }
    }

    @keyframes fade {
        0%{
            opacity: 0;
        }

        100%{
            opacity: 1;
        }
    }


`
const TeamProject = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 200px;

    .team-project{
        display: flex;
        align-items: center;
        margin-bottom: 30px;

        span{
            font-size: 1.2rem;
            font-family: 'GmarketM';
            margin-right: 20px;
        }

        button{
            display: flex;
            align-items: center;
            width: 120px;
            height: 35px;
            justify-content: space-between;
            border:2px solid var(--color-main-002);
            background: none;
            color: var(--color-main-001);
            padding: 5px 20px;
            border-radius: 50px;
        }
    }

    .project-card{
        display: flex;
    }

    .project-card>li{
        display: flex;
        align-items: center;
        margin-right: 10px;
        width: 520px;
        height: 160px;
        background-color: rgba(240,240,240,0.1);
        border-radius: 10px;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.2);

        .projext-image{
            margin: 0px 30px;
            width: 170px;
            height: 105px;
            background-color: #000;
            border-radius: 10px;
            overflow: hidden;
            object-fit: cover;

        }

        .project-text {

            h2{
                font-size: 1.2rem;
                font-family: 'GmarketM';
                margin-bottom: 10px;
            }
        }
    }


`
const PersonalDesign = styled.div`
     width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 160px;

    .team-project{
        display: flex;
        align-items: center;
        margin-bottom: 30px;

        span{
            font-size: 1.2rem;
            font-family: 'GmarketM';
            margin-right: 20px;
        }

        button{
            display: flex;
            align-items: center;
            width: 120px;
            height: 35px;
            justify-content: space-between;
            border:2px solid var(--color-main-002);
            background: none;
            color: var(--color-main-001);
            padding: 5px 20px;
            border-radius: 50px;
        }
    }   

    .personal-design{
        width: 80%;
    }
`


const DesignCard = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
    margin: 5px;
    /* animation: movingAnimation 1s infinite ${props => props.sec}s; */
    opacity: 0.3;
    transition: ease-in-out all 0.3s;

    &:hover {
       opacity: 1;
    }

`
