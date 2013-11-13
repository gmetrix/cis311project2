var global =0;
function validateForm() {
		var product = document.forms["productForm"]["productName"].value;
		var s = document.forms["productForm"]["stock"].value;
		var p = document.forms["productForm"]["price"].value;
		if(product == null|| s == ""|| p ==""||product == ""|| s == null|| p ==null){
			alert("user must fill out the appropriate fields");
			return false;
		}
		else{
			global =1;
			return true;
		}
}

function display()
{
	var d = new Date();
	// var test = window.open("./confirm.html","_parent");
	if(global ==1){
		var x = "This product has been added!<br> "
		var z = x + d;
		document.getElementById("confirmMe").innerHTML=z;
	    setTimeout(window.open("./index.html", _parent),3000); // after 2 sec it will close
	}


}