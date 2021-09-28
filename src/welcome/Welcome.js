import './Welcome.css';
import Logo from '../img/chill.svg';
import { useTranslation } from 'react-i18next';

const Welcom = () => {

    const YoutubeLink = "https://www.youtube.com/embed/CfPxlb8-ZQ0";
    const YoutubeLink2 = "https://www.youtube.com/embed/lA1ItxM9yIE";

    const { t, i18n } = useTranslation();
    
    const handleClick = lang => {
        i18n.changeLanguage(lang)
    }

    return (
        <div className="welcomeMain">
            <div>
                <div className="logo"><img src={Logo} alt="logo"/></div>
            </div>
            <div>
                <div className="title">
                    {t("header.0")}
                </div>
                <br />
                <div className="text">
                    {t("header.1")}
                </div>
            </div>
            <div>
                <div className="youTubeVideo">
                    <iframe className="youtubeVideo1" src={YoutubeLink} title="YouTube video player"></iframe>
                    <iframe className="youtubeVideo2" src={YoutubeLink2} title="YouTube video player"></iframe>
                </div>
            </div>
            <div className="bottom">
                <div></div>
            </div>
                <button className="enButton" onClick={() => handleClick('en')}>EN</button>
                <button className="zhButton" onClick={() => handleClick('zh')}>ZH</button>
        </div>
    )
}

export default Welcom;