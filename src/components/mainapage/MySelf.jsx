import styled from "styled-components";


export function MySelf() {
  return (
            <MyselfeBox>
                <article className="self-image">
                    <div></div>
                </article>
                <article className="self-int">
                    <p>Hellow! I’m jubee</p>
                    <h1>
                    개발자와 디자이너는 <br/>
                    친해질 수 있을까요?
                    </h1>
                    <span>
                    사용자에게 좋은 웹 앱 어플리케이션을 만들기 위해서 가장 필요한것은 단순한 디자이너의 역량 뿐만아닌, 웹앱을 같이 만들어가는 <span className="point-text">팀원과의 협력과 소통</span>이라고 생각합니다. <br/>
                    <br/>
                    그런 과정에 있어 제가 가장 먼저 해 볼 수 있는 부분은 디자인과 동시에 개발 또한 경험해 보는 것이라고 생각했습니다. 꾸준히 디자인 공부와 함께 <span className="point-text">html+css 퍼블리싱, javascript 및 react(프레임워크)</span> 등의 개발 공부 또한 병행해 가며 1년간의 기간 동안 프로젝트팀원들과 다양한 웹 앱 애플리케이션을 제작해 보며 웹앱 어플리케이션의 동작과정과 구조를 이해하였으며, 서로 소통하고 협업하는 과정을 배워갔습니다.<br/>
                    <br/>
                    그저 단순히 잘하는것 뿐만아닌, 제가 함께 할 회사에서도 제가 진행해 왔던 프로젝트와 같이 팀원들과 함께 소통하며, 그저 화려한 디자인뿐만 아니라 아닌 사용자에게 조금 더 편리하고 interactive한 사용감을 줄 수 있는 애플리케이션 디자인을 개발해 나가고 싶습니다. 
                    </span>
                </article>
            </MyselfeBox>
  );
}


const MyselfeBox = styled.div`
    height: 100%;
    display: flex;
    margin: 100px 0px;

    .self-image{
        width: 40%;

        div{
            width: 700px;
            height: 370px;
            transform: translateX(-150px);
            background: url(https://mscojl24.github.io/jb-portfolio-v2/asset/image/main-image3.png);
            background-position: center;
            background-size: 770px;
            animation: movingImage 3s infinite;
        }

        @keyframes movingImage {
            50%{
                width: 500px;
                border-radius: 0px 100px 100px 0px;
            }
        }
    }
    
    .self-int {
        width: 720px;
        line-height: 180%;
        
        span{color:var(--color-main-002);}


        p{
            font-family: "Homemade Apple";
            font-size: 1.2rem;
            color: var(--color-sub-002);
            margin-bottom: 30px;

        }

        h1{
            font-size: 2.3rem;
            line-height: 130%;
            margin-bottom: 30px;
        }

        .point-text{
            color: var(--color-sub-002);
            border-bottom: 1px dashed var(--color-sub-002);
            
        }
    }

    @media (max-width: 1700px) {
        .self-image{
        width: 30%;
        }
        .self-image>div{
            width: 400px;
            height: 250px;
            margin-bottom: 100px;
        }

        @keyframes movingImage {
            50%{
                width: 250px;
                border-radius: 0px 50px 50px 0px;
            }
        }
    }

    @media (max-width: 1500px) {
        flex-direction: column;
        .self-image>div{
            width: calc(100vw - 300px);
            animation: none;
            transform: translateY(0px);
        }
    }

    @media (max-width: 1050px) {
        width: 100%;
        align-items: center;

        .self-image>div{
            width: 100vw;
            animation: none;
            transform: translateY(0px);
            display: none;
        }

        .self-int {
        text-align: center;
        width: auto;
        max-width: 600px;
        margin: 30px;
        }

    }


`