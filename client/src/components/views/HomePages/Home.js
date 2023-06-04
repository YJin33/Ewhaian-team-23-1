import React from "react";
import styles from '../HomePages/Home.css';

function Home() {

    return (
        <div className="Background">
            <div className="Headlines">
                <div className="HomeTitle">비원 밈 전시회</div>
                <div className="Buttons">
                    <button className="GoSignup">회원가입</button>
                    <button className="GoLogin">로그인</button>
                </div>
            </div>
            <div className="TextForExplain">
                내용 설명
            </div>
            <div className="GoToMims">
                <div className="GoToBrowse">작품 보러가기</div>
                <div className="GoToUpload">작품 올리기</div>
            </div>
        </div>
    );
}

export default Home;
