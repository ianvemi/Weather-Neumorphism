import React, { Fragment, useEffect, useState } from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Clock from 'react-live-clock';
import "./App.css";

function App() {

  let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ]

  let diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado"
  ]

  const [search, addSearch] = useState({
    pais: "",
    ciudad:""
  })

  let {pais, ciudad} = search;

  const [push, pushEntries] = useState(false);

  const [result, addResult] = useState({});

  // const [error, updateError] = useState(false);


  useEffect ( () =>{

    if (push){
      const conAPI = async () =>{

        const id = 'ef49f36d18b8e1fce8278986cdb61913'
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${id}&units=metric`
  
        const req = await fetch(url);
        const data = await req.json();
        if(data.cod){
          addResult(data.cod);
        }
        addResult(data);
        

        console.log(data)
        pushEntries(false);

        


      }
  
      conAPI();
    }
    

  },[push]);


  let date = new Date();

  return (
    <Fragment>
      
      

      <div className="app-container">
      <div className="Welcome">
      <div className="box-welcome">
      <p>{diasSemana[date.getDay()] +" "+ date.getDate() + " de " 
      + meses[date.getMonth()] + " de " + date.getFullYear()}</p>

      <Clock format="HH:mm:ss" interval={1000} ticking={true} />
      </div>
      
      </div>
        <div className="first-container">
          <div className="Header">
            <h1>Clima</h1>
          </div>
          <Form 
            search={search}
            addSearch={addSearch}
            push={push}
            pushEntries={pushEntries}
          />
        </div>

        <div className="second-container">
        {Object.entries(result).length === 0
        ?<h3 className="empty"> Introduzca una ubicación</h3>
        :result.cod === "404"
        ? <h3 className="empty2">Ubicación no válida.</h3>
        :<Weather
            result={result}
          />}
          
        </div>
      </div>
    </Fragment>
  );
}

export default App;
