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
