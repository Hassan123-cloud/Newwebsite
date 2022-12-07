import React from 'react';

function App(){

//new Data(year, month, day, hours, minutes, seconds, milliseconds)
let currDate = new Date(2022, 11, 16,11);
currDate = currDate.getHours();
let greeting = "";
const cssStyle = {};

if (currDate > 1 && currDate < 12){
   greeting = "Good Morning";
   cssStyle.color = "#00b894";
   
} else if (currDate >= 12 && currDate < 20){
    greeting = "Good Afternoon";
    cssStyle.color = "orange";
}else if (currDate >= 20 && currDate <= 24){
    greeting = "Good Night";
    cssStyle.color = "black";
}

return(
<>
    <div>
    <h1>
      Hello sir, <span style={cssStyle}> {greeting} </span>
    </h1>
 </div>

 </>
);

}

export default App;