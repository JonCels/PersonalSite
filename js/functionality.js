function toggleArrow(idNum) {
    console.log("Touch")
    var moreArrow = document.getElementById("more-arrow-".concat(idNum));
    var lessArrow = document.getElementById("less-arrow-".concat(idNum));
    var jobDesc = document.getElementById("job-expand-wrapper-".concat(idNum));
    var moreArrowWrapper = document.getElementById("expand-arrow-hide-".concat(idNum));
    var lessArrowWrapper = document.getElementById("expand-arrow-show-".concat(idNum));

    if (moreArrow.style.display === "none") { //Hide
        moreArrow.style.display = "inline-block";
        lessArrow.style.display = "none";
        jobDesc.style.display = "none";
        moreArrowWrapper.style.display = "inline-block";
        lessArrowWrapper.style.display = "none";
    } else { //Show
        moreArrow.style.display = "none";
        lessArrow.style.display = "inline-block";
        jobDesc.style.display = "inline-block";
        moreArrowWrapper.style.display = "none";
        lessArrowWrapper.style.display = "inline-block";
    }
}