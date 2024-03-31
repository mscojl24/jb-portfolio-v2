import styled from "styled-components";
import { IoLogoGithub } from "react-icons/io5";
import { RiKakaoTalkFill } from "react-icons/ri";

export function Closing() {

  const linkKakao = () =>{
    window.open("https://open.kakao.com/o/sMg43KVf", '_blank', 'noopener,noreferrer')
  }

  const linkGithub = () =>{
    window.open("https://github.com/mscojl24", '_blank', 'noopener,noreferrer')
  }

  return (
        <ClosingBox className="flex-all-center column">
            <div className="text-box cinematicText01">
              <p>Hellow Everyone</p>
              <h1>
              It’s My<br/>
              PortFolio
              </h1>
            </div>
            <div className="text-box cinematicText02">
              <p>designer and Developer </p>
              <h1>JUBEE KIM</h1>
            </div>
            <div className="text-box cinematicText03">
              <div>😎</div>
              <p>kimjubee@gmail.com</p>
              <h1>많은 관심 부탁드립니다!</h1>
              <ul className="button-sns flex-all-center">
                <li onClick={()=>{linkKakao()}}><RiKakaoTalkFill /> 오픈채팅방 연결하기</li>
                <li onClick={()=>{linkGithub()}}><IoLogoGithub /> 깃허브 보러가기</li>
              </ul>
            </div>
        </ClosingBox>
  );
}


const ClosingBox = styled.div`
    
    width: 100%;
    height: 100%;

    .text-box{
      position: absolute;
      text-align: center;
      text-transform: uppercase;

      p{
        font-size: 2rem;
        margin: 30px;
        font-family: 'GmarketM';
        color:var(--color-main-002);
      }

      h1{
        font-size: 5rem;
        margin: 10px;
        font-family: 'GmarketB';
        color:var(--color-main-001);
      }
      div{
        font-size: 6rem;
      }

      .button-sns{
        margin-top: 30px;
        :nth-child(1){
          margin-right: 10px;
        }
        li{
          display: flex;
          justify-content: center;
          align-items: center;
          border: 2px solid var(--color-main-003);
          padding: 20px 30px;
          margin: 10px;
          border-radius: 5px;
          color: var(--color-main-002);
          background-color: var(--color-main-004);
          transition: all ease-in-out 0.3s;
        }

        li:hover{
          color: var(--color-sub-002);
          border-color: var(--color-sub-002);
        }
      }
    }

    .cinematicText01{
      opacity: 0;
      transform: scale(2);
      filter: blur(40px);
      animation: cinematic 6s forwards;
    }

    .cinematicText02{
      opacity: 0;
      transform: scale(2);
      filter: blur(40px);
      animation: cinematic 6s forwards 5.5s;
    }

    .cinematicText03{
      opacity: 0;
      transform: scale(2);
      filter: blur(40px);
      animation: cinematic2 6s forwards 11.5s;
    }


    @keyframes cinematic {
        30%{
          opacity: 1;
          transform: scale(1);
          filter: blur(0px);
        }

        70%{
          transform: scale(1.05);
        }

        80%{
          opacity: 1;
          filter: blur(0px);
        }

        100%{
          opacity: 0;
          transform: scale(.5);
        }
    }

    @keyframes cinematic2 {
        30%{
          opacity: 1;
          transform: scale(1);
          filter: blur(0px);
        }

        70%{
          transform: scale(1.05);
        }

        100%{
          opacity: 1;
          transform: scale(1);
          filter: blur(0px);
        }
    }

`