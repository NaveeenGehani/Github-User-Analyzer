export default async function getGithubUser(username) {
    if(!username) {
        throw new Error("Username is required");
    }

    const url = `https://api.github.com/users/${username}`;

    const response = await fetch(url);

    if(!response.ok) {
        throw new Error("User not found or API error");
    }

    const data = await response.json();
    return data;
}

// module.exports = getGithubUser;
