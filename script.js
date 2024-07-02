
gsap.from("#hea h1",{
	y:100,
	stagger:0.3,
	opacity:0
})
function bsdk(){
	
gsap.to("#om2",{
	bottom:"-2%",
	// scale:1,
	scrollTrigger:{
		trigger:"#page5",
		scroller:"body",
		scrub:1,
		// markers:true,
		// top:"10%"
		// pin:true,
		start:"-10% 10%",
	
		pin:true
	
	}
	})
	
			gsap.to("#om5",{
				bottom:"-6%",
				// scale:1,
				scrollTrigger:{
					trigger:"#page5",
					scroller:"body",
					scrub:3,
					// markers:true,
					// top:"10%"
					// pin:true,
					// start:"-10% 10%",
				
					pin:true
				
				}
				})
					
}
bsdk()
// // var swiper = new Swiper(".mySwiper", {
// 	direction: "vertical",
// 	pagination: {
// 	  el: ".swiper-pagination",
// 	  clickable: true,
// 	},
//   });
function loda(){
	gsap .from("#hd1 img ",{
		rotate:360,
		// delay:5,
		scrollTrigger:{
			trigger:"#page6",
			scroller:"body",
			scrub:2,
			// markers:true,
			// top:"10%"
			// pin:true,
			// start:"10% -10%"
			start:"0% 30%",
			
			end:"50% 20%"
		
		}
	})
	gsap .from("#hd h1",{
		y:100,
		stagger:0.03,
		// delay:5,
		scrollTrigger:{
			trigger:"#page6",
			scroller:"body",
			scrub:2,
			// markers:true,
			// top:"10%"
			// pin:true,
			// start:"10% -10%"
			// start:"0% 30%",
			
			// end:"50% 20%"
		
		}
	})
	gsap .from("#iw img",{
		rotate:360,
		// delay:5,
		scrollTrigger:{
			trigger:"#page10",
			scroller:"body",
			scrub:2,
			// markers:true,
			// top:"10%"
			// pin:true,
			// start:"10% -10%"
			start:"0% 30%",
			
			end:"50% 20%"
		
		}
	})
	gsap .from("#iw1  img",{
		rotate:360,
		// delay:5,
		scrollTrigger:{
			trigger:"#page10",
			scroller:"body",
			scrub:2,
			// markers:true,
			// top:"10%"
			// pin:true,
			// start:"10% -10%"
			start:"0% 30%",
			
			end:"50% 20%"
		
		}
	})
	
}
loda()
	//thlodis is split the our page8 element
function ll(){
	var text=document.querySelectorAll("#page8 h1")
	text.forEach(function(elem){
		var s=elem.textContent
		var splited=s.split("")
		var clutter=""
	
		splited.forEach(function(e){
			clutter+=`<span>${e}</span>`
	
		})
		elem.innerHTML=clutter
		console.log(splited)
	
	})
}
ll()
gsap.to("#page8 h1 span",{
	color:"white",
	stagger:0.1,
	scrollTrigger:{
		trigger:"#page8",
		scroller:"body",
		scrub:2,
		// markers:true,
		// top:"10%"
		// pin:true,
		// start:"10% -10%"
		start:"0% 30%",
		
		end:"50% 20%"
	
	}
})