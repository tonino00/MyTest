$(document).ready(function() {
    $.ajax({
    	  type: "GET",
   			dataType: "json",
        url: "http://localhost:27017/mytest/usuarios",
    }).then(function(data) {
       $('.featurette-heading').append(data.nome);
       $('.email-content').append(data.email);
       // $('.job-content').append(data.email);
    });
});