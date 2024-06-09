let toDoItm=[];
function todoFn(){
  let inpEle = document.querySelector('#todo');
  let getVale = inpEle.value;
  console.log(getVale)
  toDoItm.push(getVale);
  inpEle.value= '';
  ;

}
function vwItm(){
  console.error(toDoItm)
  let vwItem=document.querySelector('#getItm');
  console.error(vwItem.innerText)

    for(let i=0;i<toDoItm.length;i++){
      
      vwItem.innerText=vwItem.innerText+ (
        i=== 0 || i== toDoItm.length ? ' ' : ','  )+toDoItm[i];
    }
}
