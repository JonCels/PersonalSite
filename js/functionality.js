function toggleArrow(idNum) {
    var moreArrow = document.getElementById("more-arrow-".concat(idNum));
    var lessArrow = document.getElementById("less-arrow-".concat(idNum));
    var jobDesc = document.getElementById("job-expand-wrapper-".concat(idNum));
    var moreArrowWrapper = document.getElementById("expand-arrow-hide-".concat(idNum));
    var lessArrowWrapper = document.getElementById("expand-arrow-show-".concat(idNum));

    if (moreArrow.style.display === "none") { //Hide
        moreArrow.style.display = "block";
        lessArrow.style.display = "none";
        jobDesc.style.display = "none";
        moreArrowWrapper.style.display = "inline-block";
        lessArrowWrapper.style.display = "none";
    } else { //Show
        moreArrow.style.display = "none";
        lessArrow.style.display = "block";
        jobDesc.style.display = "block";
        moreArrowWrapper.style.display = "none";
        lessArrowWrapper.style.display = "inline-block";
    }
}