import styled from "styled-components";
import { LandingPage2 } from "./LandingPage2";
import { Navigation } from "./Navigation";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MySkill } from "./MySkill";
import { Portfolio } from "./Portfolio";
import { Closing } from "./Closing";
import { SwiperImage } from "./SwiperImage";
import { useRecoilState } from "recoil";
import { sidePageOpenState, swiperOpenState } from "../atom/swiperopen";
import { DetailProtfolio } from "./Detailportfolio";

export function MainPage() {

    const [swiperOpen, setSwiperOpen] = useRecoilState(swiperOpenState)
    const [sideOpen] = useRecoilState(sidePageOpenState)
    const handleClick = () => {
            setSwiperOpen(!swiperOpen);
    }

  return (
    <BrowserRouter>
        <Background>
            {sideOpen && <DetailProtfolio/>}
            {swiperOpen && <div className="fix-box" onClick={()=>{handleClick()}}>
                <SwiperImage/>
            </div>}
            <MainSection>
                <ContentsBox>
                    <Routes>
                        <Route path="/" element={<LandingPage2 />} />
                        <Route path="/myskill" element={<MySkill />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/closing" element={<Closing />} />
                    </Routes>
                </ContentsBox>
            </MainSection>
            <NavSection>
                <Navigation/>
            </NavSection>
        </Background>
    </BrowserRouter>
  );
}

const Background = styled.div`
position: relative;
    display: flex;
    width: 100%;
    background : url(./asset/image/background-main.png);
    background-attachment: fixed;
    background-size: cover;
    overflow: scroll;
    min-height: 100vh;

    .fix-box{
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 999;
    background-color: rgba(0,0,0,0.5);
    backdrop-filter: blur(30px);
    opacity: 0;
    animation: showBox 0.3s forwards;

}

    @keyframes showBox {
     100%{
        opacity: 1;
     }   
    }
    
`
const MainSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const NavSection = styled.section`
`
const ContentsBox = styled.aside`
    display: flex;
    height: 100%;
    overflow: scroll;
    

    @media (max-width: 1050px) {
        justify-content: center;
    }

    .scroll::-webkit-scrollbar {
  display: none;
}

.scroll {
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
}
`

export default MainPage;
