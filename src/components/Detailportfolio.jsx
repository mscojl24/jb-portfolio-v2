import { IoIosArrowBack } from "react-icons/io";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { detailImgState, sidePageOpenState } from "../atom/swiperopen";
import { MdReportGmailerrorred } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

export function DetailProtfolio() {

    const [detail,] = useRecoilState(detailImgState);
    const [close, setClose] = useRecoilState(sidePageOpenState);

    const handlePrev = () => {
        setClose(!close)
    }   

    const linkUrl = (url) =>{
            window.open(url, '_blank', 'noopener,noreferrer')
    }

  return (
    <DetailBox className={close && 'open'}>
        {detail.siteurl === "null" && <div className="modal-box flex-all-center">
            <MdReportGmailerrorred />
            <span>앗, 죄송해요! 현재는 해당 프로젝트의 웹사이트를 감상할수 없어요.</span>
            <IoClose />
        </div>}
        <BackBtn onClick={()=>{handlePrev()}} className="flex-all-center"><IoIosArrowBack /> <span>이전페이지</span></BackBtn>
        <ContentsBox className="flex-all-center column">
            <p>TEAM PROJECT</p>
            <h1>{detail.name}</h1>
            <h2>{detail.contents}</h2>
            <ul className="flex-all-center skill-icon">
            {detail.skill.map((item)=>(
                <li>{item}</li>
            ))}
            </ul>
        </ContentsBox>
        <ImageBox className="flex-h-center column">
            {detail.image.map((item)=>(
                <li><img src={item} alt={detail.name} /></li>
            ))}
        </ImageBox>
        <ButtonGroup>
            {detail.siteurl !== "" && <button className="button-link" onClick={()=>{linkUrl(detail.siteurl,"web")}}>Web site</button>}
            {detail.github !== "" && <button className="button-link" onClick={()=>{linkUrl(detail.github,"git")}}>Git Hub</button>}
            {detail.figma !== "" && <button className="button-link" onClick={()=>{linkUrl(detail.figma,"figma")}}>Figma</button>}
        </ButtonGroup>
    </DetailBox>
  );
}

const DetailBox = styled.aside`
    position: absolute;
    top: 0px;
    right: 0px;
    width: 0%;
    overflow: hidden;
    border-left: 1px solid var(--color-main-002);
    z-index: 99;
    background: url(https://mscojl24.github.io/jb-portfolio-v2/asset/image/background-main.png) fixed;
    background-size: cover;

    &.open{
        animation: opacityBox 1s forwards;
        @keyframes opacityBox {
            100%{width: 100%;}
        }
    }

    .modal-box{
        position: fixed;
        top: 50px;
        left: 50%;
        transform: translate(-50%,-50px);
        background: rgba(50,50,50,0.9);
        border-radius: 10px;
        justify-content: space-between;
        padding: 20px 40px;
        letter-spacing: 1px;
        box-shadow: 0px 0px 20px rgba(0,0,0,0.5);
        font-size: 1.2rem;
        opacity: 0;
        animation: modalopen 5s forwards;

        span{
            margin: 0px 20px;
            font-size: 1rem;
        }
    }

    @keyframes modalopen {
        20%{
            opacity: 1;
            transform: translate(-50%,0px);
        }
        80%{
            opacity: 1;
            transform: translate(-50%,0px);
        }
    }
`
const ContentsBox = styled.div`
    margin: 100px;
    text-align: center;

    >*{margin: 20px;}
    p{color:var(--color-sub-002);letter-spacing: 1px;}
    h1{font-size: 3.2rem; font-family: 'GmarketM';}
    h2{ width: 50%; line-height:200%; color:var(--color-main-002);}

    .skill-icon{
        flex-wrap: wrap;
        width: 100%;

        li{
            margin: 5px;
            padding: 10px 20px;
            border: 1px solid var(--color-sub-002);
            color: var(--color-sub-002);
            border-radius: 50px;
            font-size: 0.7rem;
            letter-spacing: 1px;
        }
    }

    @media (max-width: 1500px) {
        h2{ width: 70%;}
    }

    @media (max-width: 1050px) {
        margin: 100px 20px;
        h2{ width: 90%;}
        h1{font-size: 2.5rem;}
    }
`
const ImageBox = styled.ul`
    width: 100%;

    li{
        width: 1000px;
        overflow: hidden;
        border-radius: 20px;
        margin-bottom: 20px;
    }

    img{
        width: 100%;
        object-fit: cover;
    }

    @media (max-width: 1050px) {
        li{
        width: 90%
        }
    }
`
const BackBtn = styled.button`
    position: fixed;
    top: 100px;
    width: 190px;
    height: 60px;
    font-size: 1.1rem;
    color:var(--color-main-003);
    transition: all ease-in-out 0.3s;
    overflow: hidden;
    cursor: pointer;

    
    span{
        color:var(--color-main-003);
        font-family: 'GmarketM';
        margin-left: 20px;
        transition: all ease-in-out 0.3s;
        white-space: nowrap;
    }
    
    &:hover>span{
        margin-left: 30px;
    }
    
    @media (max-width: 1050px) {
        width: 50px;
        height: 50px;
        &>:nth-child(1){transition: all ease-in-out 0.3s;}
        span{
            display: none;
        }
        &:hover :nth-child(1){
            transform: translateX(-10px);
        }


    }
    
`
const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .button-link{
        position: relative;
        background: none;
        color:var(--color-main-002);
        border: 1px solid var(--color-main-002);
        padding: 20px 50px;
        font-family: 'GmarketL';
        font-size: 1.5rem;
        margin: 100px 20px;
        border-radius: 5px;
        cursor: pointer;

        -webkit-transition: border-color 0.4s, color 0.4s;
        transition: border-color 0.4s, color 0.4s;
    }

    .button-link::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--color-main-001);
        z-index: -1;
        opacity: 0;
        -webkit-transform: scale3d(0.7, 1, 1);
        transform: scale3d(0.7, 1, 1);
        -webkit-transition: -webkit-transform 0.4s, opacity 0.4s;
        transition: transform 0.4s, opacity 0.4s;
        -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    }

    .button-link:hover{
        color: var(--color-main-004);
        border-color: var(--color-main-001);
    }

    .button-link:hover::before{
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
    
`