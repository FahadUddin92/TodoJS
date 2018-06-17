
$(document).ready(function(){
	var count=localStorage.length;// get count
	var data = new Array();	
	var i=0;
		while (i<localStorage.length) {
			if(!localStorage.key(i))
			{
				i++;
				continue;
			}
			data[i]=localStorage.getItem(localStorage.key(i));
			i++;
		}
	$(".data").keypress(function(e){
		if(e.which == 13) {
			console.log("pressed");
		data.push($('.data').val());
		localStorage.setItem("todo"+(localStorage.length+1),$('.data').val());
		count++;
		var i=0;
		$(".todorow").remove();		
		while (i<localStorage.length) {
			var value = "<div class='todorow'><div id="+localStorage.key(i)+" class='todoitem'>"+data[i]+"</div><div class='todoremove'>X</div></div>";
			$(".container").append(value);
			i++;
		}
		$("input").val("");
		}		
    });
    $(".submit").click(function(){
		data.push($('.data').val());
		localStorage.setItem("todo"+(localStorage.length+1),$('.data').val());
		count++;
		var i=0;
		$(".todorow").remove();		
		
		while (i<localStorage.length) {
			var value = "<div class='todorow'><div id="+localStorage.key(i)+" class='todoitem'>"+data[i]+"</div><div class='todoremove'>X</div></div>";
			$(".container").append(value);
			i++;
		}
		$("input").val("");
		
    });
    $(".container").on("click", ".todoremove", function(){
		localStorage.removeItem(jQuery(this).siblings().attr('id'));
		console.log(jQuery(this).siblings().attr('id'));
		$(".todorow").remove();
		var data2 = new Array();
		var j=0;
		while (j<localStorage.length) {
			if(localStorage.getItem(localStorage.key(i))==null)
			{
				j++;
				continue;
			}	
			data2[j]=localStorage.getItem(localStorage.key(j));
			j++;
		}
		data = data2.slice(0);
		var i=0;
		while (i<localStorage.length) {
			console.log(localStorage.key(i));
			if(localStorage.getItem(localStorage.key(i))==null)
			{
				i++;
				continue;
			}
			var value = "<div class='todorow'><div id="+localStorage.key(i)+" class='todoitem'>"+localStorage.getItem(localStorage.key(i))+"</div><div class='todoremove'>X</div></div>";
			$(".container").append(value);
			i++;
		}
		
    });
	var i=0;
		while (i<localStorage.length) {
			if(!localStorage.key(i))
			{
				console.log(localStorage.key(i));
				i++;
				continue;
			}
			var value = "<div class='todorow'><div class='todoitem'>"+data[i]+"</div><div class='todoremove'>X</div></div>";
			$(".container").append(value);
			i++;
		}
});