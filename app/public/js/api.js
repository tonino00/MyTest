$(document).ready(function() {
    $.ajax({
        url: "mongodb://admin:123mudar@ds127436.mlab.com:27436/locadados/usuarios",
    }).then(function(data) {
       $('.featurette-heading').append(data.nome);
       $('.email-content').append(data.job);
       $('.job-content').append(data.email);
    });
});