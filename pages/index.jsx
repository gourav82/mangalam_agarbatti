import { useEffect, useState } from "react"
import Home from "../component/layouts/Home";
import Lodding from "../component/layouts/Lodding";
import { getConfig, saveConfig } from "../helper/BaseUrl";
import { isEmptyObj } from "../helper/Utils";

 const HomePage = () =>{
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    saveOnLoad()
  },[])

  const saveOnLoad =()=>{
   let config =getConfig();
   if(isEmptyObj(config))
  {
    saveConfig();
      setIsLoading(false);
  }
    else
    setIsLoading(false);

  }
  return (
    // <>{isLoading? <Lodding/>:
    //   <Home/>
    // }
    <>
    <Home/>
    </>
  )
}
export default HomePage;