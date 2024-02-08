const hour1=document.getElementById("hour");
const minute1=document.getElementById("minute");
const second1=document.getElementById("second");
const daytime=document.getElementById("daytime");
const day1=document.getElementById("day");
const month1=document.getElementById("month");
const year1=document.getElementById("year");
function main()
{
    setInterval(()=>{
        const date=new Date();
        hour1.innerHTML=date.getHours();
        const t=date.getHours();
        minute1.innerHTML=date.getMinutes();
        second1.innerHTML=date.getSeconds();
        day1.innerHTML=date.getDate();
        month1.innerHTML=date.getMonth()+1;
        year1.innerHTML=date.getFullYear();
        if(t>=18){
            daytime.setAttribute("class","fa-regular fa-moon fa-beat-fade fa-xl")
        }
        else{
            daytime.setAttribute("class","fa-regular fa-sun fa-beat-fade fa-xl");
        }
    },1000);
}