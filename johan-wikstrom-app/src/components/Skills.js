import DataManager from "./DataManager";
import data from '../data.json';

function Skills(){
    return(
        <div className="Dialog-container">
            <DataManager className="Dialog-text" data={data.skills}/>
        </div>
    )
}

export default Skills