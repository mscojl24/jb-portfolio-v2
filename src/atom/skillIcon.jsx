import { atom } from "recoil";
import { SiAxios} from "react-icons/si";

export const SkillDataState = atom({
    key: 'skillData',
    default: {
      index: 9,
      name: "Axios",
      icon: <SiAxios color="#5a29e4" />,
      contents:
        " Axios를 활용하여 서버와의 HTTP 통신을 처리할 수 있어요. Axios의 설정과 에러 핸들링을 통해 안정적이고 효율적인 네트워크 요청이 가능해요.",
      color: "#5a29e4",
      gauge: 80,
    }
});

export const SkillIdxState = atom({
  key: 'skillIdx',
  default: 9
});