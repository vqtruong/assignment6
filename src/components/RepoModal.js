import React, { useState, useEffect } from 'react';
import { fetchRepoByUser } from "./fetch";
import { follow, unfollow, getAllFollowed } from '../api/api';
import "./styles.css"

function RepoModal( { repoLink, author }) {
    const [repoList, setRepoList] = useState([]);
    const [isFollowed, setIsFollowed] = useState(false);

    useEffect(() => {
        setRepoList([]);
        fetchRepoByUser(repoLink, setRepoList);
        
        getAllFollowed().then((rsp) => {
            for (let i = 0; i < rsp.length; i++) {
                if (rsp[i].id === author) {
                    setIsFollowed(true);
                    return;
                }
            }
            setIsFollowed(false);
        })        
    }, [repoLink, author])


    function handleFollow() {
        setIsFollowed(true);
        follow(author);
    }

    function handleUnfollow() {
        setIsFollowed(false);
        unfollow(author);
    }

    return (
        <div className="repository col-3">
            <div className="modal fade" id="repoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                            <h5 className="modal-title text-primary" id="exampleModalLabel">{ author }</h5>
                            { !isFollowed 
                                ?
                                    <button type="button" className="btn btn-secondary follow-btn" onClick={handleFollow}> Follow </button>
                                :
                                    <button type="button" className="btn btn-light follow-btn" onClick={handleUnfollow}> Unfollow </button>
                            }
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                    
                    <div className="modal-body">
                        { (repoList.length !== 0 && repoList !== undefined) && repoList.map((repo) => {
                            return (
                                <div className="user-repo">
                                    <div>
                                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                            <h5>{repo.name}:</h5>
                                        </a>
                                    </div>

                                    <p>{repo.description}</p>
                                </div>
                                )

                        })}
                        
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RepoModal;
