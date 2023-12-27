var employeeid= [];
var errorid= [];
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
//var startTime =[];
var endTime=[];
var starT=[];
var time3=[];
var errorencountered=[];


//var errorencountered=document.getElementById('errorid').value;
function firstinput(){

    //document.getElementById('StatusTable').style.display="block";
  
    var sub11= document.getElementById('employeeid').value;    
    let errorencountered=document.getElementById('errorid').value;
    if (errorencountered==='Other'){
      var sub22=document.getElementById('div1').value;
    }
    else {
      var sub22=document.getElementById('errorid').value;
    }
   // var sub22= document.getElementById('errorid').value;
    var sub33= document.getElementById('lotid').value;
    const sub55= new Date();  
    starT=new Date().getTime();
    //const startTime= new Date().getTime();


    if(sub11&&sub22 !=='')
    {

      employeeid= [...employeeid,sub11];
      errorid= [...errorid,sub22];
      time1= [...time1,sub55];
      index1= [...index1,g];  
      lotid= [...lotid,sub33];
      //starT= [...starT,startTime];

 //     maintenanceid= [...maintenanceid,sub3];
 //     actiondone= [...actiondone,sub7];
 //     ackid= [...ackid,sub4];    
  //    time2= [...time2,sub6];
  //    totaltime= [...totaltime,sub8];
  
    displayTable1();

    }
    else
        alert("入力不完全(Input Incomplete)");
}

function displayTable1(){
  
  const length= employeeid.length;
  var tr=document.createElement('tr');

  for(var i=0;i<length;i++)
  {
        tr.innerHTML='';
        //var ad1=document.createElement('td');
        //ad1.innerHTML= index1[i];
        //tr.appendChild(ad1);

        var ad33=document.createElement('td');
        ad33.innerHTML= lotid[i];
        tr.appendChild(ad33);

        var ad5=document.createElement('td');
        ad5.innerHTML= time1[i];
        tr.appendChild(ad5);
           
        var ad2=document.createElement('td');
        ad2.innerHTML= employeeid[i];
        tr.appendChild(ad2);

        var ad3=document.createElement('td');
        ad3.style.backgroundColor = "red";
        ad3.style.color= "black";
        ad3.innerHTML= errorid[i];
        tr.appendChild(ad3);

        //var ad99=starT[i];
        //var ad99=document.createElement('td');
        //ad99.innerHTML= starT[i];
        //tr.appendChild(ad99);

        document.getElementById('status').appendChild(tr);  
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
  var sub2= document.getElementById('errorid').value;
  var sub3= document.getElementById('maintenanceid').value;
  var sub4= document.getElementById('ackid').value;
  var sub7= document.getElementById('actiondone').value;
  var sub33 =document.getElementById('lotid').value;
  const sub6= new Date().getTime();
  const sub68= new Date();
  var sub77 = ((sub6-starT)/1000)/60;
  sub77 = sub77.toFixed(2);  
  //totaltime=sub6-starT;
  //const totaltime=(startTime-end)/1000;
  //const sub77=end-start;
  if(sub1&&sub2&&sub3&&sub4 !=='')

  {
  employeeid2= [...employeeid2,sub1];
  errorid2= [...errorid2,sub2];
  maintenanceid= [...maintenanceid,sub3];
  actiondone= [...actiondone,sub7];
  lotid2= [...lotid2,sub33];
  ackid= [...ackid,sub4];
  //time1st= [...time1st,sub5];
  //time2= [...time2,sub6];
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

        //totaltime = (time1-time2);
        var td9=document.createElement('td');
        td9.innerHTML=totaltime[i];
        tr.appendChild(td9);

       //var ad90=time3[i];
       // var td9=document.createElement('td');
       // td9.innerHTML= totaltime[i];
       // tr.appendChild(td9);

        document.getElementById('main').appendChild(tr);
    }
    c++;

    document.getElementById('employeeid').value='';
    document.getElementById('errorid').value='';
    document.getElementById('maintenanceid').value='';
    document.getElementById('ackid').value='';
    document.getElementById('actiondone').value='';
    //document.getElementById('time1').value='';
    document.getElementById('lotid').value='';
    //document.getElementById('time2').value='';

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
  //document.getElementById('StatusTable').style.display="none";
}

function showfield(name){
  if(name=='Other')document.getElementById('div1').innerHTML='Other: <input type="text" name="other" value=""/>';
  else document.getElementById('div1').innerHTML='';
}

//document.getElementById('maintenanceid').value='';
//document.getElementById('ackid').value='';
//function save_data(){
    //let myTable = []
    //('.form-control').each(function() { myTable.push( $(this).val() )});
    //localStorage.setItem('myTable', JSON.stringify(myTable));
//}
//$('tbody').on("DOMSubtreeModified", function() {save_data()});
  //  $('tbody').on('change', '.form-control', function() {save_data()});
//function load_data(){
  //  let myTable = JSON.parse(localStorage.getItem('myTable'));
    //for (i = 1; i < myTable.length/3; i++) $("#addrow").click()
    //$('.form-control').each(function(index) {$(this).val(myTable[index])});
//}
//function refresh(){
  //  location.reload();
//}
