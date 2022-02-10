function dateLimiter(element){
  	var date = new Date(element.value);

	if(date.getFullYear()>2023){
		element.value = '2023-'+((date.getMonth()+1) <10 ?("0"+(date.getMonth()+1)):(date.getMonth()+1))+'-'+(date.getDate() <10 ?("0"+(date.getDate())):date.getDate());
	}
}

function desktopFirstValidator(){
	if(document.getElementById('dnom').value==''){
		$('#dnomerror').removeClass('is-hidden');
		if(document.getElementById('demail').value==''){
			$('#demailerror').removeClass('is-hidden');
		}
	}else if(document.getElementById('demail').value==''){
		$('#demailerror').removeClass('is-hidden');
	}else {
		document.getElementById('stscreen').style.display='none';
		document.getElementById('ndscreen').style.display='block';
	}
}

function desktopSecondValidator(){
	var checkboxes = false
	var dates = false
	if(!document.querySelector('input[name="dsitech"]').checked
		&& !document.querySelector('input[name="dseo"]').checked
		&& !document.querySelector('input[name="dmaintenance"]').checked
		&& !document.querySelector('input[name="dbrand"]').checked
		&& !document.querySelector('input[name="dlogo"]').checked
		&& !document.querySelector('input[name="dautre"]').checked){
		checkboxes = true
	}
	if(document.getElementById('ddebut').value=="" && document.getElementById('dfin').value==""){
		dates = true
	}

	if(checkboxes){
			$('#dcheckerror').removeClass('is-hidden');
		if(dates){
			$('#ddateerror').removeClass('is-hidden');
		}
	}else if(dates){
		$('#ddateerror').removeClass('is-hidden');
	}else{
		document.getElementById('ndscreen').style.display='none';
		document.getElementById('rdscreen').style.display='block';
	}
}


function mobileFirstValidator(){
	if(document.getElementById('nommb').value==''){
		$('#nomerrormb').removeClass('is-hidden');
		if(document.getElementById('emailmb').value==''){
			$('#emailerrormb').removeClass('is-hidden');
		}
	}else if(document.getElementById('emailmb').value==''){
		$('#emailerrormb').removeClass('is-hidden');
	}else {
		document.getElementById('stmbscreen').style.display='none';
		document.getElementById('ndmbscreen').style.display='block';
	}
}

function mobileSecondValidator(){
	var checkboxes = false
	var dates = false
	if(!document.querySelector('input[name="sitechmb"]').checked
		&& !document.querySelector('input[name="seomb"]').checked
		&& !document.querySelector('input[name="maintenancemb"]').checked
		&& !document.querySelector('input[name="brandmb"]').checked
		&& !document.querySelector('input[name="logomb"]').checked
		&& !document.querySelector('input[name="autremb"]').checked){
		checkboxes = true
	}
	if(document.getElementById('debutmb').value=="" && document.getElementById('finmb').value==""){
		dates = true
	}

	if(checkboxes){
			$('#checkerrormb').removeClass('is-hidden');
		if(dates){
			$('#dateerrormb').removeClass('is-hidden');
		}
	}else if(dates){
		$('#dateerrormb').removeClass('is-hidden');
	}else{
		document.getElementById('ndmbscreen').style.display='none';
		document.getElementById('rdmbscreen').style.display='block';
	}
}
