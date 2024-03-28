import styled from "styled-components";
import { FaHtml5 } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { SkillDataState } from "../../atom/skillIcon";


export function SkillData() {

  const [ skillData, setSkillData] = useRecoilState(SkillDataState);


  return (
            <SkillDataBox gauge={skillData.gauge}>
                <div className="margin-box"> 
                  {skillData.icon}
                  <h2 className="skill-name">{skillData.name}</h2>
                  <div className="gauge-box">
                    <div className="gauge-bar" >{skillData.gauge}%</div>
                  </div>
                  <p className="skill-description">{skillData.contents}</p>
                </div>
            </SkillDataBox>
  );
}

const SkillDataBox = styled.article`
    width: 100%;

    .margin-box{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 70px;
      height: calc(100% - 160px);
      text-align: center;
    }

    .margin-box >*:nth-child(1){
      font-size: 11rem;
      animation: IconMotion 0.6s forwards;
    }

    
    @keyframes IconMotion {
      
      0%{
        opacity: 0;
        filter: blur(20px);
      }
      50%{
            opacity: 1;
            transform: scale(1.2);
        }
    }

    .skill-name{
      font-size: 2.5rem;
      margin: 30px 0px;
      font-family: 'GmarketB';
    }

    .gauge-box{
      display: flex;
      justify-content: left;
      align-items: center;
      max-width: 300px;
      width: 90%;
      height: 30px;
      border: 2.5px solid var(--color-main-001);
      border-radius: 50px;
      margin-bottom: 30px;

      .gauge-bar{
        transition: ease-in-out all 0.3s;
        display: flex;
        justify-content: center;
        align-items: center;
        width: calc(${(props) => props.gauge}% - 8px);
        margin: 4px;
        height: calc(100% - 8px);
        border-radius: 50px;
        background-color: var(--color-main-001);
        color:var(--color-main-004);
        font-family: 'GmarketM';
      }
    }

    .skill-description{
      line-height: 150%;
      max-width: 400px;
      width: 90%;
      color: var(--color-main-002);
    }

`