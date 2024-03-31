import styled from "styled-components";
import {designData} from "../data/designData"
import { useState } from "react";
import { useRecoilState } from "recoil";
import { detailImgState, sidePageOpenState, swiperOpenState } from "../atom/swiperopen";
import { PiImagesSquareDuotone } from "react-icons/pi";
import { TfiLayoutListThumb } from "react-icons/tfi";

export function Portfolio() {

  const [item, setItem] = useState(designData)
  const [, setSwiperOpen] = useRecoilState(swiperOpenState)
  const [, setDetailImg] = useRecoilState(detailImgState)
  const [, setSideOpen] = useRecoilState(sidePageOpenState)
  const [clickMenu,setClickMenu ] = useState("ALL")

  const [hoveredComponent, setHoveredComponent] = useState('all');

  const handleMouseEnter = (idx) => {
    setHoveredComponent(idx);
  };

  const handleMouseLeave = () => {
    setHoveredComponent('all');
  };

const handleCategory = (category) => {
    let filteredData = [];

    switch (category) {
        case "WEB":
        case "CARDNEWS":
        case "ETC":
            filteredData = designData.filter(item => item.category === category);
            break;
        default:
            filteredData = designData;
            break;
    }

    setItem([]);
    setTimeout(() => setItem(filteredData), 0);
    setClickMenu(category);
};
  

const handleClickImg = (item) => {
  setDetailImg(item)


      if(item.sidepage){
        setSwiperOpen(false);
        setSideOpen(true);
        
    }else{
        setSwiperOpen(true);
        setSideOpen(false);
    }
}

  return (
        <PortfolioBox>
                <div className="port-category">
                    <button onClick={()=>{handleCategory("ALL")}} className={clickMenu === "ALL" ? 'click-menu' : ''}>ALL</button>
                    <button onClick={()=>{handleCategory("CARDNEWS")}} className={clickMenu === "CARDNEWS" ? 'click-menu' : ''}>CARD NEWS</button>
                    <button onClick={()=>{handleCategory("WEB")}} className={clickMenu === "WEB" ? 'click-menu' : ''}>WEB SITE</button>
                    <button onClick={()=>{handleCategory("ETC")}} className={clickMenu === "ETC" ? 'click-menu' : ''}>ETC</button>
                </div>
                <ul className="port-list">
                  {item.map((item,index)=>(
                    <CardList key={index} src={item.image[0]} sec={index * 0.05} onClick={()=>{handleClickImg(item)}}
                      onMouseEnter={() => handleMouseEnter(item.index)}
                      onMouseLeave={handleMouseLeave}
                      className={hoveredComponent === 'all' ? 'flex-all-center' : 'flex-all-center blurred'}
                    >
                      <div className="more-image">
                        {item.image.length > 1 && <p><PiImagesSquareDuotone /></p>}
                        {!item.Personal && <p className="font-size colorT"><TfiLayoutListThumb /></p> }
                      </div>
                      <div className="speech-bubble">{item.name}</div>
                    </CardList>
                  ))}
                </ul>
        </PortfolioBox>
  );
}


const PortfolioBox = styled.div`
position: relative;
display: flex;
align-items: center;
flex-direction: column;
width: 100%;
height: 100vh;
overflow: scroll;
opacity: 0;
filter: blur(30px);
animation: blur 1s forwards;


    .port-category {
      display: flex;
      justify-content: center;
        margin: 70px 0px;
        width: 100%;

        >button {
          position: relative;
          margin: 0px 15px;
          height: 50px;
          background: none;
          cursor: pointer;
          color: var(--color-main-001);
          transition: all ease-in-out 0.3s;
          border: 5px solid rgba(0,0,0,0);
          appearance: none;
        }

        >button::before{
          content: "";
          position: absolute;
          top:0px;
          left: 0px;
          width: 0%;
          height: 100%;
          border-bottom: 3px solid var(--color-sub-002);
          animation: underbar 0.3s forwards;
          transition: all ease-in-out 0.3s;
        }

        >button:hover::before{
          width: 100%;
        }

        .click-menu{color:var(--color-sub-002);}

    }

    @keyframes underbar {
          100%{
            .click-menu::before{
              width: 100%;
            }
          }
    }

    .port-list{
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      width: 60%;
      /* height: 100%; */
      padding-bottom: 300px;
      transition: all ease-in-out 0.3s;
    }

    
    
    @keyframes blur {
      100%{
        opacity: 1;
        filter: blur(0px);
      } 
    }

    @media (max-width: 1100px) {
      .port-list{ width: 80%;}
      }

  
    
    `
const CardList = styled.li`
      position: relative;
      box-sizing: border-box;
      filter: blur(0px);
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

      .more-image{
        position: absolute;
        bottom: 15px;
        right: 15px;
        display: flex;
        P{
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5px;
          background-color: rgba(255,255,255,0.7);
          border-radius: 5px;
          margin-left: 5px;
          color: var(--color-main-004);
          border: 1px solid #666;
        }
      }

      /* &.blurred{
        filter: blur(10px);

      } */
/* 
      &:hover{
        filter: blur(0px);
      } */

      @media (max-width: 1100px) {
        width: 150px;
        height: 150px;
      }

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
        background-color: rgba(0,0,0,0.6);
        width: 100%;
        height: 100%;
        border-radius: 20px;
        transition: all ease-in-out 0.3s;
      }
    
      &:hover{
      border: 2px solid var(--color-main-001);
      

        &::before{
          background-color: rgba(0,0,0,0);
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
          top:-50px;
          opacity: 0;
          animation: moving 0.6s forwards;
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
        top:-20px;
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