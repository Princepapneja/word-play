import React from "react";
function Navbar(props) {
  // const [mode, setmode] = useState('light');
  // const changeMod= ()=> {
  // if(mode==='light'){
  //   setmode('dark')
  //   document.body.style.backgroundColor="black";
  // }else{
  //   setmode('light')
  //   document.body.style.backgroundColor="white";
  // }
  
  return (
    <>
      <nav className={`navbar navbar-expand-lg
       navbar-${props.mode} bg-${props.mode} `}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            WordPlay
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/#">
                Home
              </a>
              <a className="nav-link" href="/#">
                Features
              </a>
            </div>
            
          </div>
          <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                aria-checked="false"
                id="flexSwitchCheckDefault"
                onClick={props.changeMod}
            
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Dark Mode
              </label>
            </div>
        </div>
        
      </nav>
    </>
  );
}

export default Navbar;
