function validate()
{
	var username=document.getElemenyById("username").value;
	var password=document.getElemenyById("password").value;
	if(username=="admin"&& password=="user")
	{
		alert("login successfull");
		return false;

	}
	else
	{
        alert("login failed")
	}
}
