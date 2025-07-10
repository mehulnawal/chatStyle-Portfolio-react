/*
1. Sound effect - user and automatic reply - both
2. the chat should create not replace by other
3. header icon - functionality 
4. delay add in my message 
5. update header with - typing and currentTime

*/

import { useRef, useState, useEffect } from 'react';
import userProfile from './assets/userProfile.jpg'
import "./index.css";

// header
function Header() {

    let d = new Date();
    let hours = d.getHours();
    hours = hours + "";

    let minutes = d.getMinutes();
    minutes = minutes + "";
    let currentTime = `${hours.padStart(2, 0)}:${minutes.padStart(2, 0)}`

    return (
        <div className="headerMain">
            <div style={{ padding: "0.4rem 1.2rem 0.4rem 1.2rem" }}>
                <section>
                    {/* user profile image */}
                    <img id="userProfile" src={userProfile} alt="" />

                    {/* user details */}
                    <div className="user-meta">
                        <div id="userDetail">
                            <div id="userName">Mehul Nawal</div>
                            <div id="sendDIv">
                                Last seen today at <span id="lastSeen">{currentTime}</span>
                            </div>
                        </div>

                        <section className="header-icons">
                            <i className="fa-solid fa-gear"></i>
                            <i className="fa-solid fa-trash-xmark"></i>
                            <i id='sunIcon' class="fa-solid fa-sun"></i>
                            <i id='moonIcon' class="fa-solid fa-moon"></i>
                        </section>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default Header;

// footer
export function Footer({ userInputValue }) {

    let userInput = useRef(null);
    let sendIcon = useRef(null);

    const sendMessage = () => {
        const value = userInput.current.value.trim();
        if (value != "") {
            userInputValue(value);
            userInput.current.value = "";
        }
    }

    function inputIsEmpty() {
        // let iElement = sendIcon.current.querySelector("i");

        if (userInput.current.value.trim() == "") {
            // sendIcon.current.style.color = "#ccc";
            // sendIcon.current.style.pointerEvents = "none";
            // sendIcon.current.style.pointerEvents = "none";
            // sendIcon.current.style.cursor = "not-allowed";
            sendIcon.current.style.visibility = "hidden";
            sendIcon.current.style.opacity = "0";
        }
        else {
            sendIcon.current.style.visibility = "visible";
            sendIcon.current.style.opacity = "1";
            // sendIcon.current.style.cursor = "pointer";
            // sendIcon.current.style.color = "skyblue";
            // sendIcon.current.style.pointerEvents = "all";
        };
    }

    return (
        <div className="footer">
            <div style={{ padding: "1rem 1rem 1rem 1rem" }}>
                <input
                    ref={userInput}
                    id="userInput"
                    type="text"
                    name="userInput"
                    placeholder="Type a message"
                    onInput={inputIsEmpty}
                    autoComplete="off"
                    maxLength="20"
                    onKeyDown={(e) => {
                        if (e.key == "Enter") {
                            sendMessage();
                        }
                    }}
                />
                {/* <div ref={sendIcon} id='sendIcon'> */}
                <i className="fa-solid fa-play" ref={sendIcon} id='sendIcon' onClick={sendMessage}
                ></i>
                {/* </div> */}
            </div>
        </div >
    );
}

// main body 
import MainMessage, { UserMessageUI, MoreReply, SkillsReply, ResumeReply, EducationReply, AddressReply, ContactReply, ProjectReply, OtherReply } from './chatComponent'
export function MainBody() {

    const [isComponent, setIsComponent] = useState("");

    function handleMessage(value) {
        let message = value.toLowerCase().trim();
        if (message == "skills") {
            setIsComponent(
                <>
                    <UserMessageUI message={message} />
                    <SkillsReply />
                </>
            )
        }
        else if (message == "resume") {
            setIsComponent(
                <>
                    <UserMessageUI message={message} />
                    <ResumeReply />

                </>
            )
        }
        else if (message == "contact") {
            setIsComponent(
                <>
                    <UserMessageUI message={message} />
                    <ContactReply />

                </>
            )
        }
        else if (message == "address") {
            setIsComponent(
                <>
                    <UserMessageUI message={message} />
                    <AddressReply />

                </>
            )
        }
        else if (message == "more") {
            setIsComponent(
                <>
                    <UserMessageUI message={message} />
                    <MoreReply />

                </>
            )
        }
        else if (message == "project") {
            setIsComponent(
                <>
                    <UserMessageUI message={message} />
                    <ProjectReply />

                </>
            )
        }
        else if (message == "education") {
            setIsComponent(
                <>
                    <UserMessageUI message={message} />
                    <EducationReply />

                </>
            )
        }
        else {
            setIsComponent(
                <>
                    <UserMessageUI message={message} />
                    <OtherReply />

                </>
            )
        }

    };

    return (
        <div className="mainBody">
            <MainMessage />
            {isComponent}
            <Footer userInputValue={handleMessage} />
        </div>
    )
}
