
    const ime = document.getElementById("ime");
    const prezime = document.getElementById("prezime");
    const email = document.getElementById("mail");
    const poruka = document.getElementById("poruka");
   function posalji(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "pesic.aleksa99@gmail.com",
        Password : "vqnswxtyzcqpkzea",
        To : 'pesic.aleksa99@gmail.com',
        From : "pesic.aleksa99@gmail.com",
        Subject : ime.value + " vam salje poruku",
        Body : ime.value + " " + prezime.value + "<br/>" + "Email adresa: " + email.value + "<br/>" + "Poruka: " +"<br/>"+ poruka.value
        })
   }  
function kontakt()
{  
    if (document.getElementById("ime").value.length == 0){
    document.getElementById("ime").setAttribute("placeholder", "Ovo polje je obavezno!");
    document.getElementById("ime").className += "warning";}
    else if (document.getElementById("prezime").value.length == 0){
        document.getElementById("prezime").setAttribute("placeholder", "Ovo polje je obavezno!");
        document.getElementById("prezime").className += "warning";}
        else if (document.getElementById("mail").value.length == 0) {
            document.getElementById("mail").setAttribute("placeholder", "Ovo polje je obavezno!");
            document.getElementById("mail").className += "warning";}
                    else if (document.getElementById("poruka").value.length == 0){
                        document.getElementById("poruka").setAttribute("placeholder", "Vasa poruka je prazna!");
                        document.getElementById("poruka").className += "warning";}    
                        else {posalji()
                        document.getElementById("success").innerHTML = "Vasa poruka je uspesno poslata!"
                        }
                                 
                        }