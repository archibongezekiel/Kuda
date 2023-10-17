import { useState } from "react";
import "./style.scss";

function Display() {
  // const change = (e) => {
  //   const { name, value } = e.target;
  //   return setName((values) => ({ ...values, [e.target.name]: value }));
  // };

  const [g, f] = useState("visibility");
  const [text, h] = useState("password");
  const n = () => {
    h("text");
    f("visibility_off");
  };
  const o = () => {
    h("password");
    f("visibility");
  };

  return (
    <>
      <div className="navbar">
        <a href="https://app.kuda.com/" id="kuda-link">
          <img src="kudalogo.png" width={"200px"} id="logo" alt="logo" />
        </a>
        {/*  */}
        <div className="create-account-container">
          <a href="https://archibongezekiel.github.io/Myaza/myaza.html">
            <p id="open-account">Open an Account</p>
          </a>
        </div>
      </div>

      <div className="input-container">
        <div id="warning-text">
          <p id="page-text">
            Please, be sure that you’re on
            <a href="https://app.kuda.com/" id="confirm-link">
              https://app.kuda.com
            </a>
          </p>
        </div>
        {/* */}
        <div className="form-container-div">
          <div className="container">
            {""}
            <div className="header-container">
              <h3 id="header-1">Sign In to Kuda</h3>
              <p id="sign-up-account-text">
                To sign in, please type in the email address linked to your Kuda
                account.
              </p>
            </div>
            <form>
              <label className="label-1">
                <p id="email-txt"> Email Address</p>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  id="email-input"
                />
              </label>
              <label className="label-1">
                <p id="password-txt">Password</p>
                <div id="password-container">
                  <input
                    type={text}
                    name="password"
                    placeholder="••••••••••"
                    id="password-input"
                    className="password-input"
                  />
                  <span
                    class="material-symbols-outlined"
                    id="vis-icon"
                    onClick={n}
                    onDoubleClick={o}
                  >
                    {g}
                  </span>
                </div>
              </label>
              <div className="">
                <p className="forget-password">
                  Forgot Password?
                  <a href=" " id="reset-link">
                    Reset it
                  </a>
                </p>
                <button id="sign-button">Sign In</button>
                <p className="download-txt">
                  If you don't have a Kuda account, download the app
                  <a
                    href="https://icons8.com/icons/set/html-closing-tag"
                    id="download-link"
                  >
                    here
                  </a>
                  and open an account in a few minutes.
                </p>
              </div>
            </form>
          </div>
          <img src="image.png" width={"600px"} id="picture" alt="page" />
        </div>
        {""}
      </div>
      <div className="live-chat">
        <span id="live-chat-icon">
          <span class="material-symbols-outlined" id="chat-icon">
            chat
          </span>
        </span>
      </div>
    </>
  );
}
export default Display;
