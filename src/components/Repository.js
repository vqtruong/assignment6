import React from 'react';
import { fetchProfile } from "./fetch";
import "./styles.css"

function Repository( { image, login, setModalContent, modalContent, url, setRepoLink, repos_url, setAuthor }) {


    function handleProfileClick() {
        fetchProfile(url, setModalContent).then((response) => {
            modalContent.title = response.login;
            modalContent.company = response.company;
            modalContent.blog = response.blog;
            modalContent.twitter_username = response.twitter_username;
            setModalContent({...modalContent, [modalContent.title]: response.login,
                                [modalContent.company]: response.company,
                                [modalContent.blog]: response.blog,
                                [modalContent.twitter_username]: response.twitter_username,
                            });
        });
    }

    function handleRepoClick() {
        setRepoLink(repos_url);
        setAuthor(login);
    }

    return (
        <div className="repository col-3">
            <div className="repo-container" data-toggle="modal" data-target="#profileModal" onClick={handleProfileClick}>
                <div>
                    <img src={image} alt=""></img>
                </div>
                <p className="font-weight-bold">{login}</p>
            </div>
            <p className="font-weight-lighter repo-link" data-toggle="modal" data-target="#repoModal" onClick={handleRepoClick}>display repo</p>
        </div>
    );
}

export default Repository;
