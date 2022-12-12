function validBidForm(){
    let name = document.forms["bidForm"]["name"].value;
    if (name.length() <= 1) {
        alert("Name must be more than one letters");
        return false;
    }
    let phone= document.forms["bidForm"]["phone"].value;
    if(phone.length<10){
        alert("Phone number must be at least 10 digits");
        return false;
    }
    const date = document.getElementById("date").value;
    const varDate = new Date(date);
    const today = new Date();
    if(varDate >= today) {
        alert("The date cant be!");
        return false;
    }
    else
        return true;
}

function showBidpage() {
    document.querySelector('main').innerHTML = `

<div>
    <form name="bidForm" class="well form-horizontal" action=" " method="post"  id="contact_form" onsubmit="return validBidForm()">
<fieldset>

<form>

<div class="form-group">
  <label class="col-md-4 control-label">What is your name?</label>
  <div class="col-md-4 inputGroupContainer">
  <div class="input-group">
  <span class="input-group-addon"><i class="bi bi-person-circle"></i></span>
  <input  name="name" placeholder="Name" class="form-control" type="text">
    </div>     </div>      </div>

<div class="form-group">
  <label class="col-md-4 control-label">How to reach you?</label>
  <div class="col-md-4 inputGroupContainer">
  <div class="input-group">
  <span class="input-group-addon"><i class="bi bi-person-circle"></i></span>
  <input  name="phone" class="form-control"  type="text">
    </div>
    </div>     </div>    



<div class="form-group">
  <label class="col-md-4 control-label">How many guests?</label>
  <div class="col-md-4 inputGroupContainer">
  <div class="input-group">
  <span class="input-group-addon"><i class="bi bi-person-circle"></i></span>
  <input  name="numGuests" placeholder="Number of guests" class="form-control"  type="text">
    </div>

     <div class="form-group">
  <label class="col-md-4 control-label">What are we celebrating?</label>
    <div class="col-md-4 selectContainer">
    <div class="input-group">
  <span class="input-group-addon"><i class="bi bi-person-circle"></i></span>
    <select name="department" class="form-control selectpicker">
      <option value="">Select your celebration's reason</option>
      <option>Birthday</option>
      <option>Wedding</option>
      <option >Bar/Bat Mitva</option>
      <option >Anniversary</option>
      <option >Brit milah</option>
      <option >Bachelor Party</option>
      <option >Hinna</option>
      <option >No need a reason!</option>
    </select>
  </div>
</div>
</div>

  <div action="/action_page.php">
  <label for="birthday">when is the celebration</label>
  <input type="date" id="birthday" name="birthday">
</div>


<div class="form-group">
  <label class="col-md-4 control-label">what would you like to eat?
</label>
    <div class="col-md-4 selectContainer">
    <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-list"></i></span>
    <select name="department" class="form-control selectpicker">
      <option value="">Select your choice</option>
      <option>Catering of the place</option>
      <option>personal</option>
 </select>
  </div>
</div>
</div>

<div class="form-group">
   <label class="col-md-4 control-label">Would you be interested in decorating the place? </label>
  <input type="radio" id="age1" name="decorate" value="Yes">
  <label for="age1">Yes, why not</label><br>
  <input type="radio" id="age2" name="decorate" value="No">
  <label for="age2">No thanks</label><br>
 </div>

<div class="form-group">
  <label class="col-md-4 control-label"></label>
  <div class="col-md-4"><br>
    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input onsubmit="return validBidForm()" type="submit" class="btn btn-warning" > </span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</input>
  </div>
</div>
</class>
</fieldset>
</form>
</div>
  
`}

