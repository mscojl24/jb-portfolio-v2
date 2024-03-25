import styled from "styled-components";
import { SideBanner } from "./SIdeBanner";
import { LandingPage } from "./LandingPage";
import { Navigation } from "./Navigation";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MySkill } from "./MySkill";
import { Portfolio } from "./Portfolio";
import { Closing } from "./Closing";

export function MainPage() {
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
                <SidebannerBox>
                    <SideBanner/>
                </SidebannerBox>
            </MainSection>
            <NavSection>
                <Navigation/>
            </NavSection>
        </Background>
    </BrowserRouter>
  );
}

const Background = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background : url(/asset/image/background-main.png) fixed;
    background-size: cover;
`

const MainSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`

const NavSection = styled.section`
    min-width: 90px;
    height: 100vh;
    border-left: 1px solid var(--color-main-003);
    z-index: 1;

    @media (max-width: 1050px) {
    display: none;
    }
`


const ContentsBox = styled.aside`
    display: flex;
    height: 100%;

    @media (max-width: 1050px) {
        justify-content: center;
    }
`

const SidebannerBox = styled.aside`
    position: absolute;
    width: calc(100% - 90px);
    bottom: 0px;
    overflow: hidden;
    height: 160px;
    border-top: 1px solid var(--color-main-003);
    background-color: rgba(0,0,0,0.2);
    backdrop-filter: blur(20px);

    @media (max-width: 1050px) {
    display: none;
    }

`

export default MainPage;
