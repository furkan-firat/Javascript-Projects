const accordionItems = document.querySelectorAll(".accordion-item")

accordionItems.forEach( function (accordionItem)  {
    const header = accordionItem.querySelector(".accordion-header");
    const content = accordionItem.querySelector(".accordion-content");

    header.addEventListener("click", function() {

        accordionItems.forEach(function (item){
            if (item !== accordionItem) {
                item.querySelector(".accordion-content").classList.remove("display-block")
                console.log("kaldırıldı")
                
            }
        });
        
            content.classList.toggle("display-block")
    });

    
});


// const accordionItems = document.querySelectorAll(".accordion-item");

//     accordionItems.forEach(function (item) {
//         const header = item.querySelector(".accordion-header");
//         const content = item.querySelector(".accordion-content");

//         header.addEventListener("click", function () {
//             if (content.style.display === "block") {
//                 content.style.display = "none";
//             } else {
//                 content.style.display = "block";
//             }
//         });
//     });