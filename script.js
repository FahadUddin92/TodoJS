
$(document).ready(function(){
	var count=localStorage.length;// get count
	console.log($('.data').val());	// whats in the todo 0
	console.log(localStorage.length); // how much data is in the storage

	var data = new Array();
	
	var i=0;
		while (i<localStorage.length) {
			data[i]=localStorage.getItem('todo'+i);
			console.log(data[i]);
			i++;
		}
	//var count=localStorage.getItem("todo").length;
    $(".submit").click(function(){
		//count++;		
		data.push($('.data').val());
		localStorage.setItem("todo"+count,$('.data').val());
		count++;
		var i=0;
		$(".todorow").addClass("hide");
		while (i<localStorage.length) {
			var value = "<div class='todorow'><div class='todoitem'>"+data[i]+"</div><div class='todoremove'>X</div></div>";
			$(".container").append(value);
			console.log(data[i]);
			i++;
		}
		
    });
    $(".container").on("click", ".todoitem", function(){
        jQuery(this).addClass("strike");
    });
    $(".container").on("click", ".todoremove", function(){
        jQuery(this).closest('.todorow').addClass("hide");
    });
	
	var i=0;
		while (i<localStorage.length) {
			var value = "<div class='todorow'><div class='todoitem'>"+data[i]+"</div><div class='todoremove'>X</div></div>";
			$(".container").append(value);
			console.log(data[i]);
			i++;
		}
	
});