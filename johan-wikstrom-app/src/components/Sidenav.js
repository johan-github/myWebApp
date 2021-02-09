import profilePicture from '../img/profile-pic.jpg'
import { personalinfo, routes, links } from '../data.json'
import { Link } from 'react-router-dom'

function PrintPicture() {
  return (
    <div className="Sidenav-top-picture-div">
      <img
        src={profilePicture}
        alt="profile-pic"
        className="Sidenav-top-picture"
      ></img>
    </div>
  )
}


function Sidenav() { // (props)
  return (
    <div className="Sidenav-container">
      <PrintPicture />
      
      <Link className="Sidenav-general-href-styling" to="/">Introduction</Link><br/>
      <Link className="Sidenav-general-href-styling" to="/about">About</Link><br/>
      <Link className="Sidenav-general-href-styling" to="/portfolio">Portfolio</Link><br/>
      <Link className="Sidenav-general-href-styling" to="/skills">Skills and Experience</Link>
      
    </div>
  )
}

export default Sidenav

// Comments

// Before React Router
/*    <DataManager data={personalinfo} type="personalinfo" />
      <DataManager data={routes} type="routes" setCurrentPage={props.setCurrentPage} />
      <DataManager data={links} type="links" /> */




// <input value={value} onChange={(e) => setValue(e.target.value)}/>
// const [value, setValue] = useState('')

/* <div className="Sidenav-middle-container">
<DataManager data={links} type={links.type} />
</div> */