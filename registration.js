// After form loads focus will go to User id field.
function firstfocus()
{
var uid = document.registration.userid.focus();
return true;
}
// This function will validate User id.
function userid_validation(max,min)
{
var uid = document.registration.userid;
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len >= min || uid_len < max)
{
alert("User Id should not be empty / length be between "+max+" to "+min);
uid.focus();
return false;
}
// Focus goes to next field i.e. Password.
document.registration.passid.focus();
return true;
}
// This function will validate Password.
function passid_validation(max,min)
{
var passid = document.registration.passid;
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= min || passid_len < max)
{
alert("Password should not be empty / length be between "+max+" to "+min);
passid.focus();
return false;
}
// Focus goes to next field i.e. Name.
document.registration.username.focus();
return true;
}
// This function will validate Name.
function allLetter()
{ 
var uname = document.registration.username;
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
// Focus goes to next field i.e. Address.
document.registration.address.focus();
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();

return false;
}
}
// This function will validate Address.
function alphanumeric()
{ 
var uadd = document.registration.address;
var letters = /^[0-9a-zA-Z\s]+$/;
if(uadd.value.match(letters))
{
// Focus goes to next field i.e. Country.
document.registration.country.focus();
return true;
}
else
{
alert('User address must have alphanumeric characters only');
uadd.focus();
return false;
}
}
// This function will select country name.
function countryselect()
{
var ucountry = document.registration.country;
if(ucountry.value == "Default")
{
alert('Select your country from the list');
ucountry.focus();
return false;
}
else
{
// Focus goes to next field i.e. ZIP Code.
document.registration.pin.focus();
return true;
}
}
// This function will validate PIN Code.
function allnumeric()
{ 
var upin = document.registration.pin;
var numbers = /^[0-9]+$/;
if(upin.value.match(numbers))
{
// Focus goes to next field i.e. email.
document.registration.email.focus();
return true;
}
else
{
alert('PIN code must have numeric characters only');
upin.focus();
return false;
}
}
// This function will validate Email.
function ValidateEmail()
{
var uemail = document.registration.email;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
document.registration.desc.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}
let movies = [];
        // example {id:1592304983049, title: 'Deadpool', year: 2015}
        const addMovie = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let movie = {
                id: Date.now(),
                title: document.getElementById('uid').value,
            }
            movies.push(movie);
            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();

            //for display purposes only
            console.warn('added' , {movies} );
            let pre = document.querySelector('#msg pre');
            pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);

            //saving to localStorage
            localStorage.setItem('MyMovieList', JSON.stringify(movies) );
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btn').addEventListener('click', addMovie);
        });
