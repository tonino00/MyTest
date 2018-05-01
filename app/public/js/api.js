
$(document).ready(function() {
	function loading_post(){
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "http://localhost:27017/teste");

		xhr.onload = function(){
			if(xhr.status === 200) {
				var data = $.parseJSON(xhr.responseText);
				for(i = 0; i <data.length; i++){
					$('#container_timeline').append(
						'<container>'+
							'<h2>'+
								data[i].usuario.nome+
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