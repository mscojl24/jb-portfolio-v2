import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { detailImgState } from "../atom/swiperopen";

import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";

export function SwiperImage() {

    const [detailImg] = useRecoilState(detailImgState)
    const [arrowActive, setArrowActive] = useState(true)
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const imgElement = document.querySelector('.card-image');
        if (imgElement) {
            imgElement.classList.remove('animate-image');
            void imgElement.offsetWidth; // Force reflow to restart the animation
            imgElement.classList.add('animate-image');
        }
        
        if (detailImg.image.length > 1) {
            setArrowActive(false);
        }
    }, [currentIndex, detailImg.image.length]);

    const handlePrev = (event) => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? detailImg.image.length - 1 : prevIndex - 1));
        event.stopPropagation();
    };

    const handleNext = (event) => {
        setCurrentIndex(prevIndex => (prevIndex === detailImg.image.length - 1 ? 0 : prevIndex + 1));
        event.stopPropagation();
    };

  return (
                <SwiperCard className="flex-all-center">
                    <ButtonArrow className="flex-all-center" active={arrowActive ? "001" : "003"} onClick={handlePrev}><IoIosArrowBack/></ButtonArrow>
                    <img src={detailImg.image[currentIndex]} alt={detailImg.name} className="card-image"/>
                    <ButtonArrow className="flex-all-center" active={arrowActive ? "001" : "003"} onClick={handleNext}><IoIosArrowForward/></ButtonArrow>
                </SwiperCard>
  );
}

const SwiperCard = styled.div`
    width: 100%;
    height: 100%;

    .card-image{
        opacity: 0;
        height: 70%;
        box-shadow: 0px 0px 20px rgba(0,0,0,0.5);
        transform: translateY(-20px);
    }
    
    .animate-image {
        animation: opacity 0.3s forwards;
    }

    @media (max-width: 1020px) {
        .card-image{
        width: 70%;
        }
    }

    @keyframes opacity {
     100%{
        opacity: 1;
        transform: translateY(0px);
     }   
    }
    
`

const ButtonArrow = styled.button`
    color: var(--color-main-${props => props.active || "001"});
    background: none;
    font-size: 3rem;
    margin: 100px;

    &:active{
        color: var(--color-sub-002);
    }

    @media (max-width: 1020px) {
        margin: 10px;

    }
`
