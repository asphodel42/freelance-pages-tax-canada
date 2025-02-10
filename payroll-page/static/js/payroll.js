// ~~~ sc4 form ~~~ //

const sc4StepNum1   = document.querySelector('.sc4-step-num-ct-1');
const sc4StepNum2   = document.querySelector('.sc4-step-num-ct-2');
const sc4StepNum3   = document.querySelector('.sc4-step-num-ct-3');
const sc4StepNum4   = document.querySelector('.sc4-step-num-ct-4');
const sc4StepNumAll = document.querySelectorAll('.sc4-step-num-ct');

// ~~~ step mobile ~~~ //

const sc4StepNumMob1   = document.getElementById('step-mob-1');
const sc4StepNumMob2   = document.getElementById('step-mob-2');
const sc4StepNumMob3   = document.getElementById('step-mob-3');
const sc4StepNumMob4   = document.getElementById('step-mob-4');
const sc4StepNumMobAll = document.querySelectorAll('.step-mobile');

// ~~~ buttons ~~~ //

const sc4StepBtns1 = document.querySelectorAll('.sc4-btn-step-1');
const sc4StepBtns2 = document.querySelectorAll('.sc4-btn-step-2');
const sc4StepBtns3 = document.querySelectorAll('.sc4-btn-step-3');
const sc4StepBtns4 = document.querySelectorAll('.sc4-btn-step-4');

// ~~~ headings ~~~ //
const sc4TitleText = document.querySelectorAll('.sc4-form-title-text');

// ~~~ sc4 content ~~~ //

const sc4Content = document.querySelectorAll('.sc4-form-ct-btns'); 

// ~~~ result ~~~ //

const sc4Result = document.querySelector('.sc4-result-grid');

// ~~~ left right btns ~~~ //
const sc4BtnLeft = document.querySelector('.sc4-btn-left');
const sc4BtnRight = document.querySelector('.sc4-btn-right');

let currentStep = 1;
let availableStep = 1;
const maxStep = 5

document.addEventListener('DOMContentLoaded', () => {
    validationAllSteps(currentStep);
    updateBtns(currentStep);
    updateStepBtns(availableStep)
})


const validationAllSteps = (step) =>{
    if (step === 1) { return validationStep1() }
    if (step === 2) { return validationStep2() }
    if (step === 3) { return validationStep3() }
    if (step === 4) { return validationStep4() }
    if (step === 5) { return showSummary() }
}

const validationStep1 = () => {
    loadStep(currentStep)
    if(sc4Result.classList.contains("active")){sc4Result.classList.toggle("active")}
    sc4StepNumAll.forEach(step => step.classList.remove('active'));
    sc4StepNumMobAll.forEach(step => step.classList.remove('active'));

    sc4StepNumMob1.classList.toggle('active');
    sc4StepNum1.classList.toggle('active');

    sc4StepBtns1.forEach(btn =>{
        btn.addEventListener('click', () => {
            sc4StepBtns1.forEach(btnDisable => btnDisable.classList.remove('active'));
            btn.classList.add('active');
            availableStep = 2;

            updateBtns(currentStep)
            updateStepBtns(availableStep)
        })
    })
    return true;
}

const validationStep2 = () => {
    loadStep(currentStep)
    if(sc4Result.classList.contains("active")){sc4Result.classList.toggle("active")}
    sc4StepNumAll.forEach(step => step.classList.remove('active'));
    sc4StepNumMobAll.forEach(step => step.classList.remove('active'));

    sc4StepNumMob2.classList.toggle('active');
    sc4StepNum2.classList.toggle('active');
    
    sc4StepBtns2.forEach(btn =>{
        btn.addEventListener('click', () => {
            sc4StepBtns2.forEach(btnDisable => btnDisable.classList.remove('active'));
            btn.classList.add('active');
            availableStep = 3;

            updateBtns(currentStep)
            updateStepBtns(availableStep)
        })
    })
    return true;
}

const validationStep3 = () => {
    loadStep(currentStep)
    if(sc4Result.classList.contains("active")){sc4Result.classList.toggle("active")}
    sc4StepNumAll.forEach(step => step.classList.remove('active'));
    sc4StepNumMobAll.forEach(step => step.classList.remove('active'));

    sc4StepNumMob3.classList.toggle('active');
    sc4StepNum3.classList.toggle('active');
    
    sc4StepBtns3.forEach(btn =>{
        btn.addEventListener('click', () => {
            sc4StepBtns3.forEach(btnDisable => btnDisable.classList.remove('active'));
            btn.classList.add('active');
            availableStep = 4;

            updateBtns(currentStep)
            updateStepBtns(availableStep)
        })
    })
    return true;
}

const validationStep4 = () => {
    loadStep(currentStep)
    if(sc4Result.classList.contains("active")){sc4Result.classList.toggle("active")}
    sc4StepNumAll.forEach(step => step.classList.remove('active'));
    sc4StepNumMobAll.forEach(step => step.classList.remove('active'));

    sc4StepNumMob4.classList.toggle('active');
    sc4StepNum4.classList.toggle('active');
    
    sc4StepBtns4.forEach(btn =>{
        btn.addEventListener('click', () => {
            sc4StepBtns4.forEach(btnDisable => btnDisable.classList.remove('active'));
            btn.classList.add('active');
            availableStep = 5;

            updateBtns(currentStep)
            updateStepBtns(availableStep)
        })
    })
    return true;
}

const showSummary = () =>{
    loadStep(currentStep)
    sc4StepNumAll.forEach(step => step.classList.remove('active'));
    sc4StepNumMobAll.forEach(step => step.classList.remove('active'));

    sc4Result.classList.add("active")
}

const updateBtns = (step) => {
    if (step == 1) { sc4BtnLeft.classList.add('hidden'); }
    if (step > 1 && step < maxStep){
        sc4BtnLeft.classList.remove('hidden');
        sc4BtnRight.classList.remove('hidden');
    }
    if (step === maxStep) { sc4BtnRight.classList.add('hidden'); }

    if (step < availableStep){
        if(sc4BtnRight.classList.contains('disabled')){sc4BtnRight.classList.toggle('disabled');}
    }
    else{
        if(!sc4BtnRight.classList.contains('disabled')){sc4BtnRight.classList.toggle('disabled');}
    }
}

sc4BtnLeft.addEventListener('click', ()=>{
    if (currentStep > 1 ){

        currentStep -= 1;
        updateBtns(currentStep)
        validationAllSteps(currentStep)
    }
})
sc4BtnRight.addEventListener('click', ()=>{
    if (currentStep < maxStep){
        if (availableStep > currentStep){
            
            currentStep += 1;
            updateBtns(currentStep)
            validationAllSteps(currentStep)
        } 
    }
})

const updateStepBtns = (availableStep) =>{
   sc4StepNumAll.forEach(stepBtn =>{
        stepBtn.addEventListener('click', ()=>{
            const clickeStep = parseInt(stepBtn.getAttribute('data-step'))
            if (clickeStep <= availableStep){ 
                currentStep = clickeStep
                updateBtns(currentStep)
                validationAllSteps(currentStep)
            }
        })
   })
   sc4StepNumMobAll.forEach(stepBtnMob =>{
    stepBtnMob.addEventListener('click', ()=>{
        const clickeStep = parseInt(stepBtnMob.getAttribute('data-step'))
        if (clickeStep <= availableStep){ 
            currentStep = clickeStep
            updateBtns(currentStep)
            validationAllSteps(currentStep)
        }
    })
})
}

const loadStep = (step) =>{
    sc4Content.forEach(cont => {
        cont.classList.remove('active')
        if (parseInt(cont.getAttribute('sc4_step')) === step){
            cont.classList.add("active")
        }
    });
    sc4TitleText.forEach(heading => {
        heading.classList.remove("active");
        if (parseInt(heading.getAttribute("sc4_step")) === step){heading.classList.toggle("active")}
    })
}