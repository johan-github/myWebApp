import profilePicture from '../img/jw.jpeg'
import { personalinfo, routes, links } from '../data.json'
import DataManager from './DataManager'
// import Introduction from './Introduction'

function PrintPicture() {
  return (
    <div className="Sidenav-top-picture">
      <img
        src={profilePicture}
        alt="profile-pic"
        className="Sidenav-top-picture"
      ></img>
    </div>
  )
}


function Sidenav(props) {
  return (
    <div className="Sidenav-container">
      <PrintPicture />
      <DataManager data={personalinfo} type="personalinfo" />
      <DataManager data={routes} type="routes" setCurrentPage={props.setCurrentPage} />
      <DataManager data={links} type="links" />
    </div>
  )
}

export default Sidenav

// Comments

// <input value={value} onChange={(e) => setValue(e.target.value)}/>
// const [value, setValue] = useState('')

/* <div className="Sidenav-middle-container">
<DataManager data={links} type={links.type} />
</div> */