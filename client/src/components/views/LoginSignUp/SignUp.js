import React from "react";
import styles from '../LoginSignUp/SignUp.css'

function SignUp() {

    return (
        <div className="SignUpAll">
            <div className="SignUpTitle">회원가입</div>
            <form action="/SignUp_post" method="POST" enctype="multipart/form-data">
                <table>
                    <tr>
                        <td>이름</td>
                        <td className="Second"><input name="name" type="text"></input></td>
                    </tr>
                    <tr>
                        <td >이화이언 아이디</td>
                        <td className="Second" id="HaveBtn"><input name="ewhaianID" type="text"></input> <button className="CheckDuplicate">중복 확인</button></td>
                    </tr>
                    <tr>
                        <td>전화번호</td>
                        <td className="Second"><input name="phonenum" type="tel"></input></td>
                    </tr>
                    <tr>
                        <td>비밀번호</td>
                        <td className="Second"><input name="pwd" type="password"></input></td>
                    </tr>
                </table>
                <div>
                    <input type="submit" className="SubmitBtn" value="확인" />
                </div>
            </form>
        </div>
    );
}

export default SignUp;
