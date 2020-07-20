

function fd()
 {
 	var pattern =/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
 	if(document.fn.username.value=="")
	 {
		alert("Please Enter Your First Name");
		document.fn.username.focus();
	   	return false;
	 }
	 else if(document.fn.email.value=="")
	 {
	 	alert("Please Enter you email");
		document.fn.email.focus();
		return false;
	 }
	 else
	if(document.fn.email.value.includes('@')==false)
	 {
		alert("Please Enter valid email");
		document.fn.email.focus();
		return false;
	 }
	 else if(document.fn.mob.value=="")
	 {
	 	alert("Please Enter your mobile number");
		document.fn.mob.focus();
		return false;
	 }
	 else
	if(document.fn.mob.value.length!=10)
	 {
		alert("Please Enter valid mobile number");
		document.fn.mob.focus();
		return false;
	 }
	 else
	if(document.fn.dob.value.length=="")
	 {
		alert("Please enter your date of birth");
		document.fn.dob.focus();
		return false;
	 }
	 else
	if(pattern.test(document.fn.dob.value)==false)
	 {
		alert("Please enter your date of birth in format DD-MM-YYYY");
		document.fn.dob.focus();
		return false;
	 }
	else
	if(document.fn.pass.value=="")
	 {
		alert("Please Enter Your Password");
		document.fn.pass.focus();
		return false;
	 }
	else
	if(document.fn.cpass.value=="")
	 {
		alert("Please confirm your password");
		document.fn.cpass.focus();
		return false;
	}
	else if(document.fn.cpass.value!= document.fn.pass.value)
	{
		alert("Password's doesn't match");
		document.fn.cpass.focus();
		return false;
	}
	
	else
	return true;
 }
