const ratingBtn = document.querySelectorAll(".rating-btn")
const submitBtn = document.querySelector("#submit-btn")
const rating = document.querySelector(".rating")
const thanks = document.querySelector(".thanks")
const userRating = document.querySelector("#user-rating")

let selectedRating = 0

submitBtn.addEventListener("click", function () {
    if (selectedRating === 0) {
        alert("please select the rating first")
    } else {
        rating.style.display = "none"
        thanks.style.display = "flex"
        userRating.innerText = selectedRating
    }
})

ratingBtn.forEach(function (button) {
    button.addEventListener("click", function () {
        ratingBtn.forEach(function (btn) {
            btn.classList.remove("active")
        })
        this.classList.add('active')
        selectedRating = this.value
    })
})