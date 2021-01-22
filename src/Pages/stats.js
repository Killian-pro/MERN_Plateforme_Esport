import {
    Link
} from "react-router-dom";
import ScrapSteam from "../Componant/Scraper";


function Stats() {
    return (
        <div>
            <Link to="/Home">Home</Link>

            <div className="containerNews">
                Les 10 premiers joueurs LOL
                    <ScrapSteam></ScrapSteam>
            </div>
        </div>
    );
}

export default Stats;
