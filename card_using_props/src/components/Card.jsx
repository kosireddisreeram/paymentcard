import  { React } from 'react';

const Card =(props) =>{
    return (
        <>
        <div style={{width:"40%",border:"1px solid black",marginLeft:"0px"}}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <h1>{props.date}</h1>
                <img src={props.image} alt='pics' style={{marginTop:"10px",width:"10%"}}/>
                
            </div>
           <button style={{backgroundColor:"black",color:"white",marginLeft:"0px"}}>{props.name}</button>
           <h1>{props.gift}</h1>
           <h1>{props.pay}</h1>
           {/*  */}
           <div style={{display:"flex",justifyContent:"space-between"}}>
               <h1>{props.desktop}</h1>
               <img src={props.arrow} alt="logo" style={{width:"10%",height:"10%",marginTop:"20px"}}/>

           </div>

        </div>
        </>
    )
}
export default Card
