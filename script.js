async function foo(){
    var res=await fetch("https://api.postalpincode.in/pincode/110001");
    var resdata=await res.json();
    
    console.log(resdata)

    var div=document.createElement("div");
    div.className="main"
    div.innerHTML=`<div class="card border-primary mb-3 main1">
    <div class="card-header">PIN CODE Info</div>
    <div class="card-body text-primary">
      
      <p class="card-text"><b>Block:</b>${resdata[0].PostOffice[3].Block}</p>
      <p class="card-text"><b>Branch Type:</b>${resdata[0].PostOffice[3].BranchType}</p>
      <p class="card-text"><b>Country:</b>${resdata[0].PostOffice[3].Country}</p>
      <p class="card-text"><b>Pincode:</b>${resdata[0].PostOffice[3].Pincode}</p>
      
    </div>`

    document.body.append(div);
}

foo()