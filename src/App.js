import React from "react";
import Navbar from "./Components/Navbar";
import Aboutme from "./Components/Aboutme";
import Section from "./Components/Section";
import sectionData from "./Components/sectionData";

const App=()=>{
    return (<div>
        <Navbar/>
        <Aboutme/>
        {sectionData.map((data)=>{
           return <Section title={data.title} 
            descreption={data.descreption}/>
        })}
       
        
    </div>)
}
export default App;