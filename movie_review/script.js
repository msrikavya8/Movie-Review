const form = document.getElementById("reviewForm");
const reviewsDiv = document.getElementById("reviews");

let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

displayReviews();

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const movie = document.getElementById("movie").value;
    const rating = document.getElementById("rating").value;
    const review = document.getElementById("review").value;

    const newReview = { movie, rating, review };

    reviews.push(newReview);
    localStorage.setItem("reviews", JSON.stringify(reviews));

    form.reset();
    displayReviews();
});

function displayReviews() {
    reviewsDiv.innerHTML = "";

    reviews.forEach((r, index) => {
        const div = document.createElement("div");
        div.className = "review";

        div.innerHTML = `
            <h3>${r.movie}</h3>
            <p>${r.rating}</p>
            <p>${r.review}</p>
            <button class="delete" onclick="deleteReview(${index})">Delete</button>
        `;

        reviewsDiv.appendChild(div);
    });
}

function deleteReview(index) {
    reviews.splice(index, 1);
    localStorage.setItem("reviews", JSON.stringify(reviews));
    displayReviews();
}