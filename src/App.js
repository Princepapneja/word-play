
import './App.css';
import React,{useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Logics from './components/Logics';
import Alert from './components/Alert';


function App() {
  const [mode, setmode] = useState('light');
  const changeMod= ()=> {
  if(mode==='light'){
    setmode('dark')
    document.body.style.backgroundColor="#263e43";
    document.body.style.color="white";
    showAlert("Dark Mode is Enabled Successfully","success")
    setTimeout(() => {
      showAlert(null,null)
      
    }, 1000);
  }else{
    setmode('light')
    document.body.style.backgroundColor="white";
    document.body.style.color="black";
    showAlert("Light Mode is Enabled Successfully","success")
    setTimeout(() => {
      showAlert(null,null)
      
    }, 1000);
  }
  }
  const [alert, setalert] = useState(null);
const showAlert=(message,type)=>{
  setalert({
msg:message,
type:type
  })
}

  return (
    <>
<Navbar mode={mode} changeMod={changeMod}/>
<Alert alert={alert}/>
<Logics alert={showAlert}/>
 </>
  );
}

export default App;
