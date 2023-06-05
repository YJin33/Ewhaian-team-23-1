import React from "react";

function AdminLogin() {


    return(
        <div>
            <div className="admin_login_container">
                <div className="admin_login_inner_container">
                    <div className="admin_login_title">ADMIN</div>
                    <div className="admin_login_form_wrapper">
                        <input
                        type="password"
                        name="password"
                        className="admin_login_form"
                        placeholder="관리자 키를 입력하세요."
                        onChange={handleInputPw}
                        maxLength="10"
                        required
                        />
                        <div className="admin_login_button">
                            <button type="button" onClick={onClick} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

