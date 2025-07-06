import "./index.css";

// header
function Header() {
    return (
        <div className="headerMain">
            <div style={{ padding: "0.4rem 1.2rem 0.4rem 1.2rem" }}>
                <section>
                    {/* user profile image */}
                    <img id="userProfile" src="src/assets/userProfile.jpg" alt="" />

                    {/* user details */}
                    <div className="user-meta">
                        <div id="userDetail">
                            <div id="userName">Mehul Nawal</div>
                            <div id="sendDIv">
                                Last seen today at <span id="lastSeen">16:14</span>
                            </div>
                        </div>

                        <section className="header-icons">
                            <i className="fa-solid fa-gear"></i>
                            <i className="fa-solid fa-trash-xmark"></i>
                        </section>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default Header;

// footer
export function Footer() {
    return (
        <div className="footer">
            <input
                id="userInput"
                type="text"
                name="userInput"
                placeholder="Type a message"
            />
            <i className="fa-solid fa-play"></i>
        </div>
    );
}

// main body 
export function MainBody() {
    return (
        <div className="mainBody">
        </div>
    )
}
