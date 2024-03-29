import styled from "styled-components";


export function MyProfile() {
  return (
            <MyProfileBox>
                <div className="margin-box">
                    <p className="sub-text">Hellow! I’m jubee</p>
                    <p className="sub-text2">상상력을 자극하는 UI/UX 개발자</p>
                    <h1 className="my-name">김주비</h1>
                    <ul>
                        <li>생년월일</li>
                        <li>1994.04.14</li>
                        <li>전화번호</li>
                        <li>+82 010.6818.0600</li>
                        <li>kakao</li>
                        <li>mscojl24</li>
                        <li>Email</li>
                        <li>kimjubee@gmail.com</li>
                        <li>자격증</li>
                        <li>웹디자인기능사 <br/>GTQ 1급 <br/>2종보통 운전면허</li>
                    </ul>
                </div>
                <div className="profile-image"></div>
            </MyProfileBox>
  );
}



const MyProfileBox = styled.article`
    position: relative;
    width: 0%;
    border-right: 1px solid var(--color-main-003);
    animation: OpenAni 1s forwards;

    .margin-box{
        margin: 70px;
    }
    .sub-text {
        font-family: "Homemade Apple";
        font-size: 1.2rem;
        color: var(--color-sub-002);
        margin-bottom: 30px;
        white-space:nowrap;
    }

    .sub-text2 {
        color: var(--color-main-002);
        margin-bottom: 20px;
        white-space:nowrap;
    }

    h1{
        font-size: 3.5rem;
        font-family: 'GmarketM';
        margin-bottom: 50px;
        white-space:nowrap;
    }

    ul{
        display: flex;
        flex-wrap :wrap;
        width: 270px;
        letter-spacing: 1px;
    }

    ul>li{
        font-size: 0.8rem;
        line-height: 250%;
    }

    ul>li:nth-child(2n-1){
        width: 100px;
    }

    ul>li:nth-child(2n){
        width: 150px;
        opacity: 0.6;
    }

    .profile-image {
        position: absolute;
        bottom: 0px;
        right: 0px;
        width: 400px;
        height: 560px;
        background: url(../asset/image/my_profile_image.png);
        opacity: 0;
        animation: fadeIn 0.6s forwards 2s;
        object-fit: cover;
    }

    @media (max-width: 700px) {
        .profile-image {
            display: none;
        }
    }

    @keyframes fadeIn {
        100%{
            opacity: 0.7;
        }
    }
`