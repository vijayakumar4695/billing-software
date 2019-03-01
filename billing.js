
  var col = [];
function onLoad() {

  var qu =document.getElementById("quan").value;
  var option=document.getElementById("list").value;
  console.log(option)
  var text="";
  var amt="";
  var total='';
  var price='';
  var value = JSON.parse(localStorage.getItem('user1'));
    for(var i=0;i<value.length;i++){
    	console.log(value[i])  
        document.getElementById("list").innerHTML+='<option>'+value[i].menu+'</option>';
       }  

      for (var j=0;j<value.length;j++){
           if(option == value[j].menu){
           	  price=value[j].amount;
           	  amt = qu*value[j].amount;
           	  col.push(amt);
           }
    	}

    	for(var j=0;j<col.length;j++){
    		var p = col[j];
    		 total = eval(total+p)
    	}
    	  var data  ={
      	name:option,
      	amt:amt,
      	price:price
      }
         document.getElementById("total").innerHTML="total"+" "+"="+" "+total;

     document.getElementById("body").innerHTML+='<tr><td>'+data.name+'</td>'+'<td>'+data.price+'</td>'+'<td>'+data.amt+'</td></tr>';

    }
  