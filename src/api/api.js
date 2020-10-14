export function follow(name) {
    let data = {
        id: name
    }
    return fetch(`http://localhost:4000/following`, {
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
    return fetch(`http://localhost:4000/following/${id}`, {
        method: "delete",
    })
}



export function getAllFollowed() {
    return fetch("/following", {
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


