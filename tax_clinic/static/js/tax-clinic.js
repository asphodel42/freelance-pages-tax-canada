// progress bar var
const progBarCur = document.querySelector(".sc1-progress-bar-cur");
const progBarCurText = document.querySelector(".sc1-progress-bar-cur p");
const progBarGoal = document.querySelector(".sc1-progress-bar-goal");
const progBarCont = document.querySelector(".sc1-progress-bar");
var curCash = 599999;
// form vars
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const confirmBtn = document.querySelector(".multi-step-btn");
const submitBtn = document.querySelector(".multi-step-btn-register");
const preBtn = document.querySelector(".btn-submit-reg-pre");
const maxStep = document.querySelectorAll(".form-step").length;
var data = [{ "province": null }, { "serviceOption": null }, { "city": null, "contact_data": { "address": null, "phone": null, "email": null } }];
// form steps
const allSteps = document.querySelectorAll(".form-step");
const step1 = document.getElementById("step-1");
const step2 = document.getElementById("step-2");
const step3 = document.getElementById("step-3");
const step4 = document.getElementById("step-4")
// form card steps
const stepCards = document.querySelectorAll(".step");
const stepCard1 = document.getElementById("step-card-1");
const stepCard2 = document.getElementById("step-card-2");
const stepCard3 = document.getElementById("step-card-3");
// 
const stepBtnsMob = document.querySelectorAll(".step-mobile");
const stepMob1 = document.getElementById("step-mob-1");
const stepMob2 = document.getElementById("step-mob-2");
const stepMob3 = document.getElementById("step-mob-3");
// form vars step 1
const provinceAllMap = document.querySelectorAll(".province");
const provinceSelector = document.getElementById("province-selector");
// form vars step 2
const serviceOptions = document.querySelectorAll(".service-option");
const serviceTypeText = document.querySelector(".service-type-text");
// form vars step 3
var cityOptions = document.querySelectorAll(".location-cd");
const citiesGrid = document.querySelector(".location-cds");
const cityTypeText = document.querySelector(".city-type-text");
// form vars step 4  
const selectedProvince = document.getElementById("selected-province");
const selectedService = document.getElementById("selected-service");
const selectedCity = document.getElementById("selected-location");

var currentStep = 1;

// sc5 progress bar
const progBarCur_sc5 = document.querySelector(".sc6-donation-bar");
const progBarCurText_sc5 = document.querySelector(".sc6-donation-bar p");
const progBarGoal_sc5 = document.querySelector(".sc6-goal-text");
const progBarCont_sc5 = document.querySelector(".sc6-donation-container");
var animationTriggered = false;


// provinces json
const provinces = [
    {
        "province": "alberta",
        "arr_city": [
            {
                "name_city": "city-1", 
                "format": "offline", 
                "contact_data": {
                    "address": "123 Queen St",
                    "phone": "+1 416 123 4567",
                    "email": "toronto@taxclinic.com"
                }
            },
            {
                "name_city": "city-1", 
                "format": "offline", 
                "contact_data": {
                    "address": "123 Queen St",
                    "phone": "+1 416 123 4567",
                    "email": "toronto@taxclinic.com"
                }
            },
            {
                "name_city": "city-1", 
                "format": "online", 
                "contact_data": {
                    "address": "123 Queen St",
                    "phone": "+1 416 123 4567",
                    "email": "toronto@taxclinic.com"
                }
            },
        ]
    },
    {
        "province": "british columbia",
        "arr_city": [
            {
                "name_city": "vancouver",
                "format": "offline",
                "contact_data": {
                    "address": "111 Granville St",
                    "phone": "+1 604 555 1212",
                    "email": "vancouver@taxclinic.com"
                }
            },
            {
                "name_city": "vancouver",
                "format": "online",
                "contact_data": {
                    "address": "155 Granville St",
                    "phone": "+1 604 555 1252",
                    "email": "vancouver@taxclinic.com"
                }
            },
            {
                "name_city": "victoria",
                "format": "offline",
                "contact_data": {
                    "address": "222 Government St",
                    "phone": "+1 250 987 6543",
                    "email": "victoria@taxclinic.com"
                }
            }
        ]
    },
    {
        "province": "manitoba",
        "arr_city": [
            {
                "name_city": "vancouver",
                "format": "offline",
                "contact_data": {
                    "address": "111 Granville St",
                    "phone": "+1 604 555 1212",
                    "email": "vancouver@taxclinic.com"
                }
            },
            {
                "name_city": "vancouver",
                "format": "online",
                "contact_data": {
                    "address": "155 Granville St",
                    "phone": "+1 604 555 1252",
                    "email": "vancouver@taxclinic.com"
                }
            },
            {
                "name_city": "victoria",
                "format": "offline",
                "contact_data": {
                    "address": "222 Government St",
                    "phone": "+1 250 987 6543",
                    "email": "victoria@taxclinic.com"
                }
            }
        ]
    },
    {
        "province": "new brunswick",
        "arr_city": [
            {
                "name_city": "vancouver",
                "format": "offline",
                "contact_data": {
                    "address": "111 Granville St",
                    "phone": "+1 604 555 1212",
                    "email": "vancouver@taxclinic.com"
                }
            },
            {
                "name_city": "vancouver",
                "format": "online",
                "contact_data": {
                    "address": "155 Granville St",
                    "phone": "+1 604 555 1252",
                    "email": "vancouver@taxclinic.com"
                }
            },
            {
                "name_city": "victoria",
                "format": "offline",
                "contact_data": {
                    "address": "222 Government St",
                    "phone": "+1 250 987 6543",
                    "email": "victoria@taxclinic.com"
                }
            }
        ]
    },
    {
        "province": "newfoundland and labrador",
        "arr_city": [
            {
                "name_city": "vancouver",
                "format": "offline",
                "contact_data": {
                    "address": "111 Granville St",
                    "phone": "+1 604 555 1212",
                    "email": "vancouver@taxclinic.com"
                }
            },
            {
                "name_city": "vancouver",
                "format": "online",
                "contact_data": {
                    "address": "155 Granville St",
                    "phone": "+1 604 555 1252",
                    "email": "vancouver@taxclinic.com"
                }
            },
            {
                "name_city": "victoria",
                "format": "offline",
                "contact_data": {
                    "address": "222 Government St",
                    "phone": "+1 250 987 6543",
                    "email": "victoria@taxclinic.com"
                }
            }
        ]
    },
    {
        "province": "nova scotia",
        "arr_city": [
            {
                "name_city": "vancouver",
                "format": "offline",
                "contact_data": {
                    "address": "111 Granville St",
                    "phone": "+1 604 555 1212",
                    "email": "vancouver@taxclinic.com"
                }
            },
            {
                "name_city": "vancouver",
                "format": "online",
                "contact_data": {
                    "address": "155 Granville St",
                    "phone": "+1 604 555 1252",
                    "email": "vancouver@taxclinic.com"
                }
            },
            {
                "name_city": "victoria",
                "format": "offline",
                "contact_data": {
                    "address": "222 Government St",
                    "phone": "+1 250 987 6543",
                    "email": "victoria@taxclinic.com"
                }
            }
        ]
    },
    {
        "province": "ontario",
        "arr_city": [
            {
                "name_city": "toronto",
                "format": "offline",
                "contact_data": {
                    "address": "123 Queen St",
                    "phone": "+1 416 123 4567",
                    "email": "toronto@taxclinic.com"
                }
            },
            {
                "name_city": "toronto",
                "format": "offline",
                "contact_data": {
                    "address": "125 Queen St",
                    "phone": "+1 416 123 4565",
                    "email": "toronto@taxclinic.com"
                }
            },
            {
                "name_city": "toronto",
                "format": "offline",
                "contact_data": {
                    "address": "124 Queen St",
                    "phone": "+1 416 123 4568",
                    "email": "toronto@taxclinic.com"
                }
            },
            {
                "name_city": "ottawa",
                "format": "online",
                "contact_data": {
                    "address": "456 Parliament Ave",
                    "phone": "+1 613 987 6543",
                    "email": "ottawa@taxclinic.com"
                }
            },
            {
                "name_city": "ottawa",
                "format": "offline",
                "contact_data": {
                    "address": "457 Parliament Ave",
                    "phone": "+1 613 987 6544",
                    "email": "ottawa@taxclinic.com"
                }
            },
            {
                "name_city": "hamilton",
                "format": "online",
                "contact_data": {
                    "address": "789 King Rd",
                    "phone": "+1 905 567 8901",
                    "email": "hamilton@taxclinic.com"
                }
            },
            {
                "name_city": "hamilton",
                "format": "offline",
                "contact_data": {
                    "address": "788 King Rd",
                    "phone": "+1 905 567 8902",
                    "email": "hamilton@taxclinic.com"
                }
            }
        ]
    },
    {
        "province": "prince edward island",
        "arr_city": [
            {
                "name_city": "city-1", 
                "format": "offline", 
                "contact_data": {
                    "address": "123 Queen St",
                    "phone": "+1 416 123 4567",
                    "email": "toronto@taxclinic.com"
                }
            },
            {
                "name_city": "city-2", 
                "format": "offline", 
                "contact_data": {
                    "address": "125 Queen St",
                    "phone": "+1 416 123 4565",
                    "email": "toronto@taxclinic.com"
                }
            },
            {
                "name_city": "city-3", 
                "format": "offline", 
                "contact_data": {
                    "address": "124 Queen St",
                    "phone": "+1 416 123 4568",
                    "email": "toronto@taxclinic.com"
                }
            },
            {
                "name_city": "city-4", 
                "format": "online", 
                "contact_data": {
                    "address": "125 Queen St",
                    "phone": "+1 416 123 4565",
                    "email": "toronto@taxclinic.com"
                }
            },
            {
                "name_city": "city-5", 
                "format": "online", 
                "contact_data": {
                    "address": "124 Queen St",
                    "phone": "+1 416 123 4568",
                    "email": "toronto@taxclinic.com"
                }
            },
        ]
    },
    {
        "province": "quebec",
        "arr_city": [
            {
                "name_city": "montreal", "format": "offline", "contact_data": {
                    "address": "234 Rue Saint",
                    "phone": "+1 514 234 5678",
                    "email": "montreal@taxclinic.com"
                }
            },
            {
                "name_city": "montreal", "format": "online", "contact_data": {
                    "address": "235 Rue Saint",
                    "phone": "+1 514 234 5679",
                    "email": "montreal@taxclinic.com"
                }
            },
            {
                "name_city": "quebec city", "format": "offline", "contact_data": {
                    "address": "567 Boulevard",
                    "phone": "+1 418 876 5432",
                    "email": "quebec@taxclinic.com"
                }
            },
            {
                "name_city": "quebec city", "format": "online", "contact_data": {
                    "address": "565 Boulevard",
                    "phone": "+1 418 876 5433",
                    "email": "quebec@taxclinic.com"
                }
            },
            {
                "name_city": "sherbrooke", "format": "offline", "contact_data": {
                    "address": "890 Rue King",
                    "phone": "+1 819 123 0987",
                    "email": "sherbrooke@taxclinic.com"
                }
            }
        ]
    },
    {
        "province": "saskatchewan",
        "arr_city": [
            {
                "name_city": "city-1", 
                "format": "offline", 
                "contact_data": {
                    "address": "123 Queen St",
                    "phone": "+1 416 123 4567",
                    "email": "toronto@taxclinic.com"
                }
            },
            {
                "name_city": "city-2", 
                "format": "offline", 
                "contact_data": {
                    "address": "125 Queen St",
                    "phone": "+1 416 123 4565",
                    "email": "toronto@taxclinic.com"
                }
            },
            {
                "name_city": "city-3", 
                "format": "offline", 
                "contact_data": {
                    "address": "124 Queen St",
                    "phone": "+1 416 123 4568",
                    "email": "toronto@taxclinic.com"
                }
            },
            {
                "name_city": "city-4", 
                "format": "online", 
                "contact_data": {
                    "address": "125 Queen St",
                    "phone": "+1 416 123 4565",
                    "email": "toronto@taxclinic.com"
                }
            },
            {
                "name_city": "city-5", 
                "format": "online", 
                "contact_data": {
                    "address": "124 Queen St",
                    "phone": "+1 416 123 4568",
                    "email": "toronto@taxclinic.com"
                }
            },
        ]
    },
    {
        "province": "northwest territories",
        "arr_city": [
            {
                "name_city": "city-1", 
                "format": "offline", 
                "contact_data": {
                    "address": "123 Queen St",
                    "phone": "+1 416 123 4567",
                    "email": "toronto@taxclinic.com"
                }
            },
            {
                "name_city": "city-2", 
                "format": "offline", 
                "contact_data": {
                    "address": "125 Queen St",
                    "phone": "+1 416 123 4565",
                    "email": "toronto@taxclinic.com"
                }
            },
            {
                "name_city": "city-3", 
                "format": "offline", 
                "contact_data": {
                    "address": "124 Queen St",
                    "phone": "+1 416 123 4568",
                    "email": "toronto@taxclinic.com"
                }
            },
            {
                "name_city": "city-4", 
                "format": "online", 
                "contact_data": {
                    "address": "125 Queen St",
                    "phone": "+1 416 123 4565",
                    "email": "toronto@taxclinic.com"
                }
            },
            {
                "name_city": "city-5", 
                "format": "online", 
                "contact_data": {
                    "address": "124 Queen St",
                    "phone": "+1 416 123 4568",
                    "email": "toronto@taxclinic.com"
                }
            },
        ]
    },
    {
        "province": "nunavut",
        "arr_city": [
            {
                "name_city": "city-1", 
                "format": "offline", 
                "contact_data": {
                    "address": "123 Queen St",
                    "phone": "+1 416 123 4567",
                    "email": "toronto@taxclinic.com"
                }
            },
            {
                "name_city": "city-2", 
                "format": "offline", 
                "contact_data": {
                    "address": "125 Queen St",
                    "phone": "+1 416 123 4565",
                    "email": "toronto@taxclinic.com"
                }
            },
            {
                "name_city": "city-3", 
                "format": "offline", 
                "contact_data": {
                    "address": "124 Queen St",
                    "phone": "+1 416 123 4568",
                    "email": "toronto@taxclinic.com"
                }
            },
            {
                "name_city": "city-4", 
                "format": "online", 
                "contact_data": {
                    "address": "125 Queen St",
                    "phone": "+1 416 123 4565",
                    "email": "toronto@taxclinic.com"
                }
            },
            {
                "name_city": "city-5", 
                "format": "online", 
                "contact_data": {
                    "address": "124 Queen St",
                    "phone": "+1 416 123 4568",
                    "email": "toronto@taxclinic.com"
                }
            },
        ]
    },
    {
        "province": "yukon",
        "arr_city": [
            {
                "name_city": "city-1", 
                "format": "offline", 
                "contact_data": {
                    "address": "123 Queen St",
                    "phone": "+1 416 123 4567",
                    "email": "toronto@taxclinic.com"
                }
            },
            {
                "name_city": "city-2", 
                "format": "offline", 
                "contact_data": {
                    "address": "125 Queen St",
                    "phone": "+1 416 123 4565",
                    "email": "toronto@taxclinic.com"
                }
            },
            {
                "name_city": "city-3", 
                "format": "offline", 
                "contact_data": {
                    "address": "124 Queen St",
                    "phone": "+1 416 123 4568",
                    "email": "toronto@taxclinic.com"
                }
            },
            {
                "name_city": "city-4", 
                "format": "online", 
                "contact_data": {
                    "address": "125 Queen St",
                    "phone": "+1 416 123 4565",
                    "email": "toronto@taxclinic.com"
                }
            },
            {
                "name_city": "city-5", 
                "format": "online", 
                "contact_data": {
                    "address": "124 Queen St",
                    "phone": "+1 416 123 4568",
                    "email": "toronto@taxclinic.com"
                }
            },
        ]
    },
]


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~    sc1 progress bar fill   ~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const updateProgBar = (curCash, container, progBarCur, progBarCurText, progBarGoal) => {
    /* Formating to add spaces betweeb thousands */
    var formatedCash = curCash.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    var curPercent = (curCash / 1000000) * 100;

    function changeProgBar(progBarGoal, progBarCurText, progBarCur) {
        progBarGoal.style.display = 'none';
        progBarCurText.textContent = `${formatedCash} $ / 1 000 000 $`;

        if (curPercent > 100) { curPercent = 100 };
        progBarCur.style.width = `${curPercent ? curPercent <= 100 : 100}%`;
    }

    if (container.clientWidth > 510 && curCash >= 600000) {
        progBarGoal.style.display = 'none';
        progBarCurText.textContent = `${formatedCash} $ / 1 000 000 $`;

        if (curPercent > 100) { curPercent = 100 };
        progBarCur.style.width = `${curPercent}%`;
    } else if (container.clientWidth <= 510 && container.clientWidth > 475 && curCash >= 550000) {
        changeProgBar(progBarGoal, progBarCurText, progBarCur);
    } else if (container.clientWidth <= 475 && container.clientWidth > 340 && curCash >= 500000) {
        changeProgBar(progBarGoal, progBarCurText, progBarCur);
    } else if (container.clientWidth <= 340 && container.clientWidth > 295 && curCash >= 450000) {
        changeProgBar(progBarGoal, progBarCurText, progBarCur);
    } else if (container.clientWidth <= 295 && container.clientWidth > 100 && curCash >= 400000) {
        changeProgBar(progBarGoal, progBarCurText, progBarCur);
    } else {
        progBarGoal.style.display = 'block';
        progBarCurText.textContent = `${formatedCash} $`
        progBarCur.style.width = `calc(${curPercent}%)`;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    updateHeadTitleText(currentStep);
    updateHeadDescText(currentStep);

    updateStepCard(currentStep - 1);
    updateProgBar(curCash, progBarCont, progBarCur, progBarCurText, progBarGoal)
    updateStep(currentStep);
    validationAllSteps(currentStep);
    updateBtnOnStep(currentStep);

    // sc5 animation trigger
    animationTriggered = false
})
window.addEventListener("resize", function () {
    updateProgBar(curCash, progBarCont, progBarCur, progBarCurText, progBarGoal)
    if(animationTriggered){updateProgBar(curCash, progBarCont_sc5, progBarCur_sc5, progBarCurText_sc5, progBarGoal_sc5);}
})
/*~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~   sc3 form   ~~~ */
/*~~~~~~~~~~~~~~~~~~~~~ */
const validationAllSteps = (step) => {
    if (step === 1) { return validationStep_1() }
    if (step === 2) { return validationStep_2_1() }
    if (step === 3) { return validationStep_2_2() }
    if (step === 4) { return showSummary() }
}

const validationStep_1 = () => {
    allSteps.forEach(step => step.classList.remove("active"));
    if (!step1.classList.contains("active")) { step1.classList.toggle("active") };
    if (data[0].province !== null) {
        provinceAllMap.forEach(province => {
            if (province.getAttribute("data-name") === data[0].province) {
                if (!province.classList.contains("selected")) { province.classList.toggle("selected") };
                provinceSelector.value = province.getAttribute("data-name");
            }
        });
    }
    updateProvinceMap(1);
    updateProvinceSelector(1);
    return true;
}
const validationStep_2_1 = () => {
    allSteps.forEach(step => step.classList.remove("active"));
    if (!step2.classList.contains("active")) { step2.classList.toggle("active") };
    if (data[1].serviceOption !== null) {
        serviceOptions.forEach(option => {
            if (option.getAttribute("data-option") === data[1].serviceOption) {
                if (!option.classList.contains("active")) { option.classList.toggle("active") };
            }
        });
    }
    updateServiceOption(2);
    return true;
}
const validationStep_2_2 = () => {
    renderCityCards(data[0].province.toLowerCase(), data[1].serviceOption.toLowerCase());

    allSteps.forEach(step => step.classList.remove("active"));
    if (!step3.classList.contains("active")) { step3.classList.toggle("active") };
    updateCityOption(3);
    return true;
}
const showSummary = () => {
    allSteps.forEach(step => step.classList.remove("active"));
    if (!step4.classList.contains("active")) { step4.classList.toggle("active") };
    displayData();
    return true;
}
/* ~~~~~~~~~~~~~~ */
/* Update header */
const updateHeadTitleText = (step) => {
    var currentActivetitle = document.querySelector(".step-head-title-col h1.active");
    if (currentActivetitle) { currentActivetitle.classList.toggle("active"); }

    var nextActiveText = document.querySelector(`.step-head-title-col h1[step-head-title='${step}']`)
    if (nextActiveText) { nextActiveText.classList.toggle("active"); }
}
const updateHeadDescText = (step) => {
    var allHeadDesc = document.querySelectorAll(".step-head-title-desc");

    var currentActiveDesc = document.querySelector(".step-head-title-desc.active");
    if (currentActiveDesc) { currentActiveDesc.classList.toggle("active"); }

    var nextActiveDesc = allHeadDesc[step - 1];
    if (nextActiveDesc) {
        if (!nextActiveDesc.classList.contains("active")) { nextActiveDesc.classList.toggle("active") }
    }
}
/* Reset data if selectin was changed */
const resetData = (step) => {
    for (let i = step; i < data.length; i++) {
        Object.keys(data[i]).forEach(key => {
            data[i][key] = null;
        });
    }
};
/* ~~~~~~~~~~~~~~~~~~~~~~ */
/* update btns on step`s */
const updateConfirmBtn = (confirm) => {
    confirmBtn.disabled = !confirm;
}
const updateBtnOnStep = (step) => {
    /* Update btns on step */
    resetActiveCard();
    if (step === 1) {
        /* Hide left btn on first step */
        if (!leftBtn.classList.contains("hidden")) { leftBtn.classList.toggle("hidden") }
        if (rightBtn.classList.contains("hidden")) { rightBtn.classList.toggle("hidden") }
        if (!submitBtn.classList.contains("hidden")) { submitBtn.classList.toggle("hidden") }
        if (confirmBtn.classList.contains("hidden")) { confirmBtn.classList.toggle("hidden") }
        stepCard1.classList.toggle("active");
        stepMob1.classList.toggle("active");
    } else if (step > 1 && step < maxStep) {
        if (leftBtn.classList.contains("hidden")) { leftBtn.classList.toggle("hidden") }
        if (rightBtn.classList.contains("hidden")) { rightBtn.classList.toggle("hidden") }
        if (!submitBtn.classList.contains("hidden")) { submitBtn.classList.toggle("hidden") }
        if (confirmBtn.classList.contains("hidden")) { confirmBtn.classList.toggle("hidden") }
        stepCard2.classList.toggle("active");
        stepMob2.classList.toggle("active");
    } else if (step === maxStep) {
        /* Hide right btn on last step */
        if (!rightBtn.classList.contains("hidden")) { rightBtn.classList.toggle("hidden") }
        if (leftBtn.classList.contains("hidden")) { leftBtn.classList.toggle("hidden") }
        if (submitBtn.classList.contains("hidden")) { submitBtn.classList.toggle("hidden") }
        if (!confirmBtn.classList.contains("hidden")) { confirmBtn.classList.toggle("hidden") }
        stepCard3.classList.toggle("active");
        stepMob3.classList.toggle("active");
    }
    /* Validation btns on step */
    if (step !== maxStep) {
        if (!Object.values(data[step - 1]).includes(null)) {
            if (rightBtn.classList.contains("disabled")) { rightBtn.classList.toggle("disabled") }
            updateConfirmBtn(true)
        }
        else {
            if (!rightBtn.classList.contains("disabled")) { rightBtn.classList.toggle("disabled") }
            updateConfirmBtn(false)
        }
    }
}
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* Update left cards when switch steps */
const resetActiveCard = () => {
    stepCards.forEach(card => card.classList.remove("active"));
    stepBtnsMob.forEach(btn => btn.classList.remove("active"));
}
const updateStep = (step) => {
    updateBtnOnStep(step);

    updateHeadTitleText(step);
    updateHeadDescText(step);
}
/* ~~~~~~~~~~~~~~~~~~~ */
/* sc3 form btns click */
stepCards.forEach(card => card.addEventListener("click", function () {
    if (!card.classList.contains("disabled")) {
        var activeStepCard = parseInt(card.getAttribute('data-step'));
        if (activeStepCard === 1 || activeStepCard === 2) { currentStep = activeStepCard; }
        else if (activeStepCard === 3 || activeStepCard === 4) { currentStep = 4; }

        updateStep(currentStep);
        validationAllSteps(currentStep);
    }
}))
stepBtnsMob.forEach(btn => btn.addEventListener("click", function () {
    if (!btn.classList.contains("disabled")) {
        var activeBtn = parseInt(btn.getAttribute('data-step'));
        if (activeBtn === 1 || activeBtn === 2) { currentStep = activeBtn; }
        else if (activeBtn === 3 || activeBtn === 4) { currentStep = 4; }

        updateStep(currentStep);
        validationAllSteps(currentStep);
    }
}))
leftBtn.addEventListener("click", function () {
    if (currentStep !== 1 && currentStep > 1) {
        currentStep -= 1;
        updateStep(currentStep);
        validationAllSteps(currentStep);
    }
})
rightBtn.addEventListener("click", function () {
    if (rightBtn.classList.contains("disabled")) { return }
    if (currentStep !== maxStep && currentStep < maxStep) {
        currentStep += 1;
        updateStep(currentStep);
        validationAllSteps(currentStep);
    }
})
confirmBtn.addEventListener("click", function () {
    if (confirmBtn.disabled) { return }
    currentStep += 1;
    updateStep(currentStep);
    validationAllSteps(currentStep);
})
const updateStepCard = (step) => {
    stepCards.forEach(card => {
        if (parseInt(card.getAttribute("data-step")) <= step + 1) {
            if (card.classList.contains("disabled")) { card.classList.toggle("disabled") }
        }
        else {
            if (!card.classList.contains("disabled")) { card.classList.toggle("disabled") }
        }
    })
    stepBtnsMob.forEach(btn => {
        if (parseInt(btn.getAttribute("data-step")) <= step + 1) {
            if (btn.classList.contains("disabled")) { btn.classList.toggle("disabled") }
        }
        else {
            if (!btn.classList.contains("disabled")) { btn.classList.toggle("disabled") }
        }
    })
}
const updateStepBtn = (step) => {
    stepBtnsMob.forEach(btn => {
        if (parseInt(btn.getAttribute("data-step")) <= step + 1) {
            if (btn.classList.contains("disabled")) { btn.classList.toggle("disabled") }
        }
        else {
            if (!btn.classList.contains("disabled")) { btn.classList.toggle("disabled") }
        }
    })
}
/* ~~~~~~~~~~~~~~~~~~~~~ */
/* step 1 validation map */
const updateProvinceMap = (step) => {
    provinceAllMap.forEach(province => {
        province.addEventListener("click", function () {
            const provinceName = province.getAttribute("data-name");  // Get name of the province
            provinceAllMap.forEach(province => province.classList.remove("selected"));  // Remove all selected
            if (!province.classList.contains("selected")) { province.classList.toggle("selected") };  // Highlight selected province
            provinceSelector.value = provinceName;  // Set province to selector
            resetData(step);
            data[step - 1].province = provinceName.toLowerCase();

            updateStepCard(step);
            updateBtnOnStep(step);
            removeServiceOption();
            updateConfirmBtn(true);
        })
    });
}
const updateProvinceSelector = (step) => {
    provinceSelector.addEventListener("change", function () {
        provinceAllMap.forEach(province => province.classList.remove("selected"));  // Remove all selected
        const provinceName = provinceSelector.value;
        provinceAllMap.forEach(province => {
            if (province.getAttribute("data-name") === provinceName) {
                if (!province.classList.contains("selected")) { province.classList.toggle("selected") };  // Highlight selected province
                resetData(step);
                data[step - 1].province = provinceName.toLowerCase();

                updateStepCard(step);
                updateBtnOnStep(step);
                removeServiceOption();
                updateConfirmBtn(true);
            }
        })
    })
}
/* ~~~~~~~~~~~~~~~~~~~~~~~~ */
/* step 2 validation service*/
const removeServiceOption = () => {
    serviceOptions.forEach(serviceOption => serviceOption.classList.remove("active"));
}
const updateServiceOption = (step) => {
    if (data[step - 1].serviceOption !== null) {
        serviceTypeText.textContent = data[step - 1].serviceOption;
    } else {
        serviceTypeText.textContent = "Online/Offline";
    }
    serviceOptions.forEach(serviceOption => {
        serviceOption.addEventListener("click", function () {
            serviceOptions.forEach(serviceOption => serviceOption.classList.remove("active"));
            if (!serviceOption.classList.contains("active")) { serviceOption.classList.toggle("active") };
            resetData(step);
            data[step - 1].serviceOption = serviceOption.getAttribute("data-option").toLowerCase();
            serviceTypeText.textContent = data[step - 1].serviceOption;

            updateStepCard(step - 1);
            updateBtnOnStep(step);
            removeCityOption();
            updateConfirmBtn(true);
        })
    })
}
/* ~~~~~~~~~~~~~~~~~~~~~~ */
/* step 3 validation city */
const removeCityOption = () => {
    cityOptions.forEach(cityOption => cityOption.classList.remove("active"));
}
const updateCityOption = (step) => {
    cityOptions = document.querySelectorAll(".location-cd");

    if (data[step - 1].city !== null && data[step - 1].contact_data !== null) {
        cityTypeText.textContent = data[step - 1].city;

        cityOptions.forEach(option => {
            if (option.children[0].getAttribute("city") === data[2].city &&
                option.children[1].getAttribute("address") === data[2].contact_data.address &&
                option.children[2].getAttribute("phone") === data[2].contact_data.phone &&
                option.children[3].getAttribute("email") === data[2].contact_data.email) {
                if (!option.classList.contains("active")) { option.classList.toggle("active"); };
            }
        });
    } else {
        cityTypeText.textContent = "City";
    }
    cityOptions.forEach(cityOption => {
        cityOption.addEventListener("click", function () {
            cityOptions.forEach(cityOption => cityOption.classList.remove("active"));
            cityOption.classList.toggle("active");

            data[step - 1].city = cityOption.children[0].getAttribute("city");
            data[step - 1].contact_data = {
                address: cityOption.children[1].getAttribute("address"),
                phone: cityOption.children[2].getAttribute("phone"),
                email: cityOption.children[3].getAttribute("email")
            }
            cityTypeText.textContent = data[step - 1].city;

            updateStepCard(step);
            updateBtnOnStep(step);
            updateConfirmBtn(true);
        })
    })
}
/* ~~~~~~~~~~~~~~ */
/* step 4 summary */
const displayData = () => {
    selectedProvince.children[0].textContent = data[0].province || "Not selected";
    selectedService.children[0].textContent = data[1].serviceOption || "Not selected";
    selectedCity.children[0].textContent = data[2].city || "Not selected";
};
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~ sc5 animation start ~~~~*/
window.addEventListener("scroll", function () {
    const containerPosition = progBarCont_sc5.getBoundingClientRect();

    if (!animationTriggered && containerPosition.top >= 0 && containerPosition.bottom <= window.innerHeight) {
        animationTriggered = true;
        updateProgBar(curCash, progBarCont_sc5, progBarCur_sc5, progBarCurText_sc5, progBarGoal_sc5);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sc6-sidebar');
    const sidebarItems = document.querySelectorAll('.sc6-sidebar-item');
    const donateButton = document.querySelector('.donate-button-Ukrain');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                sidebar.classList.add('visible');
                sidebarItems.forEach((item, index) => {
                    item.style.setProperty('--delay', `${index * 0.2}s`);
                });

                if (donateButton) {
                    const donateDelay = sidebarItems.length * 0.2;
                    donateButton.style.setProperty('--delay', `${donateDelay}s`);
                    donateButton.classList.add('visible');
                }
            }
        });
    }, {
        threshold: 0.3
    });

    observer.observe(sidebar);
});
/* ~~~~ sc5 animation end ~~~~*/
/* ~~~~~~~~~~~~~~~~~~~~~~~¬~~ */
function renderCards(province = "all") {
    const grid = document.getElementById("sc5-card-grid");
    grid.innerHTML = "";

    // Вибираємо міста залежно від провінції
    const cities = province === "all"
        ? provinces.flatMap(p => p.arr_city)
        : provinces.find(p => p.province === province)?.arr_city || [];

    // Рендеримо кожне місто
    cities.forEach(({ name_city, format, contact_data: { address, phone, email } }) => {
        const card = document.createElement("div");
        card.classList.add("contact-card");

        card.innerHTML = `
            <h3 class="contact-city">${name_city}</h3>
            <div class="location-card-description">
                <div class="contact-city-img">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.96 9.76544C20.8196 8.30435 20.3032 6.90452 19.4612 5.70226C18.6191 4.49999 17.4801 3.53627 16.155 2.90493C14.8299 2.2736 13.3639 1.99616 11.8997 2.09964C10.4356 2.20313 9.02314 2.684 7.8 3.49544C6.7492 4.19809 5.86706 5.12474 5.21695 6.20883C4.56684 7.29292 4.1649 8.50755 4.04 9.76544C3.91749 11.0151 4.07468 12.2764 4.50017 13.4577C4.92567 14.6391 5.6088 15.7109 6.5 16.5954L11.8 21.9054C11.893 21.9992 12.0036 22.0736 12.1254 22.1243C12.2473 22.1751 12.378 22.2012 12.51 22.2012C12.642 22.2012 12.7727 22.1751 12.8946 22.1243C13.0164 22.0736 13.127 21.9992 13.22 21.9054L18.5 16.5954C19.3912 15.7109 20.0743 14.6391 20.4998 13.4577C20.9253 12.2764 21.0825 11.0151 20.96 9.76544ZM17.1 15.1854L12.5 19.7854L7.9 15.1854C7.22209 14.5075 6.70281 13.6878 6.37947 12.7852C6.05614 11.8826 5.93679 10.9196 6.03 9.96544C6.12382 8.99654 6.43177 8.0606 6.93157 7.22528C7.43138 6.38997 8.11056 5.67615 8.92 5.13544C9.98095 4.43068 11.2263 4.05474 12.5 4.05474C13.7737 4.05474 15.0191 4.43068 16.08 5.13544C16.887 5.67406 17.5647 6.38472 18.0644 7.21638C18.564 8.04804 18.8733 8.98004 18.97 9.94544C19.0663 10.9029 18.9484 11.8697 18.625 12.776C18.3016 13.6823 17.7807 14.5053 17.1 15.1854ZM12.5 6.13544C11.61 6.13544 10.74 6.39936 9.99994 6.89383C9.25992 7.38829 8.68314 8.0911 8.34255 8.91337C8.00195 9.73563 7.91284 10.6404 8.08647 11.5133C8.2601 12.3863 8.68869 13.1881 9.31802 13.8174C9.94736 14.4468 10.7492 14.8753 11.6221 15.049C12.495 15.2226 13.3998 15.1335 14.2221 14.7929C15.0443 14.4523 15.7471 13.8755 16.2416 13.1355C16.7361 12.3955 17 11.5255 17 10.6354C16.9974 9.44278 16.5224 8.29972 15.6791 7.45638C14.8357 6.61304 13.6927 6.13808 12.5 6.13544ZM12.5 13.1354C12.0055 13.1354 11.5222 12.9888 11.1111 12.7141C10.7 12.4394 10.3795 12.049 10.1903 11.5921C10.0011 11.1353 9.95158 10.6327 10.048 10.1477C10.1445 9.66276 10.3826 9.21731 10.7322 8.86767C11.0819 8.51804 11.5273 8.27994 12.0123 8.18348C12.4972 8.08701 12.9999 8.13652 13.4567 8.32574C13.9135 8.51496 14.304 8.83539 14.5787 9.24652C14.8534 9.65764 15 10.141 15 10.6354C15 11.2985 14.7366 11.9344 14.2678 12.4032C13.7989 12.872 13.163 13.1354 12.5 13.1354Z" fill="#6F747E"/></svg>
                    <p class="contact-info">${address}</p>
                </div>
                <div class="contact-city-img">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0025 4.39266C9.69873 3.63334 8.96332 3.13544 8.14551 3.13544H5.39474C4.3483 3.13544 3.5 3.98353 3.5 5.02997C3.5 13.9247 10.7108 21.1354 19.6055 21.1354C20.6519 21.1354 21.5 20.2871 21.5 19.2406L21.5005 16.4894C21.5005 15.6716 21.0027 14.9363 20.2434 14.6326L17.6069 13.5784C16.9249 13.3055 16.1483 13.4283 15.5839 13.8986L14.9035 14.4661C14.1089 15.1283 12.9396 15.0757 12.2082 14.3442L10.2922 12.4265C9.56079 11.6951 9.50673 10.5268 10.1689 9.73212L10.7363 9.05173C11.2066 8.48739 11.3305 7.7106 11.0577 7.02853L10.0025 4.39266Z" stroke="#6F747E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    <p class="contact-info">${phone}</p>
                </div>
                <div class="contact-city-img">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 20.1354C3.95 20.1354 3.47933 19.9398 3.088 19.5484C2.69667 19.1571 2.50067 18.6861 2.5 18.1354V6.13544C2.5 5.58544 2.696 5.11477 3.088 4.72344C3.48 4.3321 3.95067 4.1361 4.5 4.13544H20.5C21.05 4.13544 21.521 4.33144 21.913 4.72344C22.305 5.11544 22.5007 5.5861 22.5 6.13544V18.1354C22.5 18.6854 22.3043 19.1564 21.913 19.5484C21.5217 19.9404 21.0507 20.1361 20.5 20.1354H4.5ZM12.5 13.1354L4.5 8.13544V18.1354H20.5V8.13544L12.5 13.1354ZM12.5 11.1354L20.5 6.13544H4.5L12.5 11.1354ZM4.5 8.13544V6.13544V18.1354V8.13544Z" fill="#6F747E"/></svg>
                    <p class="contact-info">${email}</p>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}
const renderCityCards = (province, format) => {
    citiesGrid.innerHTML = "";

    const provinceData = provinces.find(p => p.province === province);

    const filteredCities = provinceData
        ? provinceData.arr_city.filter(city => city.format === format)
        : [];

    filteredCities.forEach(({ name_city, contact_data: { address, phone, email } }) => {
        const card = document.createElement("div");
        card.classList.add("location-cd");

        card.innerHTML = `
            <div class="location-cd-hd" city="${name_city}">
                <h3>${name_city}</h3>
            </div>
            <div class="location-row" address="${address}">
                <div class="location-row-pre">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.96 9.76544C20.8196 8.30435 20.3032 6.90452 19.4612 5.70226C18.6191 4.49999 17.4801 3.53627 16.155 2.90493C14.8299 2.2736 13.3639 1.99616 11.8997 2.09964C10.4356 2.20313 9.02314 2.684 7.8 3.49544C6.7492 4.19809 5.86706 5.12474 5.21695 6.20883C4.56684 7.29292 4.1649 8.50755 4.04 9.76544C3.91749 11.0151 4.07468 12.2764 4.50017 13.4577C4.92567 14.6391 5.6088 15.7109 6.5 16.5954L11.8 21.9054C11.893 21.9992 12.0036 22.0736 12.1254 22.1243C12.2473 22.1751 12.378 22.2012 12.51 22.2012C12.642 22.2012 12.7727 22.1751 12.8946 22.1243C13.0164 22.0736 13.127 21.9992 13.22 21.9054L18.5 16.5954C19.3912 15.7109 20.0743 14.6391 20.4998 13.4577C20.9253 12.2764 21.0825 11.0151 20.96 9.76544ZM17.1 15.1854L12.5 19.7854L7.9 15.1854C7.22209 14.5075 6.70281 13.6878 6.37947 12.7852C6.05614 11.8826 5.93679 10.9196 6.03 9.96544C6.12382 8.99654 6.43177 8.0606 6.93157 7.22528C7.43138 6.38997 8.11056 5.67615 8.92 5.13544C9.98095 4.43068 11.2263 4.05474 12.5 4.05474C13.7737 4.05474 15.0191 4.43068 16.08 5.13544C16.887 5.67406 17.5647 6.38472 18.0644 7.21638C18.564 8.04804 18.8733 8.98004 18.97 9.94544C19.0663 10.9029 18.9484 11.8697 18.625 12.776C18.3016 13.6823 17.7807 14.5053 17.1 15.1854ZM12.5 6.13544C11.61 6.13544 10.74 6.39936 9.99994 6.89383C9.25992 7.38829 8.68314 8.0911 8.34255 8.91337C8.00195 9.73563 7.91284 10.6404 8.08647 11.5133C8.2601 12.3863 8.68869 13.1881 9.31802 13.8174C9.94736 14.4468 10.7492 14.8753 11.6221 15.049C12.495 15.2226 13.3998 15.1335 14.2221 14.7929C15.0443 14.4523 15.7471 13.8755 16.2416 13.1355C16.7361 12.3955 17 11.5255 17 10.6354C16.9974 9.44278 16.5224 8.29972 15.6791 7.45638C14.8357 6.61304 13.6927 6.13808 12.5 6.13544ZM12.5 13.1354C12.0055 13.1354 11.5222 12.9888 11.1111 12.7141C10.7 12.4394 10.3795 12.049 10.1903 11.5921C10.0011 11.1353 9.95158 10.6327 10.048 10.1477C10.1445 9.66276 10.3826 9.21731 10.7322 8.86767C11.0819 8.51804 11.5273 8.27994 12.0123 8.18348C12.4972 8.08701 12.9999 8.13652 13.4567 8.32574C13.9135 8.51496 14.304 8.83539 14.5787 9.24652C14.8534 9.65764 15 10.141 15 10.6354C15 11.2985 14.7366 11.9344 14.2678 12.4032C13.7989 12.872 13.163 13.1354 12.5 13.1354Z" fill="currentColor"/></svg>
                </div>
                <div class="location-row-text">
                    <p>${address}</p>
                </div>
            </div>
            <div class="location-row" phone="${phone}">
                <div class="location-row-pre">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0025 4.39266C9.69873 3.63334 8.96332 3.13544 8.14551 3.13544H5.39474C4.3483 3.13544 3.5 3.98353 3.5 5.02997C3.5 13.9247 10.7108 21.1354 19.6055 21.1354C20.6519 21.1354 21.5 20.2871 21.5 19.2406L21.5005 16.4894C21.5005 15.6716 21.0027 14.9363 20.2434 14.6326L17.6069 13.5784C16.9249 13.3055 16.1483 13.4283 15.5839 13.8986L14.9035 14.4661C14.1089 15.1283 12.9396 15.0757 12.2082 14.3442L10.2922 12.4265C9.56079 11.6951 9.50673 10.5268 10.1689 9.73212L10.7363 9.05173C11.2066 8.48739 11.3305 7.7106 11.0577 7.02853L10.0025 4.39266Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <div class="location-row-text" >
                    <p>${phone}</p>
                </div>
            </div>
            <div class="location-row" email="${email}">
                <div class="location-row-pre">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 20.1354C3.95 20.1354 3.47933 19.9398 3.088 19.5484C2.69667 19.1571 2.50067 18.6861 2.5 18.1354V6.13544C2.5 5.58544 2.696 5.11477 3.088 4.72344C3.48 4.3321 3.95067 4.1361 4.5 4.13544H20.5C21.05 4.13544 21.521 4.33144 21.913 4.72344C22.305 5.11544 22.5007 5.5861 22.5 6.13544V18.1354C22.5 18.6854 22.3043 19.1564 21.913 19.5484C21.5217 19.9404 21.0507 20.1361 20.5 20.1354H4.5ZM12.5 13.1354L4.5 8.13544V18.1354H20.5V8.13544L12.5 13.1354ZM12.5 11.1354L20.5 6.13544H4.5L12.5 11.1354ZM4.5 8.13544V6.13544V18.1354V8.13544Z" fill="currentColor"/></svg>
                </div>
                <div class="location-row-text" >
                    <p>${email}</p>
                </div>
            </div> 
        `;

        citiesGrid.appendChild(card);
    });
};

function filterByProvince() {
    const province = document.getElementById("province").value;
    renderCards(province);
}

renderCards();

// ~~~ sc4 step 2 more details btns ~~~ //
const moreDetailBtn1 = document.querySelector('.sc4-service-op-btn-1');
const moreDetailBtn2 = document.querySelector('.sc4-service-op-btn-2');

const textInner1     = document.querySelector('.service-op-text-inr-1');
const textInner2     = document.querySelector('.service-op-text-inr-2');

moreDetailBtn1.addEventListener('click', () => {
    moreDetailBtn1.classList.toggle('active');
    textInner1.classList.toggle('active');
});

moreDetailBtn2.addEventListener('click', () => {
    moreDetailBtn2.classList.toggle('active');
    textInner2.classList.toggle('active');
});