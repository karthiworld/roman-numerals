
	document.getElementById("getValue").onclick = function() {

		var value1=document.getElementById("input1").value.toUpperCase();
		var value2=document.getElementById("input2").value.toUpperCase();
		var value3=document.getElementById("input3").value;

		if(value1 =='' || value2==''){

			alert('Enter the value in input');

		}else{
		
		var roman_list = 'IVXLCDM';
  		var rcount = 0;
  		var str1 = value1.concat(value2);

  		for(var x = 0; x < str1.length ; x++){

    		if (roman_list.indexOf(str1[x]) !== -1){
      			
      			rcount += 1;
    			
    			}
  
  			}

  		if(rcount!=str1.length){

  			alert('Enter valid Roman Number');

  		}else{

  			var val1 = romanToNumber(value1);
  			var val2 = romanToNumber(value2);

		// This operation(val1,val2,value3) use to do operation on Roman by passing value1 ,value 2 and operator as a argument 
  			var opr_val = operation(val1,val2,value3);

  			var selection = document.getElementById("input3");
			var op_text= selection.options[selection.selectedIndex].text;
  			document.getElementById('value1').innerHTML=value1 +' '+ op_text +' '+ value2 +' = ' + opr_val;

  		}
		
		}
    };

    document.getElementById("reset").onclick = function() {
	
		document.getElementById('value1').innerHTML='';
		document.getElementById("input1").value='';
		document.getElementById("input2").value='';
	
	};


// Convert Roman TO Number
function romanToNumber(roman) { 

 var i,j,k,a=[],len=roman.length;
 
 for(i=0;i<len;i++){
  
  if(roman[i]=='I'){
  
  	a[i]=1;
  
  }else if(roman[i]=='V'){
  
  	a[i]=5;
  
  }else if(roman[i]=='X'){
  
  	a[i]=10;
  
  }else if(roman[i]=='L'){
  
  	a[i]=50;
  
  }else if(roman[i]=='C'){
  
  	a[i]=100;
  
  }else if(roman[i]=='D'){
  
  	a[i]=500;
  
  }else if(roman[i]=='M'){
  
  	a[i]=1000;
  
  }else{

	alert('YOU ENTERED INVALID ROMAN NUMBER');
    return false;

  }

}

k=a[len-1];

for(i=len-1;i>0;i--){

  	if(a[i]>a[i-1]){
  	
  		k=k-a[i-1];
  	
  	}else if(a[i]==a[i-1] || a[i]<a[i-1]){
  	
  		k=k+a[i-1];
  	
  	}
}

return k;

}

//	In This operation(value1,value2,value3) we pass the input 1 and input 2 and operator as argument.
function operation(value1,value2,value3){ 

	if(value1 < value2 && (value3 == 2 || value3 == 4)){
	
		alert("input one is lesser then input two so can't perform operation - or /");
		return false;
	
	}else{
	
		switch(value3){ 
            case "1":
                return convertToRoman(value1 + value2);
                break;
            case "2":
                return convertToRoman(value1 - value2);
                break;
            case "3":
                return convertToRoman(value1 * value2);
                break;
            case "4":
                return convertToRoman(value1 / value2).replace(/undefined/g,'');
                break;
           default:
                return "invalid";
                
    	}
	}

}

// Convert Number To Roman

function convertToRoman(num) {

var romanMatrix = [
  [1000000, '<label style="text-decoration: overline;">M</label>'],
  [500000, '<label style="text-decoration: overline;">D</label>'],
  [100000, '<label style="text-decoration: overline;">C</label>'],
  [50000, '<label style="text-decoration: overline;">L</label>'],
  [10000, '<label style="text-decoration: overline;">X</label>'],
  [5000, '<label style="text-decoration: overline;">V</label>'],
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];

  if (num === 0) {

    return '';

  }

  for (var i = 0; i < romanMatrix.length; i++) {

    if (num >= romanMatrix[i][0]) {

      return romanMatrix[i][1] + convertToRoman(num - romanMatrix[i][0]);

    }

  }

}

