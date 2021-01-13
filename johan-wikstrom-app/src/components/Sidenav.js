import profilePicture from '../img/jw.jpeg'
// import sidenavBg from '../img/blue-bg.jpg'

            // ADD BELOW INTO FUNCTION
            /* <img
            src={sidenavBg}
            alt="sidenav-background"
            className="Sidenav-bg">
            </img> */

function Sidenav() {
    return (
        <div className="Sidenav-container">

            <img
            src={profilePicture}
            alt="profile-pic"
            className="Sidenav-top-picture"
            ></img>

            <div className="Sidenav-top-container">
                <p className="Sidenav-top-content">
                Top Content Information
                </p>
            </div>


            <div className="Sidenav-middle-container">
                <p className="Sidenav-middle-content">
                Middle Content Links
                </p>
            </div>


            <div className="Sidenav-bottom-container">
                <p className="Sidenav-bottom-content">
                Bottom Content Additional
                </p>
            </div>

            

        </div>
    )    
}

export default Sidenav

// Comments

