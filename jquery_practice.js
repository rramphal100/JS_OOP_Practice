$('h1, p, ul').hide();

$(document).ready(
	function(){
		alert("This page is ready!");
		$('h1').fadeIn();
		$('#p1').slideDown();
		$('#p2').slideDown();
		$('#p3').animate({opacity: .5});
		$('ul').animate({opacity: .75});
		$('h1').click(function(){
			alert("You clicked on h1!");
		});
		$('p').mouseover(
			function(){
				$(this).css({color: "red"});
			})
	}
);