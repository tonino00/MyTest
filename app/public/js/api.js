$(document).ready(function() {
    $.ajax({
    	  type: "GET",
   			dataType: "json",
        url: "http://localhost:27017/mytest/usuarios",
    }).then(function(data) {
       $('.featurette-heading').append(data.usuario);
       $('.email-content').append(data.senha);
       // $('.job-content').append(data.email);
    });
});