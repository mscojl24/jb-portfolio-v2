import styled from "styled-components";
import { SideBanner } from "./SIdeBanner";
import { LandingPage } from "./LandingPage";
import { Navigation } from "./Navigation";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MySkill } from "./MySkill";
import { Portfolio } from "./Portfolio";
import { Closing } from "./Closing";
import { navClickState } from "../atom/mainstate";
import { useRecoilState } from "recoil";

export function MainPage() {

    const [navClick] = useRecoilState(navClickState);

  return (
    <BrowserRouter>
        <Background>
            <MainSection>
                <ContentsBox>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
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
    background : url(/asset/image/background-main.png);
    background-attachment: fixed;
    background-size: cover;
    overflow: scroll;
    min-height: 100vh;
    
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

const SidebannerBox = styled.aside`
    position: fixed;
    width: calc(100% - 90px);
    bottom: 0px;
    overflow: hidden;
    height: 160px;
    border-top: 1px solid var(--color-main-003);
    background-color: rgba(0,0,0,0.2);
    backdrop-filter: blur(40px);

    @media (max-width: 1050px) {
    display: none;
    }

`

export default MainPage;
