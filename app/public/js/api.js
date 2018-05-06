
$(document).ready(function() {
	function loading_post(){
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "mongodb://admin:123mudar@ds249787.mlab.com:49787/teste/usuarios");

		xhr.onload = function(){
			if(xhr.status === 200) {
				var data = $.parseJSON(xhr.responseText);
				for(i = 0; i <data.length; i++){
					$('#container_timeline').append(
						'<container>'+
							'<h2>'+
							 data[i].nome+
							'</h2>'+
							'<p>'+
								data[i].email+ 
							'</p>'+
						'</container>'
					);
				}
			}
		}
	}
});