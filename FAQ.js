function clickHandler() {
    var faq = document.getElementsByClassName("faq-page");
    var i;
    for (i = 0; i < faq.length; i++) {
        faq[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var body = this.nextElementSibling;
            if (body.style.display === "block") {
                body.style.display = "none";
            } else {
                body.style.display = "block";
            }
        });
    }
}


function showFAQpage() {
    document.querySelector('main').innerHTML = `
        <div style="animation: fadeIn 0.35s"> 


       
        <section class="faq-container">
            <div class="faq-one">
<div class="form-group">
  <form name="AboutForm " class="well form-horizontal formay" action=" " method="post"  id="contact_form">
  <class="row">
   <h1 class="faq-heading">Tips for events</h1>
            <pre>
            We have prepared event tips for you that contain useful information for planning your event. 
            Look at the questions that appear on the website and look for information
            that can help you go through your event successfully.
            Tips for the event, where you should celebrate, suppliers, halls and event gardens
            in Israel and more,
            all the information in one place. Have a fun read!
            </pre>
             </div>
            
            
                <!-- faq question -->
                <h1 class="faq-page">How to choose an event hall?</h1>
                <!-- faq answer -->
                <div class="faq-body">
                    <p><pre>
The difficulty in choosing a hall does exist and is known to most of us. 
We will present to you a number of guidelines that may help you 
find banquet halls that will match your standards:
location in Israel, price of a dish, number of guests, season and recommendations</pre></p>
                </div>
 
            <hr class="hr-line">
            <div class="faq-two">
                <!-- faq question -->
                <h1 class="faq-page">10 steps to planning a wedding</h1>
                <!-- faq answer -->
                <div class="faq-body">
                    <p><pre>
1. The invitation of the guests
2. The date of the wedding
3. Budget
4. The style of the wedding
5. The location of the wedding
6. Searching the place
7. Clothes
8. Suppliers
9. Opening a case in the rabbinate
10. Arrival permits</pre></p>
                </div>
            </div>
            <hr class="hr-line">
            <div class="faq-two">
                <!-- faq question -->
                <h1 class="faq-page">Personal design of event halls - worth the investment?</h1>
                <!-- faq answer -->
                <div class="faq-body">
                    <p><pre>
Personal design of event halls is first of all a matter of budget.
Before you even think about a more personal and special design of the event hall,
you must define your budget and subtract from it all the basic expenses
that you must make for the event such as a photographer, DJ, clothing, invitations and more.</pre></p>
                </div>
            </div>
             <hr class="hr-line">
            <div class="faq-two">
                <!-- faq question -->
                <h1 class="faq-page">4 wedding styles that are worth getting to know</h1>
                <!-- faq answer -->
                <div class="faq-body">
                    <p><pre>
1. Reverse wedding
2. American wedding
3. Country wedding
4. Urban style wedding
The most important thing in choosing a wedding style is to choose a style that suits you. 
Good luck to you!/pre></p>
                </div>
            </div>
             <hr class="hr-line">
            <div class="faq-two">
                <!-- faq question -->
                <h1 class="faq-page">How to save on event expenses?</h1>
                <!-- faq answer -->
                <div class="faq-body">
                    <p>
                    <pre>
Get a few simple rules that you should follow on the way to a successful event:
- Create a shared vision
- Collect information and document
- Maintain a budget
- Create priorities.
- Give up what is less important and invest in what is.</pre></p>
                </div>
            </div>
            <hr class="hr-line">
            <div class="faq-three">
                <!-- faq question -->
<h1 class="faq-page">Is it worth doing an event in the winter?</h1>
                <!-- faq answer -->
                <div class="faq-body">
                    <p><pre>
Yes. Events in winter have many advantages that events in other seasons do not have.
The winter atmosphere radiates something warm and intimate that is not found in any other season</pre></p>
                </div>
            </div>
        </section>
        </div>
      
        `
clickHandler();
}