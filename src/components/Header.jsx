import "./Header.css"
import  {useTranslation} from "react-i18next"
import LanguageSwitcher from "./LanguageSwitcher"

function Header(){
    const {t} = useTranslation("navbar");


return(
    <header className="header">
        <div className="logo">
            {t("logo")}
        </div>
        <nav className="nav">
            <a href="/">
            {t("home")}</a>

              <a href="/">
            {t("about")}</a>

              <a href="/">
            {t("contact")}</a>

        </nav>
        <div className="rightSide">
            <button className="loginBtn">
                {t("login")}

            </button>
            <LanguageSwitcher/>

        </div>

    </header>
);
}
export default Header