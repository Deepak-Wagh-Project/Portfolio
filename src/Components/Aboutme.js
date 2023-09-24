import React from "react";
// import deepak from "../images/deepak.jpg"  this is for new method of image import

const Aboutme=()=>{
  return(  <div className="about-me">
    <h1>
        About  me
    </h1>
   { /* for external link
    <img src="#" alt="img"/> */}

    {/* new method to import
    <img src={deepak} alt="img"/> */}

    <img src={require("../images/deepak.jpg")} alt="img"/>


    <p>
    I am an Automation Test Engineer with two years of experience 
    in Selenium with Java, currently employed at Infosys. In my 
    role, I have honed my skills in designing, developing, and 
    maintaining automated test scripts, ensuring the quality of 
    web applications through functional and regression testing. 
    I have contributed to the creation and customization of test 
    automation frameworks, meticulously designed test cases, and
     diligently reported and tracked defects. Additionally, I have
      collaborated closely with cross-functional teams, worked on
       continuous integration setups, and consistently updated my 
       skills to stay at the forefront of automation testing 
       technologies. My time at Infosys has solidified my 
       commitment to ensuring the highest software quality 
       standards and my ability to thrive in a dynamic development
        environment.
    </p>
    </div>
  )

}

export default Aboutme;