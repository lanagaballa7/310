function password() {
    
  var password = '';
  var chart='';
  var random='';
  var letters="abcdefghijklmnopqrstuvwxyz1234567890|}{[]\:;?><,./-!@#$%^&*()_+~=";
    
  var keyword =document.getElementById('keyword').value;
	  var number = document.getElementById('number').value;
    
	for(i=1;i<=number-keyword.length;i++){
    var l=Math.floor(Math.random()*letters.length);
		random += letters[l];
		console.log(random);
        
	}
	
  	for(i=1;i<=keyword.length;i++){
        
	  var p =Math.floor(Math.random()*keyword.length);
	  if( p === i){
		 chart +=keyword.charAt(p).toUpperCase();
	  }else{
		 chart +=keyword.charAt(p).toLowerCase();
	  }
		console.log(chart);
	}
	password =  chart+random ;
	return password;
}

var submit = document.getElementById('submit');
submit.onclick= function(){
	var userName= document.getElementById('userName');
	result.innerText="User Name: " +userName.value +"password: " +password();
}