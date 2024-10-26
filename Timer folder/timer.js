var date=new Date();
function time(){
document.getElementById('hrs').innerHTML=date.getHours();
document.getElementById('mins').innerHTML=date.getMinutes();
document.getElementById('secs').innerHTML=date.getSeconds();
}
setInterval(time,1);