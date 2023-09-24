import React from "react";

const Section=({title, descreption})=>{
    return (
        <div>
            <h1>
                {title}
            </h1>
            <p>
              {descreption}
            </p>
        </div>
    )

}

export default Section;