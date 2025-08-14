import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import ocrimg from "../5264470.png"
const LandingPage = () => {
    const navigate = useNavigate();
    console.log("molo")
    return (
        <div className="landing-wrapper">
            <header className="landing-header">
                <div className="logo">OCR Extractor</div>
                <nav>
                    <ul>
                        <li><a href="#about">What is OCR?</a></li>
                        <li><a href="#usecases">Use Cases</a></li>
                        <li><button onClick={() => navigate("/extractor")}>Get Started</button></li>
                    </ul>
                </nav>
            </header>
            <section className="hero-section">
                <div className="hero-text">
                    <h1>Turn Images into Actionable Text</h1>
                    <p>
                        Extract text from scanned documents, handwritten notes, receipts, and screenshots with our simple OCR tool — no sign-up required.
                    </p>
                    <button className="primary-btn" onClick={() => navigate("/extractor")}>
                        Try It Now
                    </button>
                </div>
                <div className="hero-image">
                    <img
                        src={ocrimg}
                        alt="OCR Visual"
                    />
                </div>
            </section>
            <section className="about-section" id="about">
                <h2>What is OCR?</h2>
                <p>
                    Optical Character Recognition (OCR) is a technology that converts text within images or scanned documents into machine-readable text.
                    It allows you to digitize printed or handwritten content — enabling easier editing, searching, and data storage.
                </p>
            </section>
            <section className="usecase-section" id="usecases">
                <h2>Where Can You Use OCR?</h2>
                <ul>
                    <li>📄 Convert scanned PDFs into editable documents</li>
                    <li>🛒 Extract receipts for expense tracking</li>
                    <li>📝 Digitize handwritten notes for easier sharing</li>
                    <li>📷 Read text from screenshots or social media images</li>
                    <li>🌐 Translate foreign signs or printed materials</li>
                </ul>
            </section>
            <footer className="landing-footer">
                <p>© {new Date().getFullYear()} OCR Extractor — Built with 💻 ReactJS & CSS</p>
                <p>
                    Contact: <a href="mailto:support@ocrextractor.com">hamza@ocrextractor.com</a>
                </p>
            </footer>
        </div>
    );
};

export default LandingPage;
