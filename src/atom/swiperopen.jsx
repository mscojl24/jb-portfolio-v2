import { atom } from "recoil";

export const swiperOpenState = atom({
    key: 'swiperOpen',
    default: false
});

export const sidePageOpenState = atom({
    key: 'sideOpen',
    default: false
});


export const detailImgState = atom({
    key: 'detailImg',
    default: {
        index: 26,
        name: "언커버 : UNCOVER",
        contents:"음악이 필요한 사용자에게 원하는 키워드를 통해 저작권 프리 음원을 추천/제공하는 사이트 입니다. 반응형 css 및 Animation 동작구현 과 함께 전반적인 UI/UX (figma)를 담당했으며, fullpage-scroll 라이브러리를 통한 스크롤 페이지와 캐러셀 슬라이드, 리액트 훅 (useRef)을 이용한 음원 재생 및 일시정지, 사운드 조정, 음원 바 및 API 를 이용한 서치 바 기능, 코멘트 CRUD 서비스 제공 등을 도맡아 진행하였습니다.",
        skill: ["HTML","CSS","JavaScript","React","Styled-component","Recoil","Figma"],
        category : "WEB",
        sidepage : true,
        figma: "",
        siteurl: "",
        github: "",
        Personal: false,
        pass: false,
        image : ["/asset/image/design/067.png","/asset/image/design/068.png","/asset/image/design/069.png","/asset/image/design/070.png"]
    }
});