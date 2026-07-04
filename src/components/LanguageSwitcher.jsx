import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

const languages = [
    {
        code: "uz",
        name: "Uz O'zbek",
    },
    {
        code: "en",
        name: "En English",
    },
    {
        code: "ru",
        name: "Ru Русский",
    },
    {
        code: "fr",
        name: "Fr French",
    }
];

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const [open, setOpen] = useState(false);

    const dropdownRef = useRef(null);

    const currentLanguage = 
        languages.find(
            (item) => item.code === i18n.resolvedLanguage
        ) || languages[0];

    const handleLanguage = (code) => {
        i18n.changeLanguage(code);
        setOpen(false);
    };

    // Dropdown tashqarisiga bosilganda yopiladi
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    }, []);

    // ESC bosilganda yopiladi
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === "Escape") {
                setOpen(false);
            }
        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, []);

    return (
        <div className="language" ref={dropdownRef}>
            <div 
                className="languageHeader" 
                onClick={() => setOpen(!open)}
            >
                <span>{currentLanguage.name}</span>

                <span>
                    <span className={`arrow ${open ? "rotate" : ""}`}>
                        ▼
                    </span>
                </span>
            </div>

            {open && (
                <div className="languageMenu">
                    {languages.map((item) => (
                        <div
                            key={item.code}
                            className={`languageItem ${
                                i18n.resolvedLanguage === item.code
                                    ? "activeLanguage"
                                    : ""
                            }`}
                            onClick={() => handleLanguage(item.code)}
                        >
                            {item.name}

                            {i18n.resolvedLanguage === item.code && (
                                <span> ✓</span>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default LanguageSwitcher;
