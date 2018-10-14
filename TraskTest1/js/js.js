	$(document).ready(function(){
				
		if (localStorage.info) {
			
			refreshInfo(); // vypsat udaje, ktere mam
	
			
		} else { 
			
			// pokud nemam zatim zadne info
			
			$("#list").text("no infotmation yet");
				
		
		}
		
	});
	



	//uloz do localStorage
	function saveForm(){
	
	//vybrat info z formy
	
		var email = $("#email").val();
		var firstname = $("#firstname").val();
		var lastname = $("#lastname").val();
		var company = $("#company").val();
		var position= $("#position").val();
		var source = $("#source").val();





		//aktualni list prevedeme ze stringu do JSON
		info = JSON.parse(localStorage.getItem('info'));
		
		if (!info){ //jestli zadne, vytvor prazdne pole
			info = JSON.parse('[]');
		}
		
		//vytvor novy list
		newForm = {email: email, firstname: firstname, lastname: lastname,
		company: company, position: position, source: source}
		
		//a pridej ji do na konec listu
		info.push(newForm);
		//uloz 
	    localStorage.setItem("info", JSON.stringify(info));
		//smaz form
		$("#form")[0].reset();
		
	refreshInfo();


		
	}

	
	//aktualizuj list
	function refreshInfo(){
		var infoAsText = ""
		
		$.each(JSON.parse(localStorage.getItem('info')), function(i, val) {
		  infoAsText = infoAsText + "<br>"+"email: "+"&quot"+ val.email+"&quot"+"<br>"+"firstname: "+"&quot"+val.firstname
		  +"&quot"+"<br>"+"lastname: "+"&quot"+val.lastname+"&quot"+"<br>"+
		  "company: "+"&quot"+val.company+"&quot"+"<br>"+"work position: "
		  +"&quot"+val.position+"&quot"+"<br>"+"source: "
		  +"&quot"+val.source+"&quot"+"<br>";
		});
		
		//aktualizujeme 
		$("#list").html(infoAsText);		
	}


  
	
   

       	



