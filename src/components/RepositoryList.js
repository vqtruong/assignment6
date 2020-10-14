import React, { useState, useEffect } from 'react';
import Repository from "./Repository";
import { fetchRepos } from "./fetch";


function RepositoryList({ modalContent, setModalContent, setRepoLink, setAuthor }) {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetchRepos(setRepos);
    }, [])

    return (
        <div className="repository-list">
            { repos.map((repo) => {
                return <Repository 
                            key={repo.id} 
                            image={repo.avatar_url} 
                            login={repo.login} 
                            setModalContent={setModalContent} 
                            modalContent={modalContent}
                            url={repo.url}
                            repos_url={repo.repos_url}
                            setRepoLink={setRepoLink}
                            setAuthor={setAuthor}
                        />
            })}

        </div>
    );
}

export default RepositoryList;
