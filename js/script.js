

////slider

$(document).ready(function(){

$(".slider").slick({
	arrows:true, //սլաքները միացնել անջատել
	dots:true,// տակի կետիկները
	adaptiveHeight:true,	 // ավտոմատ բարձրությունը դզումա {աշխատումա . slick-track{aling-items:flex-start} ակտիվացնելուց հետո }
	slidesToShow:1,// սլայդի քանակը: լայնութայն հետ փոփոխություն ա անում
	slidesToScroll:1, //քանի նկար ցույց տա թերթելուց
	speed:1000,
	easing:"ease",
	infinite:true, //defult true
	initialSlide:0,// startvi slaid
	autoplay:true,
	autoplaySpeed:4000,

});
	});

/////////////////////////////////////////

//window loader



  window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 3000);
  }

////////////////////////////

//for the director
     let director = document.querySelector(".input_director").value;
    document.querySelector(".result_polo_director").innerHTML = director*2 + " " + "հատ";
    document.querySelector(".result_pants_director").innerHTML = director + " " + "հատ";
    document.querySelector(".result_costume_director").innerHTML = Math.floor(director/2) + " " + "հատ";
    document.querySelector(".result_jacket_director").innerHTML = Math.floor(director/3) + " " + "հատ";
    document.querySelector(".result_shoes_director").innerHTML = Math.floor(director/2) + " " + "զույգ";

  
//for engineer   

 	let engineer = document.querySelector(".input_engineer").value;
 	document.querySelector(".result_polo_engineer").innerHTML = engineer*2 + " " + "հատ";
 	document.querySelector(".result_pants_engineer").innerHTML = engineer + " " + "հատ";
 	document.querySelector(".result_costume_engineer").innerHTML = Math.floor(engineer/2) + " " + "հատ";
 	document.querySelector(".result_jacket_engineer").innerHTML = Math.floor(engineer/3) + " " + "հատ տղ. համար";
 	document.querySelector(".result_shoes_engineer").innerHTML = Math.floor(engineer/2) + " " + "զույգ տղ. համար";

//for woman engineer 
	
	let  woman_engineer = document.querySelector(".input_woman_engineer").value;
	document.querySelector(".result_polo_woman_engineer").innerHTML = woman_engineer*2 + " " + "հատ";
	document.querySelector(".result_pants_woman_engineer").innerHTML = woman_engineer + " " + "հատ";
	document.querySelector(".result_costume_woman_engineer").innerHTML = Math.floor(woman_engineer/2) + " " + "հատ";
	document.querySelector(".result_jacket_woman_engineer").innerHTML = Math.floor(woman_engineer/3) + " " + "հատ կնոջ համար";
	document.querySelector(".result_shoes_woman_engineer").innerHTML = Math.floor(woman_engineer/2) + " " + "զույգ կնոջ համար";
	document.querySelector(".result_bathrobe_woman_engineer").innerHTML = Math.floor(woman_engineer/2) + " " + "հատ";	
						
//for worker

	let worker = document.querySelector(".input_worker").value;
	document.querySelector(".result_T-shirt_worker").innerHTML = worker*2 + " " + "հատ";
	document.querySelector(".result_overalls_worker").innerHTML = worker + " " + "հատ";
	document.querySelector(".result_shoes_worker").innerHTML = worker + " " + "զույգ տղ. համար";
	document.querySelector(".result_costume_worker").innerHTML = worker + " " + "հատ տղ. համար";
	document.querySelector(".result_jacket_worker").innerHTML = Math.floor(worker/2) + " " + "հատ տղ. համար";
//for woman worker
	let woman_worker = document.querySelector(".input_woman_worker").value;
	//document.querySelector(".result_T-shirt_woman_worker").innerHTML = woman_worker*2 + " " + "հատ կնոջ";
	document.querySelector(".result_costume_winter_woman_worker").innerHTML = woman_worker + " " + "հատ կնոջ համար";
	document.querySelector(".result_shoes_woman_worker").innerHTML = woman_worker + " " + "զույգ կնոջ համար";
	document.querySelector(".result_costume_woman_worker").innerHTML = woman_worker + " " + "հատ";
	//document.querySelector(".result_jacket_woman_worker").innerHTML = woman_worker + " " + "հատ կնոջ համար";
	document.querySelector(".result_jacket_woman_worker").innerHTML = Math.floor(woman_worker/2) + " " + "հատ կնոջ համար";	
	document.querySelector(".result_bathrobe_woman_worker").innerHTML = woman_worker + " " + "հատ";

//for welder
	let welder = document.querySelector(".input_welder").value;
	document.querySelector(".result_welder").innerHTML = welder + " " + "հատ";	
	document.querySelector(".result_welders_Gloves").innerHTML = welder*9 + " " + "զույգ";	


    
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    document.querySelector("button").onclick = myClick;
    function myClick(){
//for the director
     let director = document.querySelector(".input_director").value;
    document.querySelector(".result_polo_director").innerHTML = director*2 + " " + "հատ";
    document.querySelector(".result_pants_director").innerHTML = director + " " + "հատ";
    document.querySelector(".result_costume_director").innerHTML = Math.floor(director/2) + " " + "հատ";
    document.querySelector(".result_jacket_director").innerHTML = Math.floor(director/3) + " " + "հատ";
    document.querySelector(".result_shoes_director").innerHTML = Math.floor(director/2) + " " + "զույգ";
  
//for engineer   

 	let engineer = document.querySelector(".input_engineer").value;
 	document.querySelector(".result_polo_engineer").innerHTML = engineer*2 + " " + "հատ";
 	document.querySelector(".result_pants_engineer").innerHTML = engineer + " " + "հատ";
 	document.querySelector(".result_costume_engineer").innerHTML = Math.floor(engineer/2) + " " + "հատ";
 	document.querySelector(".result_jacket_engineer").innerHTML = Math.floor(engineer/3) + " " + "հատ տղ. համար";
 	document.querySelector(".result_shoes_engineer").innerHTML = Math.floor(engineer/2) + " " + "զույգ տղ. համար";

//for woman engineer 
	
	let  woman_engineer = document.querySelector(".input_woman_engineer").value;
	document.querySelector(".result_polo_woman_engineer").innerHTML = woman_engineer*2 + " " + "հատ";
	document.querySelector(".result_pants_woman_engineer").innerHTML = woman_engineer + " " + "հատ";
	document.querySelector(".result_costume_woman_engineer").innerHTML = Math.floor(woman_engineer/2) + " " + "հատ";
	document.querySelector(".result_jacket_woman_engineer").innerHTML = Math.floor(woman_engineer/3) + " " + "հատ կնոջ համար";
	document.querySelector(".result_shoes_woman_engineer").innerHTML = Math.floor(woman_engineer/2) + " " + "զույգ կնոջ համար";
	document.querySelector(".result_bathrobe_woman_engineer").innerHTML = Math.floor(woman_engineer/2) + " " + "հատ";					
//for worker

	let worker = document.querySelector(".input_worker").value;
	document.querySelector(".result_T-shirt_worker").innerHTML = worker*2 + " " + "հատ";
	document.querySelector(".result_overalls_worker").innerHTML = worker + " " + "հատ";
	document.querySelector(".result_shoes_worker").innerHTML = worker + " " + "զույգ տղ. համար";
	document.querySelector(".result_costume_worker").innerHTML = worker + " " + "հատ տղ. համար";
	document.querySelector(".result_jacket_worker").innerHTML = Math.floor(worker/2) + " " + "հատ տղ. համար";
//for woman worker
	let woman_worker = document.querySelector(".input_woman_worker").value;
	//document.querySelector(".result_T-shirt_woman_worker").innerHTML = woman_worker*2 + " " + "հատ կնոջ";
	document.querySelector(".result_costume_winter_woman_worker").innerHTML = woman_worker + " " + "հատ կնոջ համար";
	document.querySelector(".result_shoes_woman_worker").innerHTML = woman_worker + " " + "զույգ կնոջ համար";
	document.querySelector(".result_costume_woman_worker").innerHTML = woman_worker + " " + "հատ";
	//document.querySelector(".result_jacket_woman_worker").innerHTML = woman_worker + " " + "հատ կնոջ համար";	
	document.querySelector(".result_jacket_woman_worker").innerHTML = Math.floor(woman_worker/2) + " " + "հատ կնոջ համար";
	document.querySelector(".result_bathrobe_woman_worker").innerHTML = woman_worker + " " + "հատ";

//for welder
	let welder = document.querySelector(".input_welder").value;
	document.querySelector(".result_welder").innerHTML = welder + " " + "հատ";	
	document.querySelector(".result_welders_Gloves").innerHTML = welder*9 + " " + "զույգ";	




        
    };

/*A jQuery plugin which add loading indicators into buttons*/

(function ($) {
    $.fn.buttonLoader = function (action) {
        var self = $(this);
        if (action == 'start') {
            if ($(self).attr("disabled") == "disabled") {
                e.preventDefault();
            }
            $('.has-spinner').attr("disabled", "disabled");
            $(self).attr('data-btn-text', $(self).text());
            $(self).html('<span class="spinner"><i class="fa fa-spinner fa-spin"></i></span>Loading');
            $(self).addClass('active');
        }
        if (action == 'stop') {
            $(self).html($(self).attr('data-btn-text'));
            $(self).removeClass('active');
            $('.has-spinner').removeAttr("disabled");
        }
    }
})(jQuery);

$(document).ready(function () {
    
    $('.has-spinner').click(function () {
        var btn = $(this);
        $(btn).buttonLoader('start');
        setTimeout(function () {
            $(btn).buttonLoader('stop');
        }, 1000);
    });
});

///////////////////////////////////////////////////////////////////