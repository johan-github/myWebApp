import DataManager from "./DataManager";
import data from '../data.json';

function Portfolio(){
    return(
        <div className="Dialog-container">
            <DataManager className="Dialog-text" data={data.portfolio} />
        </div>
    )
}

export default Portfolio