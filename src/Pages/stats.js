import {
    Link
} from "react-router-dom";
import ScrapSteam from "../Componant/Scraper";


function Stats() {
    return (
        <div className="App">
            stats
            <ScrapSteam></ScrapSteam>
            <Link to="/Home">Home</Link>
        </div>
    );
}

export default Stats;
