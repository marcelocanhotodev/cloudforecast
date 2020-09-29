import "./styles.css";
import api from "../../services/api";
import React, { useEffect, useState } from "react";
import airportImage from "../../images/airport.png"
import cloudImage from "../../images/cloud.png"
import floorImage from "../../images/floor.png"

const Map = (props) => {
    const [map,setMap] = useState();

    useEffect(() => {
        getMapData(props.dimensionx,props.dimensiony,props.airports,props.clouds);  
    },[]);

    const getMapData = async (dimensionx,dimensiony,airports,clouds) => {

        const payload = await api.get(`/map?dimensionx=${dimensionx}&dimensiony=${dimensiony}&airports=${airports}&clouds=${clouds}`);
        
        let map = await createMap(payload.data);

        setMap(map);
    };

    const createMap = async (payload) => {
        let map = [];
        let infos = [];

        payload.map.forEach(dmx=> {
            map.push(createDimensionX(dmx));
        });    

        return (<div>
            <h2>Quantidade de dias para o primeiro aeroporto ser atingido: <span class="badge badge-secondary">{payload.firstDay}</span> </h2>
            <h2>Quantidade de dias para todos aeroportos serem atingidos:  <span class="badge badge-secondary">{payload.lastDay}</span> </h2>
            <table className="map">{map}</table>
        </div>);
    };

    const createDimensionX = (dmx) => {
       return(<tr id= {dmx.index} >{createDimensionY(dmx)}</tr>);
    };

    const createDimensionY = (dmx) =>{
       let element = []; 

       dmx.forEach(dmy=> {
         element.push(<td>{setImage(dmy.toString())}</td>)
       });

       return(element);
    };

    const setImage = (kind) =>{
        let imageFile;
        
        if(kind == "0")
           imageFile = floorImage;

        if(kind == "1")
           imageFile = cloudImage;

        if(kind == "2")
           imageFile = airportImage;

        return(<img src={imageFile}/>)
    };

    if(!map){
        return(<>
           <div>Loading...</div>
        </>
        );
    };

    return(
        <div>
            <h1>{map}</h1>
        </div>
    );
}
export default Map; 
    