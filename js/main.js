let btn=document.querySelector("#btn");
let info=document.querySelector('#info');
let counter=1;
btn.addEventListener('click',()=>{

    let xReq = new XMLHttpRequest();
    if(counter<4){
        xReq.open('GET', `js/cars_${counter}.json`);
    xReq.onload = ()=> {
        const xData = JSON.parse(xReq.responseText);

        addHtml(xData);
    };
    xReq.send();
    counter++;
    if(counter>3){
        btn.classList.add('hide');
        btn.style.backgroundColor='gray';
    }
    }
    
});
let addHtml=(data)=>{
    let htmlText="";
    let fourText="";
    let salonText="";
    data.forEach(car => {
        car.type.four.forEach((fo)=>fourText+="<li>"+fo+"</li>")
        car.type.salon.forEach((sal)=>salonText+="<li>"+sal+"</li>")
        // console.log(fourText);
        htmlText+="<p class=red>"+
        car.name +" is a " +
        "<span class=green>"+ 
        car.model+"</span></p><p>that has 4X4 like: <ul>"+fourText+"</ul></p>"+"</p><p>and has Salon like: <ul>"+salonText+"</ul></p>"+"<hr>";
        fourText="";
        salonText="";
    });
info.insertAdjacentHTML('beforeend',htmlText)
}

