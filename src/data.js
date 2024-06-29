export const API_KEY=`AIzaSyCu1fvUEe7g-7zqdfqOgR0iVka_g1eqMzA`;

export const viewsConverter=(val)=>{
  if(val>=1000000){
    return (val/1000000).toFixed(1)+"M";
  }
  else if(val>=1000){
    return Math.floor(val/1000)+"K";
  }
  return val;
}