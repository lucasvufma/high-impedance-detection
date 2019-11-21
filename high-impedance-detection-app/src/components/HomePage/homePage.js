import React from 'react';
import InteractiveMap from '../InteractiveMap/interactiveMap'
import firebase from '../firebase'
import { getThemeProps } from '@material-ui/styles';
import { withRouter } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import DenseAppBar from '../Navbar/navbar';


function Home(props){
    var objectJson = [
        { Fase1: 'ON', Fase2:'ON',Fase3: 'ON' },
        { Fase1: 'ON', Fase2:'ON',Fase3: 'ON' },
        { Fase1: 'ON', Fase2:'OFF',Fase3: 'ON' },
        { Fase1: 'OFF', Fase2:'OFF',Fase3: 'ON' },
        { Fase1: 'OFF', Fase2:'OFF',Fase3: 'ON' }
      ];
     
    const [object, setObject] = React.useState(objectJson);

    function chaos(oldObject){
        var newObject = JSON.parse(JSON.stringify(oldObject));
        var random = Math.floor(Math.random() * 10);
       // console.log(random);
        for(var i=0;i<=random;i++){
            var index = Math.floor(Math.random()*5);
            var faseToSet="Fase"+((Math.floor(Math.random()*3))+1);
            var willOnOrOff = Math.floor(Math.random()*2);
         //   console.log(willOnOrOff);
            if(willOnOrOff==1){
              //  console.log(faseToSet);
              //  console.log('true');
               switch(faseToSet){
                    case "Fase1":
                    //    console.log(faseToSet);
                        newObject[index].Fase1="OFF";
                     //   console.log(newObject[index]);
                     //   console.log(newObject.Fase1);
                        break;
                    case "Fase2":
                        newObject[index].Fase2="OFF";
                        break;
                    case "Fase3":
                        newObject[index].Fase3="OFF";
                        break;
                }
            } else if(willOnOrOff==0){
                switch(faseToSet){
                    case "Fase1":
                        newObject[index].Fase1="ON";
                        break;
                    case "Fase2":
                        newObject[index].Fase2="ON";
                        break;
                    case "Fase3":
                        newObject[index].Fase3="ON";
                        break;
                    }
                }
            }
            return newObject;
        }

    
    const handleSimulation = () =>{
        var modifiedObject = chaos(objectJson);
        //console.log(modifiedObject);
        setObject((modifiedObject));
        
    }
    const { classes } = props
    if (!(firebase.getCurrentUsername())){
        alert('Login First!');
        props.history.replace('/');
        return null;
    }
    return(
        <div>
        <DenseAppBar DispatchSimulation={handleSimulation}/>
        <InteractiveMap onChange={handleSimulation} objectFases={object}/>
        </div>
    );
}


export default withRouter(withStyles()(Home));