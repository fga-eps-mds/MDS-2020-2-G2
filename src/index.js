
document.addEventListener("click", function (e) {
    var currentUrl = String(window.location.pathname);
    var urlParts = currentUrl.split("/");

    if (urlParts[3] == "milestones" && urlParts[0] == "") {

        var closeMilestoneButton = document.querySelector(".d-inline-block.mr-2 .btn-link");

        if (e.path[0] == closeMilestoneButton &&
            closeMilestoneButton.textContent.toLowerCase() == "close") {

            var milestoneName = document.querySelector(".milestone-title-link").innerText;
            window.alert("Closed: " + milestoneName)

        }
    }
});
