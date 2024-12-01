// JavaScript Document
$('#banner1').owlCarousel({
   	loop:true,	// cho lap lại
	items:4,	// xuất hiện 1 ảnh thôi
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	autoplay:true,		// cho phép tự động chạy
    autoplayTimeout:2000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
	margin:20,
	//xuất hiện item tùy theo thiết bị (pc/ ipad/phone)i


	  responsive:{
        0:{
            items:1,
           dots:false,
        },
        600:{
            items:2,
			dots:false,
        },
        1000:{
            items:4,
			dots:false,
        }
    }
	
	  })

$('#banner2').owlCarousel({
   	loop:true,	// cho lap lại
	items:4,	// xuất hiện 1 ảnh thôi
	smartSpeed:1500,   	// tốc độ thay đổi ảnh
	autoplay:true,		// cho phép tự động chạy
    autoplayTimeout:2000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
	margin:20,
// xuất hiện item tùy theo thiết bị (pc/ ipad/phone)i


	  responsive:{
        0:{
            items:1,
           dots:false,
        },
        600:{
            items:2,
			dots:false,
        },
        1000:{
            items:4,
			dots:false,
        }
    }
	
	  })

$('#banner3').owlCarousel({
   	loop:true,	// cho lap lại
	items:4,	// xuất hiện 1 ảnh thôi
	smartSpeed:2000,   	// tốc độ thay đổi ảnh
	autoplay:true,		// cho phép tự động chạy
    autoplayTimeout:2000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
	margin:20,
// xuất hiện item tùy theo thiết bị (pc/ ipad/phone)i


	 responsive:{
        0:{
            items:1,
           dots:false,
        },
        600:{
            items:2,
			dots:false,
        },
        1000:{
            items:4,
			dots:false,
        }
    }
	
	  })

