import { useRef, useState, useEffect } from 'react';
import userProfile from './assets/userProfile.jpg'
import "./index.css";
import mainBodyBg from './assets/mainBodyBg.webp'
import imageBackgroundImage1 from './assets/imageBackgroundImage1.jpeg'
import imageBackgroundImage2 from './assets/imageBackgroundImage2.jpeg'
import imageBackgroundImage3 from './assets/imageBackgroundImage3.jpeg'
// import imageBackgroundImage4 from './assets/imageBackgroundImage4.jpeg'

// header
function Header({ bgValue, deleteValue }) {

    const [isSettings, setIsSettings] = useState(false);
    // const [active, setActive] = useState("");
    // const [lastSeenTime, setLastSeenTime] = useState("");

    let bgRef = useRef(null);
    let deleteRef = useRef(null);

    function showTitle() {
        setIsSettings(!isSettings);
    }

    // function headerCurrentTime() {


    //     setLastSeenTime(timeString);

    //     // only call if headTime is actually passed
    //     // if (typeof headTime === 'function') {
    //     //     headTime(timeString);
    //     // }
    // }

    // useEffect(() => {
    //     headerCurrentTime();
    // }, [])

    let d = new Date();
    let hours = d.getHours();
    hours = hours + "";

    let minutes = d.getMinutes();
    minutes = minutes + "";
    let timeString = `${hours.padStart(2, 0)}:${minutes.padStart(2, 0)}`;

    return (
        <>
            <div className="headerMain">
                <div style={{ padding: "0.4rem 2rem 0.4rem 1.2rem" }}>
                    <section>
                        {/* user profile image */}
                        <img id="userProfile" src={userProfile} alt="" />

                        {/* user details */}
                        <div className="user-meta">
                            <div id="userDetail">
                                <div id="userName">Mehul Nawal</div>
                                <div id="sendDIv">
                                    Last seen today at <span id="lastSeen">{timeString}</span>
                                </div>

                            </div>

                            <section className="header-icons">
                                <i className="fa-solid fa-gear" onClick={showTitle}></i>
                            </section>
                        </div>
                    </section>
                </div>
            </div>

            <div className={isSettings ? "settings" : "hideSetting"}  >

                <div id="title" onClick={showTitle}>
                    <h2>Settings</h2>
                    <i class="fa-solid fa-xmark" ></i>
                </div>

                <div id="functionalityHead">
                    <div id="deleteChat" onClick={() => {
                        deleteValue("yes")
                    }} ref={deleteRef}>
                        <h3>Delete Chat</h3>
                        <i className="fa-solid fa-trash-xmark"></i>
                    </div>
                </div>

                <div id="chatBackground">
                    <h4>Chat Background</h4>

                    {/* solid colors */}
                    <div className="solidColors">
                        <h5>Solid Color</h5>
                        <div className="solidColoBody">
                            <div className='colorBox' ref={bgRef} id='cadetblue' style={{ backgroundColor: "cadetblue" }}
                                onClick={() => {
                                    bgValue("cadetblue")
                                }}
                            >
                            </div>

                            <div className='colorBox' id='burlywood' style={{ backgroundColor: "burlywood" }}
                                ref={bgRef}
                                onClick={() => {
                                    bgValue("burlywood")
                                }
                                }
                            ></div>

                            <div className='colorBox' id='chocolate' style={{ backgroundColor: "chocolate" }}
                                ref={bgRef}
                                onClick={() => bgValue("chocolate")}
                            ></div>

                            <div className='colorBox' id='cornflowerblue' style={{ backgroundColor: "cornflowerblue" }}
                                ref={bgRef}
                                onClick={() => bgValue("cornflowerblue")}
                            ></div>
                            {/* <div className='colorBox' id='default'></div> */}
                        </div>
                    </div>

                    {/* image backgrounds */}
                    <div className="solidColors">
                        <h5>Image Background</h5>
                        <div className="solidColoBody imageBackgrounds">
                            <div className='colorBox' id="default"
                                onClick={() => bgValue("bg0")}>
                                <img draggable="false" src={mainBodyBg} alt="" />
                            </div>

                            <div className='colorBox' id='default'
                                onClick={() => bgValue("bg1")}>
                                <img draggable="false" src={imageBackgroundImage1} alt="" />
                            </div>

                            <div className='colorBox' id='default'
                                onClick={() => bgValue("bg2")}>
                                <img draggable="false" src={imageBackgroundImage2} alt="" />
                            </div>

                            <div className='colorBox' id='default'
                                onClick={() => bgValue("bg3")}>
                                <img draggable="false" src={imageBackgroundImage3} alt="" />
                            </div>

                            {/* <div className='colorBox' id='default'>
                                <img draggable="false" src={imageBackgroundImage4.jpeg} alt="" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};
export default Header;

// footer
export function Footer({ userInputValue }) {

    let userInput = useRef(null);
    let sendIcon = useRef(null);

    function sendMessage() {
        let value = userInput.current.value.trim();
        if (value !== '') {
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
                <i className="fa-solid fa-play" ref={sendIcon} id='sendIcon'
                    onClick={sendMessage}></i>
                {/* </div> */}
            </div>
        </div >
    );
}

// main body 
import MainMessage, { UserMessageUI, MoreReply, SkillsReply, ResumeReply, EducationReply, AddressReply, ContactReply, ProjectReply, OtherReply } from './chatComponent'
export function MainBody() {

    const bottomOfBody = useRef(null);

    const [isComponent, setIsComponent] = useState([]);
    let body = useRef(null);

    function handleBg(value) {

        const solidBgClasses = [
            "solidColorCadetblue",
            "solidColorBurlywood",
            "solidColorChocolate",
            "solidColorCornflowerblue",
            "imageBackgroundImg0",
            "imageBackgroundImg1",
            "imageBackgroundImg2",
            "imageBackgroundImg3",
        ];

        body.current.classList.remove(...solidBgClasses);

        if (value == "cadetblue") {
            body.current.classList.add("solidColorCadetblue");
        }
        else if (value === "burlywood") {
            body.current.classList.add("solidColorBurlywood");
        }
        else if (value === "chocolate") {
            body.current.classList.add("solidColorChocolate");
        }
        else if (value === "cornflowerblue") {
            body.current.classList.add("solidColorCornflowerblue");
        }
        else if (value === "bg0") {
            body.current.classList.add("imageBackgroundImg0");
        }
        else if (value === "bg1") {
            body.current.classList.add("imageBackgroundImg1");
        }
        else if (value === "bg2") {
            body.current.classList.add("imageBackgroundImg2");
        }
        else if (value === "bg3") {
            body.current.classList.add("imageBackgroundImg3");
        }
    }

    function handleMessage(value) {
        let message = value.toLowerCase().trim();

        // Handle user input with audio
        setIsComponent((value) => {
            return [...value, <UserMessageUI message={message}></UserMessageUI>]
        })
        sound();

        // Handle bot output with a delay
        setTimeout(() => {
            let replyComponent = null;
            if (message == "skills" || message == "skill") {
                replyComponent = <SkillsReply></SkillsReply>;
            }
            else if (message == "project" || message == "projects") {
                replyComponent = <ProjectReply></ProjectReply>;
            }
            else if (message == "resume" || message == "cv") {
                replyComponent = <ResumeReply></ResumeReply>;
            }
            else if (message == "more") {
                replyComponent = <MoreReply></MoreReply>;
            }
            else if (message == "contact" || message == "contacts") {
                replyComponent = <ContactReply></ContactReply>;
            }
            else if (message == "address") {
                replyComponent = <AddressReply></AddressReply>;
            }
            else if (message == "education") {
                replyComponent = <EducationReply></EducationReply>;
            }
            else {
                replyComponent = <OtherReply></OtherReply>;
            }

            setIsComponent((prev) => {
                return [...prev, replyComponent];
            })
        }, 1000);
    }

    useEffect(() => {
        if (bottomOfBody.current) {
            bottomOfBody.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [isComponent]);

    function deleteChat(value) {
        if (value) {
            const confirmDelete = window.confirm("Are you sure you want to delete Chat?");
            if (confirmDelete) {
                setIsComponent([]);
            }
        }
    }

    return (
        <div className="mainBody" ref={body}>
            <Header bgValue={handleBg} deleteValue={deleteChat} />
            < MainMessage />
            {isComponent}
            < Footer userInputValue={handleMessage} />
            <div ref={bottomOfBody}></div>
        </div>
    )
}

function sound() {
    let soundEffect = new Audio('./audio/whatsappNotificationTone.mp3');
    soundEffect.play();
}