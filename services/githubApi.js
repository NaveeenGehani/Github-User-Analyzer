// export default async function getGithubUser(username) {
//     if(!username) {
//         throw new Error("Username is required");
//     }

//     const url = `https://api.github.com/users/${username}`;

//     const response = await fetch(url);

//     if(!response.ok) {
//         throw new Error("User not found or API error");
//     }

//     const data = await response.json();
//     return data;
// }

export default async function getGitHubUser(username) {

    if (!username) {
        throw {
            status: 400,
            message: "Username is required"
        };
    }

    const url = `https://api.github.com/users/${username}`;

    const response = await fetch(url);

    // User not found
    if (response.status === 404) {
        throw {
            status: 404,
            message: "GitHub user not found"
        };
    }

    // Rate limit exceeded
    if (response.status === 403) {
        throw {
            status: 403,
            message: "GitHub API rate limit exceeded. Try again later."
        };
    }

    // Other API issues
    if (!response.ok) {
        throw {
            status: response.status,
            message: "GitHub API error"
        };
    }

    return await response.json();
}