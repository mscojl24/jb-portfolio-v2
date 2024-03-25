import styled from "styled-components";
import { Link } from 'react-router-dom';

export function Navigation() {
  return (
        <NavigationBox>
            <div className="logo"><img src="../asset/image/logo_image.png" alt="logo image"/></div>
            <ul>
            <Link to="/"><li className="menu-ani-001"><span>MAIN</span><div className="menu-point"></div></li></Link>
            <Link to="/myskill"><li className="menu-ani-002"><span>MY SKILL</span><div className="menu-point"></div></li></Link>
            <Link to="/portfolio"><li className="menu-ani-003"><span>PORTFOLIO</span><div className="menu-point"></div></li></Link>
            <Link to="/closing"><li className="menu-ani-004"><span>CLOSING</span><div className="menu-point"></div></li></Link>
            </ul>
        </NavigationBox>
  );
}


const NavigationBox = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    padding: 30px 0px;

    .logo > img{
        width: 40px;
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


    ul{
        position: absolute;
        width: 150px;
        top: 45%;
        left: -148px;

        a {
            text-decoration: none;
        }
        
        li {
            display: flex;
            justify-content: right;
            align-items: center;
            font-size: 0.6em;
            margin-bottom: 60px;
            letter-spacing: 1px;
            cursor: pointer;
            
            span{
                color: var(--color-main-002);
                transition: ease-in-out 0.2s all;
            }
        }

        li:hover>span{
            color: var(--color-sub-002);
            transform: translateX(-10px);
        }

        .menu-point{
            width: 6px;
            height: 6px;
            background-color: var(--color-main-002);
            border-radius: 5px;
            margin-left: 20px;
        }
    }



    .menu-ani-001{opacity:0; animation: menuAnimation 0.3s forwards 0s;}
    .menu-ani-002{opacity:0; animation: menuAnimation 0.3s forwards 0.2s;}
    .menu-ani-003{opacity:0; animation: menuAnimation 0.3s forwards 0.4s;}
    .menu-ani-004{opacity:0; animation: menuAnimation 0.3s forwards 0.6s;}

    @keyframes menuAnimation {
        0%{opacity: 0; transform: translateY(-20px);}
        100%{opacity: 1;transform: translateY(0px);}
    }

`