
$(document).ready(function() {
	function loading_post(){
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "http://localhost:8080/api");

		xhr.onload = function(){
			if(xhr.status === 200) {
				var data = $.parseJSON(xhr.responseText);
				for(i = 0; i <data.length; i++){
					$('#container_timeline').append(
						'<container>'+
							'<h2>'+
							 data[i].titulo+
							'</h2>'+
							'<p>'+
								data[i].usuario.email+ 
							'</p>'+
						'</container>'
					);
				}
			}
		}
	}
});