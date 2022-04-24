
export const speech = [
    "/brownyA1.png",
    "/brownyA2.png",
    "/brownyA3.png",
    "/brownyA4.png",
    "/brownyA5.png"
  ];

  // export const message = speech[num]

  // export var num = 0;



  // export function CleanUp(){
  // if (shirt === false){
  //   num ++
  //   console.log(num)
  // }
  //}

var shirt = true

export var num = 0;
export  const message = speech[num]

export function ShirtCheck(t){
  shirt = t
}
  
export function CleanUp(){
   if (shirt === false){
     num++
     console.log(num)
  }
}

