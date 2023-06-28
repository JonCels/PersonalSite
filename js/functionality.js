function testFunction() {
    var moreArrow1 = document.getElementById("more-arrow-1");
    var lessArrow1 = document.getElementById("less-arrow-1");
    var jobDesc1 = document.getElementById("job-desc-1");

    if (moreArrow1.style.display === "none") { //Hide
        moreArrow1.style.display = "block";
        lessArrow1.style.display = "none";
        jobDesc1.style.display = "none";
    } else { //Show
        moreArrow1.style.display = "none";
        lessArrow1.style.display = "block";
        jobDesc1.style.display = "block";
    }
}