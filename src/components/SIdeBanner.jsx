import styled from "styled-components";


export function SideBanner() {
  return (
        <BannerSlider>
            <div className="selected_card">
                <div className="card">
                </div>
                <div className="card_info">
                    <span>TICAT</span>
                    <p>지역 축제안내 서비스</p>
                </div>
            </div>
            <div className="card_list">
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
            </div>
            <div className="arrow-right">
                <span></span>
            </div>
            <button className="button-motion">More Portfolio</button>
        </BannerSlider>
  );
}

const BannerSlider = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-left: 70px;

    .selected_card{
        display: flex;
    }

    .card {
        width: 160px;
        height: 90px;
        border-radius: 10px;
        background: var(--color-main-003);
    }

    .card_info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 30px;
        
        span{
            font-family: 'GmarketB';
            font-size: 1.5rem;
            margin-bottom: 10px;
        }
        p{
            color: var(--color-main-002)
        }
    }

    .card_list{
        display: flex;
        /* border:1px solid red; */
        >* {
            margin-left: 20px;
        }
        
    }
    
    @media (max-width: 1700px){
        
        .card_list {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            margin-left: 30px;
            >* {
            margin: 5px;
        }
        }

        .card_list>.card {
        width: 100px;
        height: 100px;
        border-radius: 10px;
        background: var(--color-main-003);
        }
    }

    @media (max-width: 1600px){
        .card_list {
            max-width: 100px;
            min-width: 100px;
        }
        .card_list>.card {
        width: 40px;
        height: 40px;
        border-radius: 10px;
        background: var(--color-main-003);
        }
    }

    .arrow-right{
        position: relative;
        width: 10%;
        min-width: 50px;
        height: 1px;
        background-color: var(--color-main-002);
        margin: 30px;
    }

    .arrow-right::before{
        content: "";
        position: absolute;
        transform: rotate(45deg);
        right: 1px;
        top: -8px;
        width: 16px;
        height: 16px;
        border-top: 1px solid var(--color-main-002);
        border-right: 1px solid var(--color-main-002);
    }




    /* button design */
    .button-motion {
        width: 250px;
        height: 70px;
        background-color: rgba(0,0,0,0);
        border: 2px solid var(--color-main-002);
        color: var(--color-main-002);
        font-size: 1.2rem;
        font-family: 'GmarketL';
    }
`
