import React from "react";
import { RWebShare } from "react-web-share";
  
export default function WebShareGfg(){
  return (
    <div>
      <h1>Web Share - GeeksforGeeks</h1>
      <RWebShare
     
        onClick={() => console.log("shared successfully!")}
      >
    
      </RWebShare>
    </div>
  );
};