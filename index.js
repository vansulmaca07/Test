var employeeid= [];
var errorid= [];
var machineid=[];
var index= [];
var maintenanceid= [];
var ackid= [];
var c= 1;
var g= 1;
var time1= [];
var time2= [];
var actiondone= [];
var employeeid2=[];
var errorid2=[];
var index1= [];
var lotid= [];
var lotid2= [];
var time1st= [];
var totaltime =[];
var endTime=[];
var starT=[];
var time3=[];
var errorencountered=[];
var tr4=[];
var trial=[];

function firstinput(){
   
    var sub11= document.getElementById('employeeid').value;    
    let errorencountered=document.getElementById('errorid').value;
    if (errorencountered==='Other'){
      var sub22=document.getElementById('others123').value;
    }
    else {
      var sub22=document.getElementById('errorid').value;
    }
   
    var sub33= document.getElementById('lotid').value;
    const sub55= new Date();  
    starT=new Date().getTime();
    var sub69=document.getElementById('machineid').value;

    if(sub11&&sub22&&sub69 !=='')
    {

      employeeid= [...employeeid,sub11];
      errorid= [...errorid,sub22];
      time1= [...time1,sub55];
      index1= [...index1,g];  
      lotid= [...lotid,sub33];
  
    displayTable1();

    }
    else
        alert("入力不完全(Input Incomplete)");
}

function TestLang(){

trial=document.getElementById('maintenanceid').value;
var ad77=document.createElement('td');
ad77.innerHTML = trial;
tr4.appendChild(ad77);

document.getElementById('status').appendChild(tr4);
}

function displayTable1(){  
  const length= employeeid.length;
  tr4=document.createElement('tr');

  for(var i=0;i<length;i++)
  {
        tr4.innerHTML='';
      
        var ad33=document.createElement('td');
        ad33.innerHTML= lotid[i];
        tr4.appendChild(ad33);

        var ad5=document.createElement('td');
        ad5.innerHTML= time1[i];
        tr4.appendChild(ad5);
           
        var ad2=document.createElement('td');
        ad2.innerHTML= employeeid[i];
        tr4.appendChild(ad2);

        var ad3=document.createElement('td');
        ad3.style.backgroundColor = "red";
        ad3.style.color= "black";
        ad3.innerHTML= errorid[i];
        tr4.appendChild(ad3);

        document.getElementById('status').appendChild(tr4);  
  }
  g++;

  document.getElementById("submit-button2").disabled = true;
  document.getElementById("submit-button1").disabled = false;
  document.getElementById("employeeid").disabled = true;
  document.getElementById("errorid").disabled = true;
  document.getElementById("lotid").disabled = true;
  document.getElementById("maintenanceid").disabled = false;
  document.getElementById("ackid").disabled = false;
  document.getElementById("actiondone").disabled = false;

}

function addToTable(){
   
  document.getElementById('no-data').style.display="none";
  var sub1= document.getElementById('employeeid').value;

  let errorencountered=document.getElementById('errorid').value;
  if (errorencountered==='Other'){
    var sub2=document.getElementById('others123').value;
  }
  else {
    var sub2=document.getElementById('errorid').value;
  }

  var sub3= document.getElementById('maintenanceid').value;
  var sub4= document.getElementById('ackid').value;
  var sub7= document.getElementById('actiondone').value;
  var sub33 =document.getElementById('lotid').value;
  var sub69 =document.getElementById('machineid').value;

  const sub6= new Date().getTime();
  const sub68= new Date();
  var sub77 = ((sub6-starT)/1000)/60;
  sub77 = sub77.toFixed(2);  
 
  if(sub1&&sub2&&sub3&&sub4 !=='')

  {
  machineid= [...machineid,sub69];
  employeeid2= [...employeeid2,sub1];
  errorid2= [...errorid2,sub2];
  maintenanceid= [...maintenanceid,sub3];
  actiondone= [...actiondone,sub7];
  lotid2= [...lotid2,sub33];
  ackid= [...ackid,sub4];
  time3= [...time3,sub68];
  index= [...index,c];
  totaltime=[...totaltime,sub77]; 
  
  myDeleteFunction();
  displayTable();
  
  }

  else 
      alert("入力不完全(Input Incomplete)");
  
}

function displayTable(){

    const length= employeeid2.length;
    var tr=document.createElement('tr');

    for(var i=0;i<length;i++)
    {
        tr.innerHTML='';
        var td1=document.createElement('td');
        td1.innerHTML= index[i];
        tr.appendChild(td1);

        var td89=document.createElement('td');
        td89.innerHTML= machineid[i];
        tr.appendChild(td89);

        var td33=document.createElement('td');
        td33.innerHTML= lotid2[i];
        tr.appendChild(td33);

        var td2=document.createElement('td');
        td2.innerHTML= employeeid2[i];
        tr.appendChild(td2);

        var td3=document.createElement('td');
        td3.innerHTML= errorid2[i];
        tr.appendChild(td3);
       
        var td4=document.createElement('td');
        td4.innerHTML= maintenanceid[i];
        tr.appendChild(td4);

        var td5=document.createElement('td');
        td5.innerHTML= actiondone[i];
        tr.appendChild(td5);

        var td6=document.createElement('td');
        td6.innerHTML= ackid[i];
        tr.appendChild(td6);

        var td7=document.createElement('td');
        td7.innerHTML= time1[i];
        tr.appendChild(td7);

        var td8=document.createElement('td');
        td8.innerHTML= time3[i];
        tr.appendChild(td8);

        var td9=document.createElement('td');
        td9.innerHTML=totaltime[i];
        tr.appendChild(td9);

        document.getElementById('main').appendChild(tr);
    }
    c++;

    document.getElementById('employeeid').value='';
    document.getElementById('errorid').value='';
    document.getElementById('maintenanceid').value='';
    document.getElementById('ackid').value='';
    document.getElementById('actiondone').value='';
    document.getElementById('lotid').value='';
    document.getElementById('div1').innerHTML='';

    document.getElementById("submit-button2").disabled = false;
    document.getElementById("submit-button1").disabled = true;
    document.getElementById("employeeid").disabled = false;
    document.getElementById("errorid").disabled = false;
    document.getElementById("lotid").disabled = false;
    document.getElementById("maintenanceid").disabled = true;
    document.getElementById("ackid").disabled = true;
    document.getElementById("actiondone").disabled = true;
}

function myDeleteFunction() {
  document.getElementById("StatusTable").deleteRow(1);
}

function showfield(name){
  if(name=='Other')document.getElementById('div1').innerHTML='その他: <input type="text" name="other" value="" id="others123" placeholder="ご指定ください" >';
  else document.getElementById('div1').innerHTML='';
}
