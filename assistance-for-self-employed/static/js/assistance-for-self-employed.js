// ~~~~~~~~~~~~~~~~~~~~~~~~~ //
//      section 3 slider     //
// ~~~~~~~~~~~~~~~~~~~~~~~~~ //
let currentSlide3        = 1;
let widthToTranslate3  = document.querySelector(".sc3-mob-slider").clientWidth;
const section3MobileFunctionSlider = () => {
    const sliderInner       = document.querySelector(".sc3-mob-slider-inr");
    const btnLeft           = document.querySelector(".sc3-left-btn");
    const btnRight          = document.querySelector(".sc3-right-btn");
    const sliderCards       = document.querySelectorAll(".sc3-mob-slide-cd");
    const sliderLines       = document.querySelectorAll(".sc3-slider-line");
    const maxStep           = parseInt(sliderCards.length);
    
    let startX = 0;
    let endX = 0;

    const changeSlide = (direction) => {
        if (direction === 'left') {
            if (currentSlide3 > 1 && currentSlide3 <= maxStep) {
                currentSlide3 -= 1;
            } else if (currentSlide3 === 1) {
                currentSlide3 = maxStep;
            }
        } else if (direction === 'right') {
            if (currentSlide3 >= 1 && currentSlide3 < maxStep) {
                currentSlide3 += 1;
            } else if (currentSlide3 === maxStep) {
                currentSlide3 = 1;
            }
        }

        sliderLines.forEach (line =>{
            line.classList.remove("active");
            if (line.getAttribute("sc3-step") == currentSlide3) {
                line.classList.toggle("active");
            }
        })

        sliderInner.style   = `transform: translateX(-${(currentSlide3 - 1)*(widthToTranslate3+18)}px);`;
    };

    btnLeft.addEventListener("click", () => changeSlide('left'));
    btnRight.addEventListener("click", () => changeSlide('right'));

    sliderInner.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });
    sliderInner.addEventListener("touchmove", (e) => {
        endX = e.touches[0].clientX;
    });

    sliderInner.addEventListener("touchend", () => {
        if (endX === 0) {
            endX = startX;
        }

        if (startX > endX + 50) { 
            changeSlide('right');
        } else if (startX < endX - 50) { 
            changeSlide('left');
        }
        
        endX = 0;
        startX = 0;
    });
};



// ~~~~~~~~~~~~~~~~~~~~~~~~ //
//     section 5 slider     //
// ~~~~~~~~~~~~~~~~~~~~~~~~ //
let currentSlide5 = 1;
let widthToTranslate5  = document.querySelector(".sc5-slider").clientWidth;
const section5BtnsSlider = (currentSlide, maxStep) => {
    const btnSliderInner     = document.querySelector(".sc5-col-1");
    const contWidth          = document.querySelector(".sc5-col-1").clientWidth;

    let widthToTranslate   = document.querySelector(".sc5-btn").clientWidth;
    if (widthToTranslate > 180){widthToTranslate = 180;}
    let maxWidth             = widthToTranslate * maxStep + 20 * (maxStep - 1);

    if (window.innerWidth > 490){ btnSliderInner.style = `transform: translateX(0px);`;}
    else if (window.innerWidth <= 490){
        if (currentSlide < maxStep){
            btnSliderInner.style = `transform: translateX(-${(widthToTranslate * (currentSlide-1)) - 
                                    (contWidth / 2) + (widthToTranslate / 2) + 20*(currentSlide-1)}px);`;
        }
        else{btnSliderInner.style = `transform: translateX(-${maxWidth - contWidth}px);`;}
    }
}

const section5ChangeSlide = () => {
    const allBtns           = document.querySelectorAll(".sc5-btn");
    const sliderInner       = document.querySelector(".sc5-slider-inr");
    const sliderLines       = document.querySelectorAll(".sc5-slider-line");
    const maxStep           = parseInt(allBtns.length);
    
    allBtns.forEach(btn => btn.replaceWith(btn.cloneNode(true)));
    const newAllBtns = document.querySelectorAll(".sc5-btn");

	newAllBtns.forEach(btn => {
		btn.addEventListener("click", function () {
			var activeBtn = document.querySelector(".sc5-btn.active");
			if (activeBtn !== btn) {
				btn.classList.toggle("active");
				activeBtn.classList.toggle("active");

                currentSlide5 = parseInt(btn.getAttribute("sc5-step"));

                sliderLines.forEach (line =>{
                    line.classList.remove("active");
                    if (line.getAttribute("sc5-step") == currentSlide5) {
                        line.classList.toggle("active");
                    }
                })

                sliderInner.style = `transform: translateX(-${(currentSlide5 - 1)*(widthToTranslate5+20)}px);`;

                section5BtnsSlider(currentSlide5, maxStep);
			}
		})
	})
}

const section5FunctionSlider = () => {
    const sliderInner       = document.querySelector(".sc5-slider-inr");
    const sliderCards       = document.querySelectorAll(".sc5-slider-cd");
    const sliderLines       = document.querySelectorAll(".sc5-slider-line");
    const allBtns           = document.querySelectorAll(".sc5-btn");
    const maxStep           = parseInt(sliderCards.length);
    let startX = 0;
    let endX = 0;


    const changeSlide = (direction) => {
        if (direction === 'left') {
            if (currentSlide5 > 1 && currentSlide5 <= maxStep) {
                currentSlide5 -= 1;
            } else if (currentSlide5 === 1) {
                currentSlide5 = maxStep;
            }
        } else if (direction === 'right') {
            if (currentSlide5 >= 1 && currentSlide5 < maxStep) {
                currentSlide5 += 1;
            } else if (currentSlide5 === maxStep) {
                currentSlide5 = 1;
            }
        }

        allBtns.forEach(btn => {
            if (btn.getAttribute("sc5-step") == currentSlide5) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        })

        sliderLines.forEach (line =>{
            line.classList.remove("active");
            if (line.getAttribute("sc5-step") == currentSlide5) {
                line.classList.toggle("active");
            }
        })

        sliderInner.style 		= `transform: translateX(-${(currentSlide5 - 1)*(widthToTranslate5+20)}px);`;

        section5BtnsSlider(currentSlide5, maxStep);
    };

    sliderInner.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });
    sliderInner.addEventListener("touchmove", (e) => {
        endX = e.touches[0].clientX;
    });

    sliderInner.addEventListener("touchend", () => {
        if (endX === 0) {
            endX = startX;
        }

        if (startX > endX + 50) { 
            changeSlide('right');
        } else if (startX < endX - 50) { 
            changeSlide('left');
        }
        
        endX = 0;
        startX = 0;
    });
};

let currentSlide7        = 1;
let widthToTranslate7    = document.querySelector(".sc7-slider").clientWidth;
const section7FunctionSlider = () => {
    const sliderInner       = document.querySelector(".sc7-slider-inr");
    const btnLeft           = document.querySelector(".sc7-left-btn");
    const btnRight          = document.querySelector(".sc7-right-btn");
    const sliderCards       = document.querySelectorAll(".sc7-slider-cd");
    const sliderLines       = document.querySelectorAll(".sc7-slider-line");
    const maxStep           = parseInt(sliderCards.length);
    let startX = 0;
    let endX = 0;

    const changeSlide = (direction) => {
        if (direction === 'left') {
            if (currentSlide7 > 1 && currentSlide7 <= maxStep) {
                currentSlide7 -= 1;
            } else if (currentSlide7 === 1) {
                currentSlide7 = maxStep;
            }
        } else if (direction === 'right') {
            if (currentSlide7 >= 1 && currentSlide7 < maxStep) {
                currentSlide7 += 1;
            } else if (currentSlide7 === maxStep) {
                currentSlide7 = 1;
            }
        }

        sliderLines.forEach (line =>{
            line.classList.remove("active");
            if (line.getAttribute("sc7-step") == currentSlide7) {
                line.classList.toggle("active");
            }
        })

        sliderInner.style   = `transform: translateX(-${(currentSlide7 - 1)*(widthToTranslate7+18)}px);`;
    };

    btnLeft.addEventListener("click", () => changeSlide('left'));
    btnRight.addEventListener("click", () => changeSlide('right'));

    sliderInner.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });
    sliderInner.addEventListener("touchmove", (e) => {
        endX = e.touches[0].clientX;
    });

    sliderInner.addEventListener("touchend", () => {
        if (endX === 0) {
            endX = startX;
        }

        if (startX > endX + 50) { 
            changeSlide('right');
        } else if (startX < endX - 50) { 
            changeSlide('left');
        }
        
        endX = 0;
        startX = 0;
    });
};

const setStartSlide = () => {
    const sliderInner3      = document.querySelector(".sc3-mob-slider-inr");
    const sliderInner5      = document.querySelector(".sc5-slider-inr");
    const sliderInner7       = document.querySelector(".sc7-slider-inr");
    widthToTranslate3  = document.querySelector(".sc3-mob-slider").clientWidth;
    widthToTranslate5  = document.querySelector(".sc5-slider").clientWidth;
    widthToTranslate7  = document.querySelector(".sc7-slider").clientWidth;

    
    sliderInner3.style 		= `transform: translateX(-${(currentSlide3 - 1)*(widthToTranslate3+18)}px);`;
    sliderInner5.style 		= `transform: translateX(-${(currentSlide5 - 1)*(widthToTranslate5+20)}px);`;
    sliderInner7.style 		= `transform: translateX(-${(currentSlide7 - 1)*(widthToTranslate7+18)}px);`;
    section5BtnsSlider(currentSlide5, 4);
}


document.addEventListener("DOMContentLoaded", function () {
	section3MobileFunctionSlider();

    section5ChangeSlide();
    section5FunctionSlider();

    section7FunctionSlider();

    section6Functions();
    section6FunctionSlider();
	section6MobileFunctionSlider();
})

window.addEventListener("resize", function () {
    setStartSlide();

})





// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
//       section 6 copied slider           //
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// 			section 6 anim      	  //
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

const section6Functions = () => {
	const allCards = document.querySelectorAll(".sc6-mn-cds");
	const widthToTranslate = document.querySelector(".sc6-mn-video-slider").clientWidth;
    const sliderInner      = document.querySelector(".sc6-mn-video-inr");

	allCards.forEach(card => {
		card.addEventListener("click", function () {
			var activeCard = document.querySelector(".sc6-mn-cds.active");
			if (activeCard !== card) {
				card.classList.toggle("active");
				activeCard.classList.toggle("active");

                let currentSlide = parseInt(card.classList[1].split("-")[3]);

                sliderInner.style = `transform: translateX(-${(currentSlide - 1)*widthToTranslate}px);`;
			}
		})
	})
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// 			section 3 slider    	  //
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //


const section6FunctionSlider = () => {
    const sliderInner      = document.querySelector(".sc6-mn-video-inr");
    const sliderSteps      = document.querySelectorAll(".sc6-mn-cds");
	const widthToTranslate = document.querySelector(".sc6-mn-video-slider").clientWidth;
    const maxStep          = parseInt(sliderSteps.length);
    let currentSlide       = 1;
    let startX = 0;
    let endX = 0;

    const changeSlide = (direction) => {
        if (direction === 'left') {
            if (currentSlide > 1 && currentSlide <= maxStep) {
                currentSlide -= 1;
            } else if (currentSlide === 1) {
                currentSlide = maxStep;
            }
        } else if (direction === 'right') {
            if (currentSlide >= 1 && currentSlide < maxStep) {
                currentSlide += 1;
            } else if (currentSlide === maxStep) {
                currentSlide = 1;
            }
        }

        const activeStep = document.querySelector('.sc6-mn-cds.active');
        const newStep = sliderSteps[currentSlide - 1];

        activeStep.classList.remove("active");
        newStep.classList.add('active');

        sliderInner.style 		= `transform: translateX(-${(currentSlide - 1)*widthToTranslate}px);`;
    };

    sliderInner.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });
    sliderInner.addEventListener("touchmove", (e) => {
        endX = e.touches[0].clientX;
    });

    sliderInner.addEventListener("touchend", () => {
        if (endX === 0) {
            endX = startX;
        }

        if (startX > endX + 50) { 
            changeSlide('right');
        } else if (startX < endX - 50) { 
            changeSlide('left');
        }
        
        endX = 0;
        startX = 0;
    });
};



const section6MobileFunctionSlider = () => {
    const sliderInner      = document.querySelector(".sc6-mob-slider-inr");
    const bottomTextInner  = document.querySelector(".sc6-mob-cds-bot-inr");
    const btnLeft          = document.querySelector(".sc6-mob-arrow-svg-left");
    const btnRight         = document.querySelector(".sc6-mob-arrow-svg-right");
    const sliderSteps      = document.querySelectorAll(".sc6-mob-step");
	const widthToTranslate = document.querySelector(".sc6-mob-slider").clientWidth;
	const widthOfBottomText= document.querySelector(".sc6-mob-cds-bot").clientWidth;
    const maxStep          = parseInt(sliderSteps.length);
    let currentSlide       = 1;
    let startX = 0;
    let endX = 0;

    const changeSlide = (direction) => {
        if (direction === 'left') {
            if (currentSlide > 1 && currentSlide <= maxStep) {
                currentSlide -= 1;
            } else if (currentSlide === 1) {
                currentSlide = maxStep;
            }
        } else if (direction === 'right') {
            if (currentSlide >= 1 && currentSlide < maxStep) {
                currentSlide += 1;
            } else if (currentSlide === maxStep) {
                currentSlide = 1;
            }
        }

        const activeStep = document.querySelector('.sc6-mob-step.active');
        const newStep = sliderSteps[currentSlide - 1];

        activeStep.classList.remove("active");
        newStep.classList.add('active');

        sliderInner.style 		= `transform: translateX(-${(currentSlide - 1)*widthToTranslate}px);`;
        bottomTextInner.style 	= `transform: translateX(-${(currentSlide - 1)*widthOfBottomText}px);`;
    };

    btnLeft.addEventListener("click", () => changeSlide('left'));
    btnRight.addEventListener("click", () => changeSlide('right'));

    sliderInner.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });
    sliderInner.addEventListener("touchmove", (e) => {
        endX = e.touches[0].clientX;
    });

    sliderInner.addEventListener("touchend", () => {
        if (endX === 0) {
            endX = startX;
        }

        if (startX > endX + 50) { 
            changeSlide('right');
        } else if (startX < endX - 50) { 
            changeSlide('left');
        }
        
        endX = 0;
        startX = 0;
    });

    sliderSteps.forEach(step => {
        step.addEventListener("click", function () {
            const activeStep = document.querySelector('.sc6-mob-step.active');
            if (activeStep !== step) {
                let currentSlide = parseInt(step.classList[1].split("-")[3]);

                activeStep.classList.remove("active");
                step.classList.add('active');
        
                sliderInner.style 		= `transform: translateX(-${(currentSlide - 1)*widthToTranslate}px);`;
                bottomTextInner.style 	= `transform: translateX(-${(currentSlide - 1)*widthOfBottomText}px);`;
            }
        })
    })
};