import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useRecoilState } from "recoil";
import { navClickState } from "../atom/mainstate";

export function Navigation() {

const [navClick, setNavClick] = useRecoilState(navClickState);

const handleClickNav = () =>{
    setNavClick(!navClick)
}

  return (
        <NavigationBox height={`${navClick ? "100%" : "0%"}`}>
            <div className="logo" onClick={()=>{handleClickNav()}} ><img src="./asset/image/logo_image.png" alt="로고 이미지"/></div>
            <ul>
                <Link to="/" onClick={()=>{handleClickNav()}}><li className="menu menu-ani-001"><span>MAIN</span></li></Link>
                <Link to="/myskill" onClick={()=>{handleClickNav()}}><li className="menu menu-ani-002"><span>MY SKILL</span></li></Link>
                <Link to="/portfolio" onClick={()=>{handleClickNav()}}><li className="menu menu-ani-003"><span>PORTFOLIO</span></li></Link>
                <Link to="/closing" onClick={()=>{handleClickNav()}}><li className="menu menu-ani-004"><span>CLOSING</span></li></Link>
            </ul>
        </NavigationBox>
  );
}


const NavigationBox = styled.div`
    position: fixed;
    width: 100%;
    top: 0px;
    left: 0px;

    .logo {
        position: fixed;
        top: 80px;
        right: 150px;
        z-index: 3;
    }

    .logo > img{
        width: 65px;
        cursor: pointer;
        
    }
    .logo > img:hover{
        animation: logoMotion 0.3s ease-in-out;
    }

    @keyframes logoMotion {
        50%{
            transform: scale(1.2);
        }

        80%{
            transform: scale(0.9);
        }
        
    }

    a{
        text-decoration: none;
    }

    ul {
        position: fixed;
        width: 100%;
        background-color: rgba(0,0,0,0.5);
        backdrop-filter: blur(30px);
        transition: all ease-in-out 0.3s;
        height: ${props => props.height || "0%"};
        overflow: hidden;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }
    
    .menu{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        margin: 30px;
        font-size: 2rem;
        height: 50px;
        span{font-family:'GmarketM';}
        transition: all ease-in-out 0.3s;
    }

    .menu::before{
        content: "";
        position: absolute;
        top: 0%;
        left: 50%;
        transform: translateX(-50%);
        width: 0%;
        height: 50%;
        border-top:2px solid var(--color-main-002);
        border-bottom:2px solid var(--color-main-002);
        transition: all ease-in-out 0.3s;
        padding: 10px 0px;
    }

    .menu:hover{
        letter-spacing: 10px;
        span{font-family:'GmarketL';}
    }

    .menu:hover::before{
        width: 100%;
    }

    .menu-ani-001{opacity:0; animation: menuAnimation 0.3s forwards 0s;}
    .menu-ani-002{opacity:0; animation: menuAnimation 0.3s forwards 0.2s;}
    .menu-ani-003{opacity:0; animation: menuAnimation 0.3s forwards 0.4s;}
    .menu-ani-004{opacity:0; animation: menuAnimation 0.3s forwards 0.6s;}

    @keyframes menuAnimation {
        0%{opacity: 0; transform: translateY(-20px);}
        100%{opacity: 1;transform: translateY(0px);}
    }

    @media (max-width: 1020px) {
        .logo {
        top: 20px;
        right: 20px;
    }

    .logo > img{
        width: 30px;
        
    }
    }

`