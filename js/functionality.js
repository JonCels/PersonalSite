function toggleArrow(idNum) {
    var moreArrow = document.getElementById("more-arrow-".concat(idNum));
    var lessArrow = document.getElementById("less-arrow-".concat(idNum));
    var jobDesc = document.getElementById("job-expand-wrapper-".concat(idNum));
    var moreArrowWrapper = document.getElementById("expand-arrow-hide-".concat(idNum));
    var lessArrowWrapper = document.getElementById("expand-arrow-show-".concat(idNum));
    var jobWrapper = document.getElementById("job-".concat(idNum));
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
    jobWrapper.scrollIntoView({behavior: 'smooth'});
}

function toggleCourseArrow(idNum) {
    var moreArrow = document.getElementById("more-arrow-course-".concat(idNum));
    var lessArrow = document.getElementById("less-arrow-course-".concat(idNum));
    var courseDesc = document.getElementById("course-expand-wrapper-".concat(idNum));
    var moreArrowWrapper = document.getElementById("expand-arrow-hide-course-".concat(idNum));
    var lessArrowWrapper = document.getElementById("expand-arrow-show-course-".concat(idNum));
    var courseWrapper = document.getElementById("course-".concat(idNum));
    if (moreArrow.style.display === "none") { //Hide
        moreArrow.style.display = "inline-block";
        lessArrow.style.display = "none";
        courseDesc.style.display = "none";
        moreArrowWrapper.style.display = "inline-block";
        lessArrowWrapper.style.display = "none";
    } else { //Show
        moreArrow.style.display = "none";
        lessArrow.style.display = "inline-block";
        courseDesc.style.display = "inline-block";
        moreArrowWrapper.style.display = "none";
        lessArrowWrapper.style.display = "inline-block";
    }
    courseWrapper.scrollIntoView({behavior: 'smooth'});
}

function toggleProjectArrow(idNum) {
    var moreArrow = document.getElementById("more-arrow-project-".concat(idNum));
    var lessArrow = document.getElementById("less-arrow-project-".concat(idNum));
    var projectDesc = document.getElementById("project-expand-wrapper-".concat(idNum));
    var moreArrowWrapper = document.getElementById("expand-arrow-hide-project-".concat(idNum));
    var lessArrowWrapper = document.getElementById("expand-arrow-show-project-".concat(idNum));
    var projectWrapper = document.getElementById("project-".concat(idNum));
    if (moreArrow.style.display === "none") { //Hide
        moreArrow.style.display = "inline-block";
        lessArrow.style.display = "none";
        projectDesc.style.display = "none";
        moreArrowWrapper.style.display = "inline-block";
        lessArrowWrapper.style.display = "none";
    } else { //Show
        moreArrow.style.display = "none";
        lessArrow.style.display = "inline-block";
        projectDesc.style.display = "inline-block";
        moreArrowWrapper.style.display = "none";
        lessArrowWrapper.style.display = "inline-block";
    }
    projectWrapper.scrollIntoView({behavior: 'smooth'});
}