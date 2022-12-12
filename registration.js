function validForm(){
    let Fname = document.forms["RegForm"]["first_name"].value;
    let Lname = document.forms["RegForm"]["last_name"].value;
    if (Fname.length <= 2) {
        alert("First Name must be more than one letters");
        return false;
    }
    if (Lname.length <= 2) {
        alert("Last Name must be more than one letters");
        return false;
    }
    const date = document.getElementById("birthday").value;
    const varDate = new Date(date);
    const today = new Date();
    if(varDate <= today) {
        alert("The date cant be!");
        return false;
    }
    let pass = document.forms["RegForm"]["pass"].value;
    let repass = document.forms["RegForm"]["repass"].value;
    if( pass =! repass){
        alert("Password did not matched");
        return false;
    }
    var email=document.forms["RegForm"]["email"].value;
    if(email.length()==0){
        alert("must fill email address");
        return false;
    }
    var firstshtrudel=email.indexOf('@');
    var lastshtrudel=email.lastIndex('@');
    if(firstshtrudel==-1){
        alert("please insert '@' to your email address");
        return false;
    }
    if(lastshtrudel!=firstshtrudel ){
        alert("please insert only one '@'");
        return false;
    }
    if(firstshtrudel==0){
        alert("please enter a user name before '@'");
        return false;
    }
    var firstdot=email.indexOf('.');
    var lastdot=email.lastIndexOf('.');
    if(firstdot!= lastdot){
        alert("please enter just one dot");
        return false;
    }
    else
        alert("Welcome To Ticket Space")
        return true;
}

function showRegistrationpage() {
    document.querySelector('main').innerHTML = `
        <div style="animation: fadeIn 0.35s"> 



    <form name="RegForm" class="well form-horizontal" action="/action_page.php" method="post"  id="contact_form" onsubmit="return validForm()">
<fieldset>

<!-- Form Name -->
<h2><b>Registration</b></h2>
<div class="form-group">
  <class="row">
  <label class="col-md-4 control-label">First Name</label>
  <div class="col-md-4 inputGroupContainer">
  <div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
  <input  name="first_name" placeholder="First Name" class="form-control"  type="text">
    </div>
  </div>
</div>

<!-- Text input-->

<div class="form-group">
  <label class="col-md-4 control-label" >Last Name</label>
    <div class="col-md-4 inputGroupContainer">
    <div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
  <input name="last_name" placeholder="Last Name" class="form-control"  type="text">
    </div>
  </div>
</div>


<div class="form-group">
    <label for="birthday">Birthday:</label>
  <input type="date" id="birthday" name="birthday">

  <div class="col-md-4 inputGroupContainer">
  <div class="input-group">
    </div>
  </div>
</div>



<div class="form-group">
  <label class="col-md-4 control-label">Username</label>
  <div class="col-md-4 inputGroupContainer">
  <div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
  <input  name="user_name" placeholder="Username" class="form-control"  type="text">
    </div>
  </div>
</div>

<!-- Text input-->

<div class="form-group">
  <label class="col-md-4 control-label" >Password</label>
    <div class="col-md-4 inputGroupContainer">
    <div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
  <input name="pass" placeholder="Password" class="form-control"  type="password">
    </div>
  </div>
</div>

<!-- Text input-->

<div class="form-group">
  <label class="col-md-4 control-label" >Confirm Password</label>
    <div class="col-md-4 inputGroupContainer">
    <div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
  <input name="repass" placeholder="Confirm Password" class="form-control"  type="password">
    </div>
  </div>
</div>

<!-- Text input-->
       <div class="form-group">
  <label class="col-md-4 control-label">E-Mail</label>
    <div class="col-md-4 inputGroupContainer">
    <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
  <input name="email" placeholder="E-Mail Address" class="form-control"  type="text">
    </div>
  </div>
</div>



<div class="form-group">
  <label class="col-md-4 control-label"></label>
  <div class="col-md-4"><br>
  <input type="submit" value="Submit">
  </div>
</div>
</class>
</fieldset>
</form>
</div>
    </div><!-- /.container -->


</body>


`}