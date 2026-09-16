// ========================================
// BILLING SYSTEM
// ========================================

const billingButtons =
    document.querySelectorAll(".billing-btn");

const prices =
    document.querySelectorAll(".amount");


billingButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class
        billingButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active class
        button.classList.add("active");


        // Get selected billing type
        const billingType =
            button.dataset.billing;


        // Update prices
        prices.forEach(price => {

            const monthly =
                price.dataset.monthly;

            const yearly =
                price.dataset.yearly;


            if (billingType === "yearly") {

                price.textContent = yearly;

            } else {

                price.textContent = monthly;

            }

        });

    });

});



// ========================================
// PLAN BUTTONS
// ========================================

const planButtons =
    document.querySelectorAll(".plan-button");


planButtons.forEach(button => {

    button.addEventListener("click", () => {

        const originalText =
            button.textContent;


        button.textContent =
            "PROCESSING...";


        button.style.opacity = "0.7";


        setTimeout(() => {

            button.textContent =
                originalText;

            button.style.opacity =
                "1";

        }, 1000);

    });

});