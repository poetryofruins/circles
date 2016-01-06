function in_circle(x, y, a, b, r) {
	var r2, xa, yb;
	
	r2 = r * r;
	xa = (x - a) * (x - a);
	yb = (y - b) * (y - b);
	
	if(xa + yb <= r2) {
		return true;
	} else {
		return false;
	}
	
}

jQuery(document).ready(function($) {
	function draw_circle(a, b, r) {
		var x, y;
		var ry;
		for(x = 0; x < 64; x++) {
			for(y = 0; y < 64; y++) {
				if(in_circle(x, y, a, b, r)) {
					ry = 63 - y;
					$('table tr:eq(' + ry + ') td:eq(' + x + ')').css('backgroundColor', $('#color').val());
				}
			}
		}
	}
	
	function clear_blackboard() {
		$('table td').css('backgroundColor', '#ffffff');
	}
	
	function freckle() {
		for(x = 0; x < 64; x++) {
			for(y = 0; y < 64; y++) {
				if(Math.random() > 0.5) {
					ry = 63 - y;
					$('table tr:eq(' + ry + ') td:eq(' + x + ')').css('backgroundColor', '#ffffff');
				}
			}
		}
	}
	
	$('#draw').click(function() {
		var a = $('#center_x').val(), b = $('#center_y').val(), r = $('#radius').val();
		
		draw_circle(a, b, r);
	});
	
	$('#clear').click(function() {
		clear_blackboard();
	});
	
	$('#freckle').click(function() {
		freckle();
	});
	
	$('#draw_freckled').click(function() {
		var a = $('#center_x').val(), b = $('#center_y').val(), r = $('#radius').val(), rim = $('#rim').val();
		
		draw_circle(a, b, r);
		freckle();
		draw_circle(a, b, r - rim);
	});
});
