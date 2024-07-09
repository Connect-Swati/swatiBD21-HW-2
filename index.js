let express = require("express");
let app = express();
let port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//githubpublicdata obj on server

let githubPublicData = {
  username: "ankit123",
  fullName: "Ankit Kumar",
  email: "ankit@gmail.com",
  repositories: 24,
  gists: 12,
  joinedOn: "Sep 2018",
};

/*
Exercise 1: Profile URL

Define the function getProfileUrl to return the GitHub profile URL of the user.

Declare a GET endpoint /github-profile to use the getProfileUrl function.
*/

function getProfileUrl(username) {
  return {
    profileUrl: `https://github.com/${username}`,
  };
}

app.get("/github-profile", (req, res) => {
  res.json(getProfileUrl(githubPublicData.username));
});

/*
Exercise 2: Public Email

Define the function getPublicEmail to return the GitHub email of the user.

Declare a GET endpoint /github-public-email to use the getPublicEmail function.
*/

function getPublicEmail(email) {
  return {
    publicEmail: email,
  };
}
app.get("/github-public-email", (req, res) => {
  res.json(getPublicEmail(githubPublicData.email));
});

/*
Exercise 3: Get Repos Count

Define the function getReposCount to return the number of repositories the user has.

Declare a GET endpoint /github-repos-count to use the getReposCount function.
*/
function getReposCount(repos) {
  return {
    reposCount: repos,
  };
}
app.get("/github-repos-count", (req, res) => {
  res.json(getReposCount(githubPublicData.repositories));
});

/*
Exercise 4: Get Gists Count

Define the function getGistsCount to return the number of gists the user has.

Declare a GET endpoint /github-gists-count to use the getGistsCount function.
*/

function getGistsCount(gists) {
  return {
    gistCount: gists,
  };
}
app.get("/github-gists-count", (req, res) => {
  res.json(getGistsCount(githubPublicData.gists));
});

/*
Exercise 5: Get User Bio

Define the function getUserBio to return the user's bio.

Declare a GET endpoint /github-user-bio to use the getUserBio function.
*/
function getUserBio(fullName, joinedOn, email) {
  return {
    fullName: fullName,
    joinedOn: joinedOn,
    email: email,
  };
}
app.get("/github-user-bio", (req, res) => {
  res.json(
    getUserBio(
      githubPublicData.fullName,
      githubPublicData.joinedOn,
      githubPublicData.email,
    ),
  );
});

/*
Exercise 6: Repository URL

Define the function getRepoUrl to return the URL of a specific repository.

Declare a GET endpoint /github-repo-url to use the getRepoUrl function.
*/
function getRepoUrl(username, repoName) {
  return {
    repoUrl: `https://github.com/${username}/${repoName}`,
  };
}
app.get("/github-repo-url", (req, res) => {
  let repoName = req.query.repoName;
  res.json(getRepoUrl(githubPublicData.username, repoName));
});
