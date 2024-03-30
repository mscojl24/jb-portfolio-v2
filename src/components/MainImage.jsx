import styled from "styled-components";

export function MainImage() {
  return (
            <MainImageBox>
                <img src="https://mscojl24.github.io/jb-portfolio-v2/asset/image/main-image.png" alt="메인 이미지" />
                <img src="https://mscojl24.github.io/jb-portfolio-v2/asset/image/main-image.png" alt="메인 이미지" />
                <img src="https://mscojl24.github.io/jb-portfolio-v2/asset/image/main-image.png" alt="메인 이미지" />
                <img src="https://mscojl24.github.io/jb-portfolio-v2/asset/image/main-image.png" alt="메인 이미지" />
                <img src="https://mscojl24.github.io/jb-portfolio-v2/asset/image/main-image.png" alt="메인 이미지" />
            </MainImageBox>
  );
}

const MainImageBox = styled.article`
    position: relative;
    display: flex;
    justify-content: right;
    align-items: center;
    padding: 170px 0px;

    img{
        position: absolute;
    }

    img:nth-child(1){clip-path: inset(0 80% 100% 0); animation:movingImage1 5s infinite;}
    img:nth-child(2){clip-path: inset(5% 60% 100% 21%); animation:movingImage2 5s infinite 0.2s;}
    img:nth-child(3){clip-path: inset(10% 40% 100% 41%); animation:movingImage3 5s infinite 0.4s;}
    img:nth-child(4){clip-path: inset(15% 20% 100% 61%); animation:movingImage4 5s infinite 0.6s;}
    img:nth-child(5){clip-path: inset(20% 0% 100% 81%); animation:movingImage5 5s infinite 0.8s;}

    @keyframes movingImage1 {
        30%{clip-path: inset(0% 80% 0% 0);}
        70%{clip-path: inset(20% 80% 20% 0);}
        100%{clip-path: inset(100% 80% 0% 0);}
    }
    @keyframes movingImage2 {
        30%{clip-path: inset(5% 60% 5% 21%);}
        70%{clip-path: inset(15% 60% 15% 21%);}
        100%{clip-path: inset(100% 60% 0% 21%);}

    }
    @keyframes movingImage3 {
        30%{clip-path: inset(10% 40% 10% 41%);}
        70%{clip-path: inset(10% 40% 10% 41%);}
        100%{clip-path: inset(50% 40% 50% 41%);}
    }
    @keyframes movingImage4 {
        30%{clip-path: inset(15% 20% 15% 61%);}
        70%{clip-path: inset(5% 20% 5% 61%);}
        100%{clip-path: inset(0% 20% 100% 61%);}
    }
    @keyframes movingImage5 {
        30%{clip-path: inset(20% 0% 20% 81%);}
        70%{clip-path: inset(0% 0% 0% 81%);}
        100%{clip-path: inset(0% 0% 100% 81%);}
    }

    @media (max-width: 1700px) {
        transform: scale(0.7);
    }

    @media (max-width: 1500px) {
        display: none;
    }

    @media (max-width: 1050px) {
        display: block;
        position: relative;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 300px;
        transform: scale(0.5);
        right: 0px;
        top: 0px;
        padding: 50px 0px;
    }

`