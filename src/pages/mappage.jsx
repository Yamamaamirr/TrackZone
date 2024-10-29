import Map from "../components/Map/Map";
import CriteriaComponent from "../components/Navbar/CriteriaComponent";
import StatusComponent from "../components/Navbar/StatusComponent";




function Mappage(){






    return(<>

    <Map/>
  
<StatusComponent />
        <div className="absolute top-1 right-1 flex flex-col items-start space-y-1">
          <CriteriaComponent />
        </div>
        </>

    )
}




export default Mappage; 