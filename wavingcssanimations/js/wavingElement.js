jQuery.fn.waveElement = function(){
	var el = $(this);
	// console.log(el);

	countUl = el.children('li').length;
	// console.log(countUl);
	el.children('li').each(function(i, obj){
		// console.log($(this));
		splitString = appendSplit($(this).children('a').text());
		// console.log(splitString);
		$(this).children('a').html(splitString);
	});

	// var wavingElements = $(this).find('div');
	// wavingElements.each(function(){
	// 	str = $(this).text();
	// 	// console.log(str);
	// 	incrementUp = '-10px';
	// 	incrementDown = '-2px';
	// 	mechUps = {'transform':'translate3d(0px,'+ incrementUp +',0px)','Moztransform':'translate3d(0px,'+ incrementUp +',0px)','WebkitTransform':'translate3d(0px,'+ incrementUp +',0px)','msTransform':'translate3d(0px,'+ incrementUp +',0px)'};
	// 	mechDowns = {'transform':'translate3d(0px,'+ incrementDown +',0px)','Moztransform':'translate3d(0px,'+ incrementDown +',0px)','WebkitTransform':'translate3d(0px,'+ incrementDown +',0px)','msTransform':'translate3d(0px,'+ incrementDown +',0px)'};
	// 	time = 100;
	// 	waveSpeed = 30;



	// });

	// for (var i=0; i<str.length; i++) {

	// (function(i){
	// 	setTimeout(function(){
	// 		wavingElements..eq(i).css(mechUps);

	// 		setTimeout(function(){
	// 	  		wavingElements.eq(i).css(mechDowns);
	// 	    },time);

	// 	}, i * waveSpeed);

	// 	}(i));

	// }//End of Infamous for loop
	
	function appendSplit(string){
		// console.log(string);
		strLength = string.length;
		newString = '';
		// console.log(strLength);
		for (var i = 0; i < string.length; i++) {
			// console.log(string[i]);
			if(string[i] != ' '){
				newString += '<div style="display:inline-block;"> '+ string[i] + '</div>';
			}else{
				newString += ' ';
			}
			
		};
		return newString;
	}

// 	function mrLoopy(el) {
// 	el = el;
// 	anchor = el.children('li').children('a');
//    var wavingElements = anchor.children("div");
//    console.log(wavingElements);
//    var str = anchor.text();
//    var incrementUp = '-10px';
//    var incrementDown = '-2px';
//    var mechUps = {'transform':'translate3d(0px,'+ incrementUp +',0px)','Moztransform':'translate3d(0px,'+ incrementUp +',0px)','WebkitTransform':'translate3d(0px,'+ incrementUp +',0px)','msTransform':'translate3d(0px,'+ incrementUp +',0px)'};
//    var mechDowns = {'transform':'translate3d(0px,'+ incrementDown +',0px)','Moztransform':'translate3d(0px,'+ incrementDown +',0px)','WebkitTransform':'translate3d(0px,'+ incrementDown +',0px)','msTransform':'translate3d(0px,'+ incrementDown +',0px)'};
//    var time = 100;
//    var waveSpeed = 30;
// for (var i=0; i<str.length; i++) {

//   (function(i){
//     setTimeout(function(){
//      wavingElements.eq(i).css(mechUps);
 
//     setTimeout(function(){
//       wavingElements.eq(i).css(mechDowns);
//            },time);
      

//     }, i * waveSpeed);

//   }(i));

//}//End of Infamous for loop
  
 // }// End of Mr Loopy
	el.children('li').hover(function(){ 
		var wavingElements = $(this).find('div');
		str = $(this).text();
		// console.log(str);
		incrementUp = '-10px';
		incrementDown = '-2px';
		mechUps = {'transform':'translate3d(0px,'+ incrementUp +',0px)','Moztransform':'translate3d(0px,'+ incrementUp +',0px)','WebkitTransform':'translate3d(0px,'+ incrementUp +',0px)','msTransform':'translate3d(0px,'+ incrementUp +',0px)'};
		mechDowns = {'transform':'translate3d(0px,'+ incrementDown +',0px)','Moztransform':'translate3d(0px,'+ incrementDown +',0px)','WebkitTransform':'translate3d(0px,'+ incrementDown +',0px)','msTransform':'translate3d(0px,'+ incrementDown +',0px)'};
		time = 100;
		waveSpeed = 30;

		for (var i=0; i < wavingElements.length; i++) {
			(function(i){
			setTimeout(function(){
				wavingElements.eq(i).css(mechUps);

				setTimeout(function(){
			  		wavingElements.eq(i).css(mechDowns);
			    },time);

			}, i * waveSpeed);	
		}(i));

		}//End of Infamous for loop
	});//On mouseover
};

$(".wavingwrap").waveElement();