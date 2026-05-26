const input = document.getElementById("usernameInput");
const button = document.getElementById("searchBtn");
const result = document.getElementById("result");

button.addEventListener("click", async () => {
    const username = input.value.trim();

    // Empty input validation
    if (!username) {
        showError("Please enter a GitHub username.");
        return;
    }

    // GitHub username validation
    const githubUsernameRegex = /^[a-zA-Z0-9-]+$/;

    if (!githubUsernameRegex.test(username)) {
        showError("GitHub username contains invalid characters.");
        return;
    }

    // Loading state
    result.innerHTML = `
        <div class="loading-card">
            <p>Loading profile...</p>
        </div>
    `;

    try {
        const response = await fetch(`/api/github/${username}`);
        const data = await response.json();

        // Handle API errors
        if (!response.ok || data.error) {
            showError(data.error || "GitHub user not found.");
            return;
        }

        renderUser(data);

    } catch (err) {
        showError("Network error. Please try again.");
    }
});

function showError(message) {
    result.innerHTML = `
        <div class="error-card">
            <p>${message}</p>
        </div>
    `;
}

function renderUser(data) {
    result.innerHTML = `
        <div class="card">
            <img class="avatar" src="${data.avatar_url}" alt="avatar">

            <div class="info">
                <h2>${data.name || "No name available"}</h2>

                <p class="username">
                    @${data.login}
                </p>

                <div class="stats">
                    <div>
                        <strong>${data.followers}</strong>
                        <span>Followers</span>
                    </div>

                    <div>
                        <strong>${data.following}</strong>
                        <span>Following</span>
                    </div>

                    <div>
                        <strong>${data.public_repos}</strong>
                        <span>Repos</span>
                    </div>
                </div>

                <a href="${data.html_url}" target="_blank">
                    View Profile
                </a>
            </div>
        </div>
    `;
}