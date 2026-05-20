var KEYWORD = 'JA';
var SHORTCODE = '877';
var os = '';

document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("msisdn");
    const submitMsisdnBtn = document.getElementById("submit-msisdn");
    const submitPopupBtn = document.getElementById("submit-popup");
    const directSmsSection = document.getElementById("direct-sms-section");
    const msisdnSection = document.getElementById("msisdn-section");
    const thankYouSection = document.getElementById("thank-you");
    const downloadInput = document.getElementById("download-msisdn");
    const circle = document.getElementById("progressCircle");
    const value = document.getElementById("progressValue");
    const submitMsisdnBtnDown=document.getElementById("submit-msisdn-page");
    const percentage=document.querySelector(".step-bar span");


    






    let progress = 1;
    
    const timer = setInterval(() => {
        if (progress > 100) {
            clearInterval(timer);
            return;
        }

        circle.style.background =
            `conic-gradient(#0a66b2 ${progress * 3.6}deg, #e5e7eb 0deg)`;

        value.textContent = progress + "%";
        progress++;
    }, 25);


    /* Allow only numbers with tick vaildation*/

    if (!input) return;

    input.addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9]/g, "");

        const field = this.closest(".field");

        if (!field) return;

        if (this.value.length >= 10) {
            field.classList.add("is-valid");
        } else {
            field.classList.remove("is-valid");
        }
    });




    

    /* MSISDN submit → open SMS app */
    if (submitMsisdnBtn) {
        submitMsisdnBtn.addEventListener("click", function () {
    
            /*
            var randomFixedInteger = generateRandomNumber(8);
            var smsBody = KEYWORD + " " + randomFixedInteger;
            var smsUrl = '';
    
            if (os === 'iOS') {
                smsUrl = "sms:" + SHORTCODE + "&body=" + smsBody;
            } else {
                smsUrl = "sms:" + SHORTCODE + "?body=" + smsBody;
            }
        */
            /* Switch page */
            if (msisdnSection) msisdnSection.style.display = "none";
            if (thankYouSection) thankYouSection.style.display = "block";
            if (directSmsSection) directSmsSection.style.display = "block";
    
           // window.location.href = smsUrl;
        });
    }
    
    


    if (submitMsisdnBtnDown) {
        submitMsisdnBtnDown.addEventListener("click", function () {
    
            

            let pageNumber = submitMsisdnBtnDown ? "2" : "1";
            let pagecountElement = document.getElementById("pagecount");
            pagecountElement.innerHTML=pageNumber


            
        

            /* Switch page */
            if (msisdnSection) msisdnSection.style.display = "none";
            if (thankYouSection) thankYouSection.style.display = "block";
            if (directSmsSection) directSmsSection.style.display = "block";
            if(percentage) percentage.style.width = "100%";
    
            
        });
    }



    if (submitPopupBtn) {
        submitPopupBtn.addEventListener("click", function () {

      
            // var randomFixedInteger = generateRandomNumber(8);
            var smsBody = KEYWORD ; //+ " " + randomFixedInteger;
            var smsUrl = '';
    
            if (os === 'iOS') {
                smsUrl = "sms:" + SHORTCODE + "&body=" + smsBody;
            } else {
                smsUrl = "sms:" + SHORTCODE + "?body=" + smsBody;
            }

            window.location.href = smsUrl;
           // window.location.href = "download copy.html"; 
            

        });
    }



    

    const field = downloadInput.closest(".field");

    downloadInput.addEventListener("input", function () {

        // allow only numbers
        this.value = this.value.replace(/\D/g, "");

        if (this.value.length >= 10) {
            field.classList.add("valid");
            field.classList.remove("invalid");
        } else {
            field.classList.remove("valid");
            field.classList.add("invalid");
        }
    });

   

});
let pageNumber =  "1";
    let pagecountElement = document.getElementById("pagecount");
    pagecountElement.innerHTML=pageNumber


/* Random number generator */
function generateRandomNumber(length) {
    return Math.floor(
        Math.pow(10, length - 1) +
        Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1))
    );
}
