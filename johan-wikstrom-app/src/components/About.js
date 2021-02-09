import DataManager from "./DataManager";
import data from '../data.json';

function About(){
    console.log("ABOUT");
    return(
        <div className="Dialog-container">
            <DataManager className="Dialog-text" data={data.about}/>
        </div>
    )
}

export default About