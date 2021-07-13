function registration()
	{

		var name= document.getElementById("t1").value;
		var email= document.getElementById("t2").value;
		var uname= document.getElementById("t3").value;
		var pwd= document.getElementById("t4").value;			
		var cpwd= document.getElementById("t5").value;
		var add= document.getElementById("t6").value;
		var phoneno= document.getElementById("t7").value;
		
        //email id expression code
		var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		var letters = /^[A-Za-z]+$/;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var addressfilter = /^[A-Za-z0-9 ]+$/;
		var phone = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

		if(name=='')
		{
			alert('Please enter your name');
		}
		else if(!letters.test(name))
		{
			alert('Name field required only alphabet characters');
		}
		else if(email=='')
		{
			alert('Please enter your user email id');
		}
		else if (!filter.test(email))
		{
			alert('Invalid email');
		}
		else if(uname=='')
		{
			alert('Please enter the user name.');
		}
		else if(!letters.test(uname))
		{
			alert('User name field required only alphabet characters');
		}
		else if(pwd=='')
		{
			alert('Please enter Password');
		}
		else if(cpwd=='')
		{
			alert('Enter Confirm Password');
		}
		else if(!pwd_expression.test(pwd))
		{
			alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
		}
		else if(pwd != cpwd)
		{
			alert ('Password not Matched');
		}
		else if(document.getElementById("t5").value.length < 6)
		{
			alert ('Password minimum length is 6');
		}
		else if(document.getElementById("t5").value.length > 12)
		{
			alert ('Password max length is 12');
		}
		else if(add=='')
		{
			alert('Please enter the address .');
		}
		else if(!addressfilter.test(add))
		{
			alert('address name field required only alphabet and numbers');
		}
		else if(phoneno=='')
		{
			alert('Please enter your contact number');
		}
		else if(!phone.test(phoneno))
		{
			alert('phone number field required only numbers');
		}
		else
		{				                            
               alert('Thank You for Login & You are Redirecting to Login Page');
			   // Redirecting to other page or webste code. 
			   window.location = "login2.html"; 
		}
	}
	function clearFunc()
	{
		document.getElementById("t1").value="";
		document.getElementById("t2").value="";
		document.getElementById("t3").value="";
		document.getElementById("t4").value="";
		document.getElementById("t5").value="";
		document.getElementById("t6").value="";
		document.getElementById("t7").value="";
		document.getElementById("t8").value="";
		document.getElementById("t9").value="";
		
	}
	
   