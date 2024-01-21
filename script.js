async function main(){
    let a = await fetch("/New%20folder/");
    // console.log(a);
    // console.log(a.text());
    let response = await a.text()
    // console.log(response);
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let imgs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
       if(element.href.includes("/New%20folder")){
         imgs.push(element.href)
       }
    }
    let container = document.getElementById("container")
    // for(const img of imgs ){
    //     // console.log(img);
    //     container.innerHTML = container.innerHTML + `<img src="${img}" alt="">`
        
    // }
imgs.forEach((element,index) => {
    // console.log(index,element);
    let title = element.split('/')[4]
    container.innerHTML = container.innerHTML + `<div onclick="download(${index})" class="card">
    <img id="${index}" src="${element}" alt="Card image">
    <div class="card-overlay">
      <div class="part-2">
      <h2 class="card-title">${title}</h2>
      <a id="download-logo" href="${element}" download class="download-logo">
        <img src="download.svg" alt="Download">
      </a>
      </div>
    </div>
  </div>`
    console.log(element.split('/')[4],index);
  
    
    
});

    
}

    
    // console.log(img);
    
    
    
    
    
    
    function download(id){
      let src = document.getElementById(id)
      console.log(src.src);
    }
main()