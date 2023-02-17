let write=document.getElementById('write');
const show=()=>{
if(random.value===write.value){
    let place=document.getElementById('place');
    place.style.display='block';

}
else{
    alert('invalid Capta');
}
}

const amount=()=>{
    //order amount
    let type=document.getElementById('type').value;
    if(document.getElementById('qtn').value>80){
        type=type-20;
    }
    else if(document.getElementById('qtn').value>30){
        type=type-10
    }
    document.getElementById('amt').value=document.getElementById('qtn').value*type;
    
    //total
    if(document.getElementById('qtn').value>10){
        document.getElementById('tamt').value=document.getElementById('amt').value;
    }
    else{
        document.getElementById('tamt').value=document.getElementById('amt').value+80;
    }
    
    }


const done=()=>
{
    let capta=document.getElementById('capta');
    capta.style.display='block';
    
    let pass=[92432, 83282, 77319, 63178, 53675, 48326, 32387, 26277, 18767, 79328];
    let number=Math.floor(Math.random()*10);
    
    let random=document.getElementById('random');
    random.value=pass[number];
    amount();


}




