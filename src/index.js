import React from "react";
import ReactDOM from 'react-dom';
import Card from "./Cards";
import  "./index.css";
import Sdata from "./Sdata";



//console.log(Sdata[0].sname);

function ncard(val){
    console.log(val);
return(


    <Card 
     imgsrc={val.imgscr} 
     title={val.title} 
     sname = {val.sname} 
     link = {val.links} />
);

}
ReactDOM.render(
    <>

    <h1 className="heading_style"> List of 5 Games in 2022 </h1>
{/* <Card imgsrc={Sdata[0].imgscr}  title={Sdata[0].title} sname = {Sdata[0].sname} link = {Sdata[0].links} /> */}
{/* <Card imgsrc={Sdata[1].imgscr}  title={Sdata[1].title} sname = {Sdata[1].sname} link = {Sdata[1].links} />
<Card imgsrc={Sdata[2].imgscr}  title={Sdata[0].title} sname = {Sdata[0].sname} link = {Sdata[2].links} />
<Card imgsrc={Sdata[3].imgscr}  title={Sdata[0].title} sname = {Sdata[0].sname} link = {Sdata[3].links} />
<Card imgsrc={Sdata[4].imgscr}  title={Sdata[0].title} sname = {Sdata[0].sname} link = {Sdata[4].links} /> */}

{Sdata.map(ncard)}
</>,
document.getElementById('root')
);











