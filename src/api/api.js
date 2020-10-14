export function follow(name) {
    let data = {
        id: name
    }
    return fetch(`/api/following`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
    .then((response) => response.json())
    .then((response) => {
        return response;
    }); 
}

export function unfollow(id) {
    return fetch(`/api/following/${id}`, {
        method: "delete",
    })
}

export function getAllFollowed() {
    return fetch("/api/following", {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
    .then((response) => response.json())
    .then((response) => {
        return response;
    });
}


