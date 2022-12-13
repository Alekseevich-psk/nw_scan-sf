(function () {
    const pictures = document.querySelectorAll(".search__fly-picture img");
    if (!pictures.length) return;

    document.addEventListener("mousemove", function (e) {
        move(e.clientX, e.clientY);
    });

    function move(x, y) {

        let wh = window.innerHeight / 2,
            ww = window.innerWidth / 2;

        pictures.forEach(element => {
            element.style.top = ((x - ww) / 50) + "px";
            element.style.left = ((y - wh) / 50) + "px";
        });
    }
})();
