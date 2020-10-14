export function fetchRepos(setRepos) {
    return fetch(`https://api.github.com/orgs/emberjs/members`, {
        headers: {
            Accept: "application/json",
            Authorization: "d96376856677c286f33f7a1cbcb204f15ed711fc",
        },
    })
    .then((response) => response.json())
    .then((response) => {
        setRepos(response);
    });
}

export function fetchProfile(url, setModalContent) {
    return fetch(url, {
        headers: {
            Accept: "application/json",
            Authorization: "d96376856677c286f33f7a1cbcb204f15ed711fc",
        },
    })
    .then((response) => response.json())
    .then((response) => {
        return response;
    });
}

export function fetchRepoByUser(url, setRepoList) {
    return fetch(url, {
        headers: {
            Accept: "application/json",
            Authorization: "d96376856677c286f33f7a1cbcb204f15ed711fc",
        },
    })
    .then((response) => response.json())
    .then((response) => {
        setRepoList(response);
        return response;
    });
}
  