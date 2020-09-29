import React, { useEffect } from "react";
import Map from '../../components/map/index'
import queryString from 'query-string';

const Dashboard = (props) => {
    
    useEffect(() => {
        callMap();  
    },[]);

    const callMap = () =>{
        const query = queryString.parse(props.location.search);

        return(<div>
                <Map dimensionx={query.dimensionx} dimensiony={query.dimensiony} airports={query.airports} clouds={query.clouds}></Map>
               </div>);
    };

   return(callMap());
}
export default Dashboard;