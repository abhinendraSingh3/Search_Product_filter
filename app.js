const sorting=()=>{
    let searchvalue=document.getElementById("search-bar").value.toUpperCase();
    let product=document.querySelectorAll(".products")
    let nItems=document.getElementsByTagName("h2");
    
    for(var i=0;i<nItems.length;i++){

     let a=product[i].getElementsByTagName('h2')[0];
      if(a){
     let match=a.textContent || a.innerText;

     if((match.toUpperCase().indexOf(searchvalue))>-1){
            product[i].style.display="";
     }
     else{
        product[i].style.display='none';
     }

    }

} 
}
