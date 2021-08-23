function ibg(){
	let ibg = document.querySelectorAll('.ibg');
	for(var i=0;i<ibg.length;i++){
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}

}
ibg();





$(document).ready(function(){
	$('.help-slider').slick({
		slidesToShow: 3,
		variableWidth: true,
		infinite:false,
		arrows:false,
		swipeToSlide: true,
		touchThreshold:10,
		responsive:[{
			breakpoint:1200,
			settings:{
				slidesToShow:1,
			}
		}]

	});
	$('.animal-slider').slick({
		slidesToShow:8,
		arrows:false,
		slidesToScroll: 1,
		touchThreshold:10,
		waitForAnimate:false,
		swipeToSlide: true,
		responsive:[{
			breakpoint:790,
			settings:{
				slidesToShow:4,
			}
		}]
	})



	

		

		
	
	

	




	
})

const cursor = document.getElementById('cursor');
const follower = document.getElementById('aura');


mouseX = 0, mouseY = 0, posX = 0,posY = 0;

function mouseCoords(e){
	mouseX = e.pageX;
	mouseY = e.pageY;
}

gsap.to({},.01,{
	repeat:-1,
	onRepeat:()=>{
		posX += (mouseX- posX) /5
		posY += (mouseY- posY) /5

		gsap.set(cursor,{
			css:{
				left:mouseX-18,
				top:mouseY-18
			}
		})

		gsap.set(follower,{
			css:{
				left:posX -40,
				top:posY - 40
			}
		})
		if(follower.classList.contains('active')){
			gsap.set(follower,{
			css:{
				left:posX -55,
				top:posY - 55
			}
		})
		}
	}
})

document.body.addEventListener('mousemove',e=>{
	mouseCoords(e);
})

document.body.addEventListener('mouseot',()=>{
	cursor.classList.add('hidden');
	aura.classList.add('hidden');
});

const links = $('a');
for(let i=0;i<links.length;i++){
links[i].addEventListener('mouseover',()=>{
	cursor.classList.add('active');
	follower.classList.add('active');
})

links[i].addEventListener('mouseout',()=>{
	cursor.classList.remove('active');
	follower.classList.remove('active');
})
}

const slider = $('.slider');
for(let i=0;i<slider.length;i++){
	slider[i].addEventListener('mouseover',()=>{
		cursor.classList.add('active_slide');
		follower.classList.add('active_slide');
	})

	slider[i].addEventListener('mouseout',()=>{
		cursor.classList.remove('active_slide');
		follower.classList.remove('active_slide');
	})
}