
function showSignInPage() {
    document.querySelector('main').innerHTML = `
        <div style="animation: fadeIn 0.35s"> 



    <form name="LogForm" class="well form-horizontal" action=" " method="post"  id="contact_form">
<fieldset>

<h2><b>Log In</b></h2>
<div class="form-group">
  <class="row">
  <label class="col-md-4 control-label">User Name</label>
  <div class="col-md-4 inputGroupContainer">
  <div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
  <input  name="username" placeholder="User Name" class="form-control"  type="text">
    </div>
  </div>
</div>


<div class="form-group">
  <label class="col-md-4 control-label" >Password</label>
    <div class="col-md-4 inputGroupContainer">
    <div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
  <input name="user_password" placeholder="Password" class="form-control"  type="password">
    </div>
  </div>
</div>

<div class="form-group">
  <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"> Remember me
    </label>
  </div>

</form>
    </div><!-- /.container -->





`}