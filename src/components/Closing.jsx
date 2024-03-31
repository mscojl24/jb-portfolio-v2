import styled from "styled-components";


export function Closing() {
  return (
        <ClosingBox className="flex-all-center column">
            <div className="text-box cinematicText01">
              <p>Hllow Everyone</p>
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
        font-size: 10rem;
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