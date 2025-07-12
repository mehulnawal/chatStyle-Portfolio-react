import resumeSc from './assets/resumeSc.jpg'
import pdfIcon from './assets/pdfIcon.png'

// import CurrentTime form './chatComponent';
function MainMessage() {
    return (
        <>
            <div id="mainMessageHead">
                <div id="mainMessageBody">

                    <h4 style={{ display: "inline-block" }}>
                        👋 Hi, I'm <span id="name">Mehul Nawal</span> — a passionate Frontend Developer who loves crafting sleek, interactive web experiences using React, JavaScript, and modern UI tools.
                    </h4>

                    <h4 style={{ margin: "0px" }}>
                        I have 6 months of internship experience across two companies, where I worked on real-world projects using HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS.
                    </h4>

                    <h4 style={{ fontSize: "1.1rem", fontWeight: "normal" }}>
                        Send <em></em><strong>'more'</strong> to know more about me.
                    </h4>

                    <CurrentTime />
                    {/* <PlaySound /> */}
                </div>
            </div>
        </>
    )
}

export default MainMessage

// current time
export function CurrentTime() {

    let d = new Date();
    let hours = d.getHours();
    hours = hours + "";

    let minutes = d.getMinutes();
    minutes = minutes + "";
    let currentTime = `${hours.padStart(2, 0)}:${minutes.padStart(2, 0)}`

    return (
        <>
            <p id="currentTime">{currentTime}</p>
        </>
    )
}


// user message
export function UserMessageUI({ message = "" }) {
    return (
        <>
            <div id="userMessage">
                <div>{message}</div>
                <CurrentTime />
            </div>
        </>
    )
}

// more reply
export function MoreReply() {
    return (
        <div id="mainMessageHead">
            <div id="mainMessageBody">
                <h3>💬 Send a keyword to learn more about me:</h3>
                <ul id="">
                    <li> <strong className="keywords">skills</strong> – See the technologies and tools I work with </li>

                    <li> <strong className="keywords">resume</strong> – View or download my resume</li>

                    <li> <strong className="keywords">education</strong> – Know about my academic background</li>

                    <li> <strong className="keywords">address</strong> – Find out where I'm based</li>

                    <li> <strong className="keywords">contact</strong> –Get ways to connect with me</li>

                    <li> <strong className="keywords">projects</strong> – Explore my featured projects</li>
                </ul>
                <CurrentTime />
            </div>

        </div >
    )
}

// 6
// skills reply
export function SkillsReply() {
    return (
        <div id="mainMessageHead">
            <div id="mainMessageBody">
                <h3>🛠️ My Skills:</h3>
                <h4 style={{ fontWeight: "normal" }}>I specialize in building responsive and interactive user interfaces using:</h4>

                <ul>
                    <li>HTML, CSS, JavaScript</li>
                    <li>Bootstrap & Tailwind CSS</li>
                    <li>React.js</li>
                    <li>Basic knowledge of DSA, Git, and GitHub</li>
                </ul>

                <h4 style={{ fontWeight: "normal" }}>Always learning and improving to stay up-to-date with modern web technologies 🚀</h4>
                <CurrentTime />
            </div >
        </div>
    )
}

// resume 
export function ResumeReply() {
    return (
        <div id="mainMessageHead" >
            <div id="mainMessageBody">
                <h3>📄 My Resume:</h3>
                <h4>You can view or download my resume:</h4>
                <a style={{ textAlign: "center" }} href="public/Mehul Nawal Resume-2.pdf" download="Frontend Developer Mehul Nawal">
                    <div id="resume" style={{ width: "100%" }}>
                        <img style={{ borderRadius: "0.8rem", margin: "auto", width: "60%", height: "40%" }} src={resumeSc} alt="" />

                        <div style={{ marginTop: "-14px", display: "flex", alignItems: "center", gap: "20px", marginLeft: "3%", justifyContent: "center" }}>
                            <img style={{ width: "30px", height: "30px" }} src={pdfIcon} alt="" />
                            <h4 style={{ fontSize: "1.1rem" }}>Mehul Nawal.pdf</h4>

                            <i style={{ fontSize: "1.4rem", cursor: "pointer" }} class="fa-solid fa-circle-down"></i>
                        </div>
                    </div>
                </a>
                <CurrentTime />
            </div>
        </div >
    )
}

// education
export function EducationReply() {
    return (
        <div id="mainMessageHead" >
            <div id="mainMessageBody">
                <h3>🎓 My Education:</h3>
                <ol>

                    <li>
                        <h4 style={{ marginBottom: "0px" }}>💻Full Stack Development Course</h4>
                        <h4 style={{ marginTop: "5px", fontWeight: "normal" }}>Red & White Multimedia Education
                            2024 – 2025</h4>
                    </li>

                    <li>
                        <h4 style={{ marginBottom: "0px" }}>📚 Bachelor of Computer Applications (BCA)</h4>
                        <h4 style={{ marginTop: "5px", fontWeight: "normal" }}>Veer Narmad South Gujarat University (VNSGU)
                            2021 – 2024</h4>
                    </li>

                    <li>
                        <h4 style={{ marginBottom: "0px" }}>🏫 Higher Secondary (12th – Commerce)</h4>
                        <h4 style={{ marginTop: "5px", fontWeight: "normal" }}>Maheshwari Vidhyapeeth, Surat
                            Completed in 2021
                        </h4>
                    </li>
                </ol>
                <CurrentTime />
            </div>
        </div>
    )
}

// address 
export function AddressReply() {
    return (
        <div id="mainMessageHead" >
            <div id="mainMessageBody">
                <h3 style={{ marginBottom: "0px" }}>📍 My Address:</h3>
                <h4 style={{ marginTop: "10px" }}>Surat, Gujarat, India</h4>
                <h4><em>👉 Currently looking for opportunities in Surat and remote work.</em></h4>
                <CurrentTime />
            </div>
        </div>
    )
}

// contact 
export function ContactReply() {
    return (
        <div id="mainMessageHead" >
            <div id="mainMessageBody" className="contactReply">
                <h3 style={{ marginBottom: "0px" }}>📞 Contact Me:</h3>

                <a href="mailto:mehulnawal2904@gmail.com" id="email">
                    <i class="fa-solid fa-envelope"></i>
                </a>

                <a href="tel:9879216262" id="phone" >
                    <i class="fa-solid fa-phone-plus"></i>
                </a>

                <a href="https://github.com/mehulnawal" id="github" target="_blank">
                    <i class="fa-brands fa-github"></i>
                </a>

                <a href="https://www.linkedin.com/in/mehul-nawal-2b1492244/" id="linkedIn" target="_blank">
                    <i class="fa-brands fa-linkedin"></i>
                </a>

                <a href=" https://wa.me/9879216262" id="whatsApp" target="_blank">
                    <i class="fa-brands fa-whatsapp"></i>
                </a>
                <CurrentTime />
            </div>
        </div >
    )
}

// projects 
export function ProjectReply() {
    return (
        <div id="mainMessageHead" >
            <div id="mainMessageBody" className="projectReply">
                <h3 style={{ marginBottom: "0px" }}>💼 My Projects:</h3>
                <ol>
                    <li>
                        <h3 className="projectTitle">COVID-19 Global Tracker Web App</h3>
                        <h4 className="projectTech">📌 HTML, CSS, Vanilla JavaScript, Api</h4>

                        <div className="linkParent">

                            <a href="https://lnkd.in/dNkhsWPc" className="liveDemoLink" target="_blank">👁 View Live</a>

                            <a className="githubRepo" href="https://github.com/mehulnawal/corona-Api-js-project" target="_blank">
                                <i class="fa-brands fa-github"></i>
                                <span>GitHub</span></a>
                        </div>
                    </li>

                    <li>
                        <h3 className="projectTitle">Login & Sign-up</h3>
                        <h4 className="projectTech">📌 HTML, CSS, Vanilla JavaScript</h4>

                        <div className="linkParent">

                            <a href="https://form-validations-project-js.netlify.app/" className="liveDemoLink" target="_blank">👁 View Live</a>

                            <a className="githubRepo" href="https://github.com/mehulnawal/Form-validations-project-js" target="_blank">
                                <i class="fa-brands fa-github"></i>
                                <span>GitHub</span></a>
                        </div>
                    </li>

                    <li>
                        <h3 className="projectTitle">Rock-Paper-Scissors game</h3>
                        <h4 className="projectTech">📌 HTML, CSS, Vanilla JavaScript</h4>

                        <div className="linkParent">

                            <a href="https://rock-paper-scissors-project-js.netlify.app/" className="liveDemoLink" target="_blank">👁 View Live</a>

                            <a className="githubRepo" href="https://github.com/mehulnawal/rock-paper-scissors-project-js" target="_blank">
                                <i class="fa-brands fa-github"></i>
                                <span>GitHub</span></a>
                        </div>
                    </li>
                </ol>

                <div style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}>
                    <h4>For more project visit my -</h4>
                    <a href="https://github.com/mehulnawal" id="github" target="_blank">
                        <i class="fa-brands fa-github"></i>
                    </a>
                </div>
                <CurrentTime />
            </div>
        </div >
    )
}

// other 
export function OtherReply() {
    return (
        <div id="mainMessageHead" >
            <div id="mainMessageBody">
                <h3 style={{ marginBottom: "0px" }}>Hey I couldn't catch you ...😢</h3>
                <h4 style={{ marginTop: "10px", fontWeight: "normal" }}>Send '<strong>more</strong>' to know more about me.
                </h4>
                <CurrentTime />
            </div>
        </div>
    )
}