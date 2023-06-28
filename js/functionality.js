function toggleArrow(idNum) {
    var moreArrow = document.getElementById("more-arrow-".concat(idNum));
    var lessArrow = document.getElementById("less-arrow-".concat(idNum));
    var jobDesc = document.getElementById("job-desc-".concat(idNum));

    if (moreArrow.style.display === "none") { //Hide
        moreArrow.style.display = "block";
        lessArrow.style.display = "none";
        jobDesc.style.display = "none";
    } else { //Show
        moreArrow.style.display = "none";
        lessArrow.style.display = "block";
        jobDesc.style.display = "block";
    }
}