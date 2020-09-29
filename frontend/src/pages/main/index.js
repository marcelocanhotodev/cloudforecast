import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Main = () => {

    const history = useHistory();

    const [dimensionx,setDimensionX] = useState();
    const [dimensiony,setDimensionY] = useState();
    const [clouds,setClouds] = useState();
    const [airports,setAirports] = useState();


    async function handleSubmit() {
        const path = `/dashboard?dimensionx=${dimensionx}&dimensiony=${dimensiony}&airports=${airports}&clouds=${clouds}`; 
        history.push(path);  
    }; 

return (<div className="container">

  <div class="card">
       <div class="card-body">
           <form onSubmit={handleSubmit}>
             <div class='form-group'>
                <label>Quantidade no eixo x:</label>
                <input type='number' required="true" value={dimensionx} onChange={(e) => setDimensionX(parseInt(e.target.value))} class='form-control' min="10"  placeholder='Quantidade de linhas.'/>
             </div>
             <div class='form-group'>
                <label>Quantidade no eixo y:</label>
                <input type='number'  required="true" value={dimensiony} onChange={(e) => setDimensionY(parseInt(e.target.value))} class='form-control' min="10"  placeholder='Quantidade de colunas.'/>
             </div>
             <div class='form-group'>
                <label>Quantidade de aeroportos:</label>
                <input type='number' required="true" value={airports} onChange={(e) => setAirports(parseInt(e.target.value))}  class='form-control' min="1" placeholder='Quantidade de aeroportos.'/>
             </div>
             <div class='form-group'>
                <label>Quantidade de nuvems:</label>
                <input type='number' required="true" value={clouds}  onChange={(e) => setClouds(parseInt(e.target.value))} class='form-control' min="1" placeholder='Quantidade de nuvems.'/>
             </div>
            <button type="submit" class="btn btn-success">Processar</button>
          </form>
       </div>   
  </div>      
</div>);
}
export default Main;