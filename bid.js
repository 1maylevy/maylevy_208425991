function validBidForm(){
    let name = document.forms["bidForm"]["name"].value;
    if (name.length <= 1) {
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
    if(!date || varDate <= today) {
        alert("The date cant be!");
        return false;
    }
}

function showBidpage() {
    document.querySelector('main').innerHTML = `

<div>
    <form name="bidForm" class="well form-horizontal formay" action=" " method="post"  id="contact_form" onsubmit="return validBidForm()">


<div class="form-group">
  <label class="col-md-4 control-label">What is your name?</label>
  <div class="col-md-4 inputGroupContainer">
  <div class="input-group">
  <span class="input-group-addon"><i class="bi bi-person-circle"></i></span>
  <input  name="name" required placeholder="Name" class="form-control" type="text">
    </div>     </div>      </div>

<div class="form-group">
  <label class="col-md-4 control-label">How to reach you?</label>
  <div class="col-md-4 inputGroupContainer">
  <div class="input-group">
  <span class="input-group-addon"><i class="bi bi-person-circle"></i></span>
  <input  name="phone" required placeholder="phone number" class="form-control"  type="number">
    </div>
    </div>     </div>    



<div class="form-group">
  <label class="col-md-4 control-label">How many guests?</label>
  <div class="col-md-4 inputGroupContainer">
  <div class="input-group">
  <span class="input-group-addon"><i class="bi bi-person-circle"></i></span>
  <input  name="numGuests" required placeholder="Number of guests" class="form-control"  type="number">
    </div> </div></div>

     <div class="form-group">
  <label class="col-md-4 control-label">What are we celebrating?</label>
    <div class="col-md-4 selectContainer">
    <div class="input-group">
  <span class="input-group-addon"><i class="bi bi-person-circle"></i></span>
    <select name="department" required class="form-control selectpicker">
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

<div class="form-group">
  <label class="col-md-4 control-label"></label>

  <label for="date">when is the celebration</label>
  <input type="date" required id="date" name="date">
</div>


<div class="form-group">
  <label class="col-md-4 control-label">what would you like to eat?
</label>
    <div class="col-md-4 selectContainer">
    <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-list"></i></span>
    <select name="food" required class="form-control selectpicker">
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
    <label class="col-md-4 control-label"></label>

  <input type="radio" id="age2" name="decorate" value="No">
  <label for="age2">No thanks</label><br>
 </div>

<div class="form-group">
  <label class="col-md-4 control-label"></label>
  <div class="col-md-4"><br>
    <input onsubmit="return validBidForm()" type="submit" class="btn btn-warning" > </span></input>
  </div>
</div>
</form>
</div>
  
`}

