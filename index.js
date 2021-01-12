// const question = document.getElementsByClassName('question');
// const pre =document.getElementsByTagName('pre');

// function getIndex(arr){
//     const len=arr.length;
//     for(let i=0;i<len;i++){
//         if(arr[i].tagName=="PRE") return i;
//     }
//     return -1;
// }

// document.addEventListener('click', event =>{
//     console.log(Array.from(event.target.childNodes))
//     const arr=Array.from(event.target.childNodes);
//     const indexOfpreElement = getIndex(arr)


    
//     if(event.target.classList.value=="question"){

//         if(event.target.childNodes[indexOfpreElement].style.display == "none"){
//             event.target.childNodes[indexOfpreElement].style.display="block";
//         }else{
//             event.target.childNodes[indexOfpreElement].style.display="none";
//         }
//     }

// });