

    let input=document.getElementById("input1")
let searchbtn=document.querySelector("#search1")
searchbtn.addEventListener("click",()=>{
    console.log("button pressed")
    sendapirequest()
    
}) 

async function sendapirequest(){
     const youtubeUser = input1.value;
     const youtubeKey = ' AIzaSyBAd3Xg_Fe5xWoQvrDe1becR-BNUZPlJ0Y';


     let response=await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`)

 console.log(response)
 let data=await response.json();
 console.log(data)
  useapidata(data)
}





    function useapidata(data)

   {
         document.querySelector("#subCount").innerHTML=`
         
   
      <p class="card-text"><b>Subscribers:</b>${data.items[0].statistics.subscriberCount}</p>
    
    
         `
    }