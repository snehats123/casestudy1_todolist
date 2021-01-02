function readValues()
{
    
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function()
    {
        if(this.readyState==4&&this.status==200)
        {
            var response=JSON.parse(this.responseText);
            var opt=response.options;
            var output="";
            for(var i=0;i<opt.length;i++)
            {

                output+='<h3><input type="checkbox" class="mark" onclick="updatecount()"'+(opt[i].completed?'checked':'')+'>'+opt[i].title+'<h3>';
            }
            document.getElementById("todolist").innerHTML=output;
        }
    };
    xhttp.open("GET","options.json",true);
    xhttp.send();
  //  var txt="";
    // for(var x in opt)
    // {
    //     txt+='<input type="checkbox" value="+opt[x].title
    // }
}
function updatecount()
{
    var x=$(".mark:checked").length;
    console.log(x);
    if(x==5)
    {
        alert("Congrats.. you have completed 5 tasks");
    }
    return true;
}