function checkValues()
{
    let user=document.getElementById("username").value;
    let pass=document.getElementById("password").value;
    if(user==""||pass=="")
    {
        alert("Fields cannot be empty");
        return false;
    }
    else if(user=="admin"&&pass==1234)
    {
        return true;
    }
    else
    {
        alert("Wrong username or password");
        return false;
    }
}