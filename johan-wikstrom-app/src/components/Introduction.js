import DataManager from './DataManager'
import data from '../data.json'


function Introduction(){

    return(
        <div className="Dialog-container">
            <DataManager className="Dialog-text" data={data.introduction}></DataManager>
        </div>
    )
}

export default Introduction