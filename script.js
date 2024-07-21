


var t1=gsap.timeline()


t1.from("#nav-part1 #t",{
	y:-80,
	stagger:1,
	duration:1,
	opacity:0
})
.from("#nav-part1 h2",{
	y:-80,
	stagger:1,
	duration:0.3,
	opacity:0
})

.from("a",{
	y:-100,
	stagger:1,
	duration:0.8,
	opacity:0
})
.from("button",{
	y:-80,
	stagger:1,
	duration:0.3,
	opacity:0
})
.from("#page1-part1 h1",{
	y:-80,
	stagger:1,
	duration:0.3,
	opacity:0
})
gsap.to("#page1-part1",{
	opacity:0,
	scrollTrigger:{
		trigger:"#page1",
		scroller:"body",
		scrub:true,
		markers:true,
		start:"top -10%",
		end:"top -70%"

	}
})