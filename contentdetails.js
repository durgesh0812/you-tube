let i;
    let input1=document.getElementById("input1")
    let searchbtn2=document.querySelector("#search1")
    searchbtn2.addEventListener("click",()=>{
        console.log("button pressed")
        sendapirequest()
        
    }) 
    
    async function sendapirequest(){
         const youtubeUser = input1.value;
         const youtubeKey = ' AIzaSyBAd3Xg_Fe5xWoQvrDe1becR-BNUZPlJ0Y';
    
    
         let response=await fetch(`https://www.googleapis.com/youtube/v3/activities?part=snippet&channelId=${youtubeUser}&key=${youtubeKey}`)
    
     console.log(response)
     let data=await response.json();
     console.log(data)
       useapidata(data)
    }
    
    
    
    
    
     function useapidata(data)
    
     {
             document.querySelector("#content").innerHTML=`
         <div class="card ">
         
       <div class="card-body" style="font-family: 'Cookie', cursive;tex-align:center;font-size: 20px;">
        
          <p class="card-text"><b>Activities:</b>${ data.items[0].snippet.description}</p>
          <p class="card-text"><b>Activities:</b>${ data.items[1].snippet.description}</p>
          <p class="card-text"><b>Activities:</b>${ data.items[2].snippet.description}</p>
        
         </div></div>
             `
        }