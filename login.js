/*Below function Executes on click of login button.
function validate(){  
    //var name=document.myform.username.value;  
    //var password=document.myform.password.value;  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
      
    if (username==null || username==""){  
      alert("Name can't be blank");  
      return false;  
    }
    else if(password.length<10)
    {  
      alert("Password must be at least 10 characters long.");  
      return false;  
      }  
    //else if ( name == "Anu" && password == "an123@")
        var loginlist = { "User": {
                                "userlist":[{"username":"usr1", "password":"a123"},{"username":"usr2", "password":"a123"},{"username":"usr3", "password":"a123"}],
                          
        }
        };
      var logged = false;
        if(loginlist[0].User.ID === 1){
            for(var i =0; i < loginlist[0].User.userlist.length; i++){
                if(username == loginlist[0].User.userlist[i].username && password == loginlist[0].User.userlist[i].password){
                    logged= true;
                }
            }
            if(logged)
            {
    alert ("Login successfully");
    window.location = "success.html"; // Redirecting to other page.
    return false;
    }
    else
    {
        alert("Password or username incorrect");
    }
    }
}*/

function validate()
    {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var loginlist = { "User": {
                                "userlist":[{"username":"usr1", "password":"a123"},{"username":"usr2", "password":"a123"},{"username":"usr3", "password":"a123"}],
                                "ID":1
                            },  
                            "Admin": {
                                    "adminlist":[{"username":"admin1", "password":"b123"},{"username":"admin2", "password":"b123"},{"username":"admin3", "password":"b123"}],
                                    "ID":2
                            },  
                            "Supplier": {
                                    "supplierlist":[{"username":"sup1", "password":"c123"},{"username":"sup2", "password":"c123"},{"username":"sup3", "password":"c123"}],
                                    "ID":1
                            }   
        };
        var logged = false;
        if(loginlist[0].User.ID === 1){
            for(var i =0; i < loginlist[0].User.userlist.length; i++){
                if(username == loginlist[0].User.userlist[i].username && password == loginlist[0].User.userlist[i].password){
                    logged= true;
                }
            }
            if(logged)
            alert("User login");

            else
            alert("User login fail");               

        }
        else if(loginlist[0].Admin.ID === 2){
            for(var j =0; j < loginlist[0].Admin.adminlist.length; j++){
                if(username == loginlist[0].Admin.adminlist[j].username && password == loginlist[0].Admin.adminlist[j].password){
                    logged= true;
                }
            }
            if(logged)
            alert("Admin login");

            else
            alert("admin login fail");

        }
        else{
            for(var k =0; k < loginlist[0].Supplier.supplierlist.length; k++){
                if(username == loginlist[0].Supplier.supplierlist[k].username && password == loginlist[0].Supplier.supplierlist[k].password){
                    logged= true;
                }
            }
            if(logged)
            alert("Supplier login");

            else
            alert("supplier login fail");
          }
        }
        