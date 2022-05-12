{/* <script id="menuNav"> */}
    /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
    function myFunctionMenuNav() {
        var x = document.querySelector(".dropdown-content");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
    function menuClose() {
        var x = document.querySelector(".dropdown-content");
        x.style.display = "none";
    }
// </script> <!-- menuNav -->

{/* <script id="acercaDe"> */}
    function acercaDe() {
        element = document.querySelector('.callout');
        console.log(element)
        element.style.display='block'
        menuClose();
    };
{/* </script>  <!-- acercaDe --> */}


{/* <script id="compactExtended"> */}

function compactExtended(version) {
    if (version=="extended") {

        // Definida en widget.js
        initNone("extended"); /* version extendida, muestro detalles de la lista */
        
        [].forEach.call(document.querySelectorAll(".extended"), function(e) {
            e.classList.add("compact")
            e.classList.remove("extended");
        });
        [].forEach.call(document.querySelectorAll("em sub"), function (e) {
            e.innerText = " (ver menos)"
        });
        
    } else if (version=="compact")  {

        // Definida en widget.js
        initNone("compact"); /* version resumen, oculto detalles de la lista */

        [].forEach.call(document.querySelectorAll(".compact"), function(e) {
                e.classList.add("extended")
                e.classList.remove("compact")
                console.log("configuracion resumen", e)
        });
        [].forEach.call(document.querySelectorAll("em sub"), function (e) {
            e.innerText = " (ver mas)"
        });
    };
menuClose();
}
// </script>  <!-- compactExtended -->