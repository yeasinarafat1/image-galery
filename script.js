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
    for(const img of imgs ){
        // console.log(img);
        container.innerHTML = container.innerHTML + `<img src="${img}" alt="">`
        
    }
    
    // console.log(img);
    
    
    
    
    
    
}
main()