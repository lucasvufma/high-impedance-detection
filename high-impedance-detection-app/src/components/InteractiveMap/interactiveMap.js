import React from 'react';
import './interactiveMap.css';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';





const useStyles = makeStyles(theme => ({
  root: {
    height: 180,
  },
  wrapper: {
    width: 200 + theme.spacing(2),
    height: 200 + theme.spacing(2),
  },
  paper: {
    zIndex: 1,
    textAlign: 'center',
    position: 'relative',
    margin: theme.spacing(1),
    padding: 3,
  
  },
  svg: {
    width: 200,
    height: 200,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  green:{
    color: '#00ff09'
  },
  red: {
    color: '#ff0000'
  }
 
  },
}));

export default function InteractiveMap() {
  const classes = useStyles();
  const [fases, setFases] = React.useState([
    { Fase1: 'ON', Fase2:'ON',Fase3: 'ON' },
    { Fase1: 'ON', Fase2:'ON',Fase3: 'ON' },
    { Fase1: 'ON', Fase2:'OFF',Fase3: 'ON' },
    { Fase1: 'OFF', Fase2:'OFF',Fase3: 'ON' },
    { Fase1: 'OFF', Fase2:'OFF',Fase3: 'ON' }
  ]);

//Essa lógica precisa ser refatorada, tou repetindo código!
    const [checked, setChecked] = React.useState(false);
    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);
    const [checked4, setChecked4] = React.useState(false);

  //Paulo Freire
    const handleChange = () => {
      setChecked(prev => !prev);
    };
  // Prédio Ed.Fisica
    const handleChange1 = () => {
      setChecked1(prev => !prev);
    };
  //Prédio BICT/ENG
    const handleChange2 = () => {
      setChecked2(prev => !prev);
    };
  // IEE
    const handleChange3 = () => {
      setChecked3(prev => !prev);
    };
  // SUBESTAÇÃO1
  const handleChange4 = () => {
    setChecked4(prev => !prev);
  };





  
  
  return (
  <div class="appContainer"> 
    <div class="wraper">
      <div class="table">

      
      <div class="build1">
      <div className={classes.root}>
            <div className={classes.wrapper}>
              
            
              <FormControlLabel
                id="tohide"   
                control={<Switch checked={checked2} onChange={handleChange2} />}
                label="Show"
              />
              <Slide direction="up" in={checked2} mountOnEnter unmountOnExit>
                <Paper elevation={4} className={classes.paper}>
                  <h3>Predio BICT/ENG</h3>
                  <p>
                  {Object.keys(fases[2])[0]+': '}<span className={fases[2].Fase1=='ON' ? "on" : "off"}>{fases[2].Fase1}</span></p>
                  <p>{Object.keys(fases[2])[1]+': '}<span className={fases[2].Fase2=='ON' ? "on" : "off"}>{fases[2].Fase2}</span></p>
                  <p>{Object.keys(fases[2])[2]+': '}<span className={fases[2].Fase3=='ON' ? "on" : "off"}>{fases[2].Fase3}</span></p>
                </Paper>
              </Slide>
            
            </div>
          </div>
        </div>


        <div class="build2">
          <div className={classes.root}>
            <div className={classes.wrapper}>
              
            
              <FormControlLabel
                id="tohide"            
                control={<Switch checked={checked1} onChange={handleChange1} />}
                label="Show"
              />
              <Slide direction="up" in={checked1} mountOnEnter unmountOnExit>
                <Paper elevation={4} className={classes.paper}>
                  <h3>Predio Ed.Física</h3>
                  <p>
                  {Object.keys(fases[1])[0]+': '}<span className={fases[1].Fase1=='ON' ? "on" : "off"}>{fases[1].Fase1}</span></p>
                  <p>{Object.keys(fases[1])[1]+': '}<span className={fases[1].Fase2=='ON' ? "on" : "off"}>{fases[1].Fase2}</span></p>
                  <p>{Object.keys(fases[1])[2]+': '}<span className={fases[1].Fase3=='ON' ? "on" : "off"}>{fases[1].Fase3}</span></p>
                </Paper>
              </Slide>
            
            </div>
          </div>
        </div>


      <div class="build3">
        <div className={classes.root}>
          <div className={classes.wrapper}>
            
          
            <FormControlLabel
            id="tohide"
              control={<Switch checked={checked} onChange={handleChange} />}
              label="Show"
            />
            <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
              <Paper elevation={4} className={classes.paper}>
                <h3>Paulo Freire</h3>
                <p>
                {Object.keys(fases[0])[0]+': '}<span className={fases[0].Fase1=='ON' ? "on" : "off"}>{fases[0].Fase1}</span></p>
                <p>{Object.keys(fases[0])[1]+': '}<span className={fases[0].Fase2=='ON' ? "on" : "off"}>{fases[0].Fase2}</span></p>
                <p>{Object.keys(fases[0])[2]+': '}<span className={fases[0].Fase3=='ON' ? "on" : "off"}>{fases[0].Fase3}</span></p>
              </Paper>
            </Slide>
          
          </div>
        </div>
      </div>

      
        <div class="build4">
          <div className={classes.root}>
            <div className={classes.wrapper}>
              
            
              <FormControlLabel
                id="tohide"   
                control={<Switch checked={checked3} onChange={handleChange3} />}
                label="Show"
              />
              <Slide direction="up" in={checked3} mountOnEnter unmountOnExit>
                <Paper elevation={4} className={classes.paper}>
                  <h3>IEE</h3>
                  <p>
                  {Object.keys(fases[3])[0]+': '}<span className={fases[3].Fase1=='ON' ? "on" : "off"}>{fases[3].Fase1}</span></p>
                  <p>{Object.keys(fases[3])[1]+': '}<span className={fases[3].Fase2=='ON' ? "on" : "off"}>{fases[3].Fase2}</span></p>
                  <p>{Object.keys(fases[3])[2]+': '}<span className={fases[3].Fase3=='ON' ? "on" : "off"}>{fases[3].Fase3}</span></p>
                </Paper>
              </Slide>
            
            </div>
          </div>
        </div>


        <div class="build5">
          <div className={classes.root}>
            <div className={classes.wrapper}>
              
            
              <FormControlLabel
                id="tohide"   
                control={<Switch checked={checked4} onChange={handleChange4} />}
                label="Show"
              />
              <Slide direction="up" in={checked4} mountOnEnter unmountOnExit>
                <Paper elevation={4} className={classes.paper}>
                  <h3>SUB-ESTAÇÃO 1</h3>
                  <p>
                  {Object.keys(fases[4])[0]+': '}<span className={fases[4].Fase1=='ON' ? "on" : "off"}>{fases[4].Fase1}</span></p>
                  <p>{Object.keys(fases[4])[1]+': '}<span className={fases[4].Fase2=='ON' ? "on" : "off"}>{fases[4].Fase2}</span></p>
                  <p>{Object.keys(fases[4])[2]+': '}<span className={fases[4].Fase3=='ON' ? "on" : "off"}>{fases[4].Fase3}</span></p>
                </Paper>
              </Slide>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}