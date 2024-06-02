document.querySelector("#but button").addEventListener("click",function(){
	gsap.from("#but h1",{
		opacity:1,
	})
})
document.querySelector("#but button").addEventListener("click",function(){
	gsap.to("#but h1",{
		
		opacity:0
		// display:"none"
	})
})