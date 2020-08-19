
fetch('people.json')
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  //Botonera IZQ de contactos
  document.getElementById("People0").innerHTML = myJson.People[0].name;
  document.getElementById("People1").innerHTML = myJson.People[1].name;
  document.getElementById("People2").innerHTML = myJson.People[2].name;
  document.getElementById("People3").innerHTML = myJson.People[3].name;
  document.getElementById("People4").innerHTML = myJson.People[4].name;

  // Eventos Click - Create Table-------------------
  
// PERSONA 0
    document.getElementById("People0").addEventListener("click", function P0(){
      document.getElementById("image-profile").setAttribute("src",myJson.People[0].img); 
      document.getElementById("description").innerHTML = myJson.People[0].Description;
      document.getElementById("demo").innerHTML = 
      `<table style="width:100%">
  <tr>
    <th>LIKES</th>
    <th>DISLIKES</th>
  </tr>
  <tr>
    <td>${myJson.People[0].Likes}</td>
    <td>${myJson.People[0].Dislikes}</td>
  </tr>
</table>`
   });

   // PERSONA 1
   document.getElementById("People1").addEventListener("click", function P1(){
    document.getElementById("image-profile").setAttribute("src",myJson.People[1].img);
    document.getElementById("description").innerHTML = myJson.People[1].Description;
    document.getElementById("demo").innerHTML = 
    `<table style="width:100%">
<tr>
  <th>LIKES</th>
  <th>DISLIKES</th>
</tr>
<tr>
  <td>${myJson.People[1].Likes}</td>
  <td>${myJson.People[1].Dislikes}</td>
</tr>
</table>`
 });

// PERSONA 2
 document.getElementById("People2").addEventListener("click", function P2(){
  document.getElementById("image-profile").setAttribute("src",myJson.People[2].img);
  document.getElementById("description").innerHTML = myJson.People[2].Description;
    document.getElementById("demo").innerHTML = 
    `<table style="width:100%">
<tr>
  <th>LIKES</th>
  <th>DISLIKES</th>
</tr>
<tr>
  <td>${myJson.People[2].Likes}</td>
  <td>${myJson.People[2].Dislikes}</td>
</tr>
</table>`
 });

// PERSONA 3
document.getElementById("People3").addEventListener("click", function P3(){
  document.getElementById("image-profile").setAttribute("src",myJson.People[3].img);
  document.getElementById("description").innerHTML = myJson.People[3].Description;
  document.getElementById("demo").innerHTML = 
  `<table style="width:100%">
<tr>
<th>LIKES</th>
<th>DISLIKES</th>
</tr>
<tr>
<td>${myJson.People[3].Likes}</td>
<td>${myJson.People[3].Dislikes}</td>
</tr>
</table>`
});

// PERSONA 4
document.getElementById("People4").addEventListener("click", function P4(){
  document.getElementById("image-profile").setAttribute("src",myJson.People[4].img);
  document.getElementById("description").innerHTML = myJson.People[4].Description;
  document.getElementById("demo").innerHTML = 
  `<table style="width:100%">
<tr>
<th>LIKES</th>
<th>DISLIKES</th>
</tr>
<tr>
<td>${myJson.People[4].Likes}</td>
<td>${myJson.People[4].Dislikes}</td>
</tr>
</table>`
});



});

// SEND-MESSAGE
document.getElementById("send-message").addEventListener("click", function send(){
  alert ("Mensaje Enviado");
}); 