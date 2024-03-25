import styled from "styled-components";


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
                디자인과 프론트엔드 개발을 좋아하는 김주비 입니다. 상상할수 있는것을 구현하며,
                더 나아가 누군가의 상상이 될수있는 <span>프론트엔드 개발자</span>가 되고자합니다.
                <p>
                <br/>
                * 본 페이지는 비상업적 목적의 개인포트폴리오 페이지입니다.
                </p>
                </h2>
            </TitleBox>
        </LandingSection>
  );
}

const LandingSection = styled.div`
    
    display: flex;
    flex-direction: column;
    padding: 70px;
    
    .my-position{
        display: flex;
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
    
    /* width: 100%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(100% - 90px);
    
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