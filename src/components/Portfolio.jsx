import styled from "styled-components";
import {designData} from "../data/designData"

export function Portfolio() {


  return (
        <PortfolioBox>
            <div className="port-category">
                    <button>ALL</button>
                    <button>WEBSITE</button>
                    <button>ETC</button>
                </div>
                <ul className="port-list">
                  {designData.map((item,index)=>(
                    <CardList src={item.image[0]} sec={index * 0.1}>
                      <div className="speech-bubble">{item.name}</div>
                    </CardList>
                  ))}
                </ul>
        </PortfolioBox>
  );
}


const PortfolioBox = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 100%;
opacity: 0;
filter: blur(30px);
animation: blur 1s forwards;

    .port-category {
      display: flex;
      justify-content: center;
        margin: 70px 0px;
        width: 100%;

        >button {
          padding: 0px 30px;
          height: 30px;
          background: none;
          cursor: pointer;
          color: var(--color-main-001);
        }
    }

    .port-list{
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      width: 50%;
      /* height: 100%; */
      padding-bottom: 300px;
    }
    
    
    @keyframes blur {
      100%{
        opacity: 1;
        filter: blur(0px);
      } 
    }
  
    
    `


const CardList = styled.li`
  
      box-sizing: border-box;
      filter: blur(0px);
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 300px;
      height: 300px;
      margin: 5px;
      border-radius: 20px;
      transition: all ease-in-out 0.3s;
      background: url(${(props) => props.src});
      background-size: cover;
      background-position: center center;
      transform: translateY(-40px);
      opacity: 0;
      animation: showCard 0.5s forwards ${props => props.sec || "0"}s;

      @keyframes showCard {
        100%{
          opacity: 1;
          transform: translateY(0px);
        }
      }

      
      &::before{
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        background-color: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
        border-radius: 20px;
      }
    
      &:hover{
      border: 2px solid var(--color-main-001);
      

        &::before{
          display: none;
        }
        
        .speech-bubble {
          display: block;
          position: absolute;
          background: #ffffff;
          border-radius: .4em;
          padding: 10px;
          text-align: center;
          color: var(--color-main-004);
          box-shadow: 0px 0px 20px rgba(0,0,0,0.5);
          font-size: 0.8rem;
          font-family: 'GmarketM';
          transform: translateY(-150px);
          opacity: 0;
          animation: moving 0.3s forwards;
        }

        .speech-bubble:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 0;
        border: 10px solid transparent;
        border-top-color: #ffffff;
        border-bottom: 0;
        margin-left: -10px;
        margin-bottom: -10px;
        }
    }
    
    @keyframes moving {
      100%{
        opacity: 1;
        transform: translateY(-150px);
      }
    }
    
    .cover-image::before & {
      content: "";
      position: absolute;
      background: rgba(0, 0, 0, 0.6);
      width: 100%;
      height: 100%;
      opacity: 0;
      animation: identifier 0.3s forwards;
    }
    
    & .speech-bubble {
      display: none;
    }
  

`