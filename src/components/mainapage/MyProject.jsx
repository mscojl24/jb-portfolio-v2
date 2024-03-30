import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import { designData } from "../../data/designData";
import { Link } from "react-router-dom";


export function MyProject() {
  return (
            <MyProjectBox>
              <TeamProject>
                  <div className="team-project">
                      <span>Team Project</span>
                      <Link to="/portfolio"><Button>MORE <IoIosArrowForward/></Button></Link>
                  </div>
                  <ul className="project-card">
                      <li>
                          <img className="projext-image" src="https://mscojl24.github.io/jb-portfolio-v2/asset/image/design/067.png" alt=""/>
                          <div className="project-text">
                              <h2>UNCOVER</h2>
                              <p>저작권 무료음원 플랫폼</p>
                          </div>
                      </li>
                      <li>
                        <img className="projext-image" src="https://mscojl24.github.io/jb-portfolio-v2/asset/image/design/071.png" alt=""/>
                          <div className="project-text">
                              <h2>TICAT</h2>
                              <p>지역 축제안내 서비스</p>
                          </div>
                      </li>
                  </ul>
              </TeamProject>
              <PersonalDesign>
                  <div className="team-project">
                      <span>Personal Design</span>
                      <Link to="/portfolio"><Button>MORE <IoIosArrowForward/></Button></Link>
                  </div>
                  <div className="personal-design">
                      {designData.slice(0, 25).map((item,index) => (
                          <DesignCard src={item.image[0]} alt={item.name} sec={(index + 1) * 0.1} key={index}/>
                      ))}
                  </div>
              </PersonalDesign>
            </MyProjectBox>
  );
}


const MyProjectBox = styled.div`
    
    
`

const TeamProject = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 200px;

    .team-project{
        display: flex;
        align-items: center;
        margin-bottom: 30px;

        span{
            font-size: 1.2rem;
            font-family: 'GmarketM';
            margin-right: 20px;
        }
    }

    .project-card{
        display: flex;
    }

    .project-card>li{
        display: flex;
        align-items: center;
        margin-right: 10px;
        width: 50%;
        height: 160px;
        background-color: rgba(240,240,240,0.1);
        border-radius: 10px;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.2);

        .projext-image{
            margin: 0px 30px;
            width: 170px;
            height: 105px;
            background-color: #000;
            border-radius: 10px;
            overflow: hidden;
            object-fit: cover;

        }

        .project-text {

            h2{
                font-size: 1.2rem;
                font-family: 'GmarketM';
                margin-bottom: 10px;
            }
        }

    }
    
    @media (max-width: 1050px){
        width: 100%;
        .team-project{
            flex-direction: column;

            >*{
                margin: 20px;
            }
        }

        .project-card{
            display: flex;
            align-items: center;
            flex-direction: column;

            li {
                width: 100%;
                margin: 10px;

            }
        }
    }


`
const PersonalDesign = styled.div`
     width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 160px;

    .team-project{
        display: flex;
        align-items: center;
        margin-bottom: 30px;

        span{
            font-size: 1.2rem;
            font-family: 'GmarketM';
            margin-right: 20px;
        }
    }   


    @media (max-width: 1050px){

        .team-project{
            flex-direction: column;

            >*{
                margin: 20px;
            }
        }

        .personal-design{
            text-align: center;
        }
    }

`
const DesignCard = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
    margin: 5px;
    opacity: 0.3;
    transition: ease-in-out all 0.3s;

    &:hover {
       opacity: 1;
    }

`


const Button = styled.button`

        display: flex;
        align-items: center;
        width: 120px;
        height: 35px;
        justify-content: space-between;
        border:2px solid var(--color-main-002);
        background: none;
        color: var(--color-main-001);
        padding: 5px 20px;
        border-radius: 50px;
        transition: all ease-in-out 0.3s;
        cursor: pointer;

        &:hover {
          width: 160px;
          border-color: var(--color-sub-002);
          color: var(--color-sub-002);
        }


`
