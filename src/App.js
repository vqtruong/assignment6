import React, { useState } from 'react';
import './App.css';
import RepositoryList from './components/RepositoryList';
import ProfileModal from "./components/ProfileModal";
import RepoModal from "./components/RepoModal";

class profileModal {
  constructor() {
    this.title = "default";
    this.company = null;
    this.blog = null;
    this.twitter_username = null;
  }
}

function App() {
  const [profileModalContent, setProfileModal] = useState(new profileModal());
  const [repoLink, setRepoLink] = useState("");
  const [author, setAuthor] = useState();

  return (
    <div className="App">
      <ProfileModal modalContent={profileModalContent} />
      <RepoModal repoLink={repoLink} author={author}/>
      <RepositoryList setModalContent={setProfileModal} 
                      modalContent={profileModalContent} 
                      setRepoLink={setRepoLink} 
                      setAuthor={setAuthor} />
      
    </div>
  );
}



export default App;
