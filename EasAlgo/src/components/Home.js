import React, { useState, useEffect } from "react";
import GitHubService from "../services/GitHubService";
import { motion } from "framer-motion";
import "./Home.css";

export default function Home() {
  const [githubUsername, setGithubUsername] = useState("");
  const [githubToken, setGithubToken] = useState("");
  const [repoExists, setRepoExists] = useState(false);
  const [subfolders, setSubfolders] = useState([]);
  const [cards, setCards] = useState([
    "Basics",
    "Arrays",
    "Strings",
    "Trees",
    "Graphs",
  ]);
  const [newCard, setNewCard] = useState("");
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  // Check if the repo exists and load subfolders when the credentials change
  useEffect(() => {
    async function checkRepoAndLoadSubfolders() {
      if (githubUsername && githubToken) {
        const exists = await GitHubService.checkRepoExists(
          githubUsername,
          githubToken
        );
        setRepoExists(exists);

        if (exists) {
          const folders = await GitHubService.fetchSubfolders(
            githubUsername,
            githubToken
          );
          setSubfolders(folders);
        }
      }
    }
    checkRepoAndLoadSubfolders();
  }, [githubUsername, githubToken]);

  const createRepo = async () => {
    if (!githubUsername || !githubToken) {
      alert("Please enter your GitHub username and token.");
      return;
    }

    const success = await GitHubService.createRepo(githubUsername, githubToken);
    if (success) {
      setRepoExists(true);
      await GitHubService.createDefaultFolders(githubUsername, githubToken);
    }
  };

  const addCard = async () => {
    if (newCard.trim() === "") return;
    setCards([...cards, newCard]);

    if (repoExists) {
      await GitHubService.createFolder(githubUsername, githubToken, newCard);
    }
    setNewCard("");
  };

  // Show the modal with the instructions
  const openModal = () => {
    setShowModal(true);
  };

  // Close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Generate random positions and sizes for the circles
  const generateRandomCircle = () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 70 + 20, // Random size between 30 and 80
  });

  return (
    <div className="home-container">
      {/* Dynamic Moving Background with Animated Circles */}
      <div className="moving-background">
        {[...Array(10)].map((_, index) => {
          const { x, y, size } = generateRandomCircle();
          return (
            <motion.div
              key={index}
              className="circle"
              animate={{
                x: [x, x + Math.random() * 100], // Move horizontally
                y: [y, y + Math.random() * 100], // Move vertically
              }}
              transition={{
                duration: 4 + Math.random() * 2, // Random duration
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              style={{
                position: "absolute",
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: "50%",
                backgroundColor: `rgba(47, 255, 0, 0.5)`, // Light blue color
              }}
            />
          );
        })}
      </div>

      <h1 style={{ color: 'rgba(47, 255, 0, 0.5)' }}>EasAlgo</h1>

      {/* GitHub Credentials Input */}
      <div className="github-inputs">
        <input
          type="text"
          placeholder="Enter GitHub Username"
          value={githubUsername}
          onChange={(e) => setGithubUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter GitHub Token"
          value={githubToken}
          onChange={(e) => setGithubToken(e.target.value)}
        />
      </div>

      {/* Create GitHub Repo Button */}
      <div>
        {repoExists ? (
          <p className="repo-status">✅ GitHub Repo Exists: EasAlgo</p>
        ) : (
          <button className="create-repo-btn" onClick={createRepo}>
            🚀 Create GitHub Repo
          </button>
        )}
      </div>

      {/* Button to show GitHub Token Instructions */}
      <div>
        <button className="token-instructions-btn" onClick={openModal}>
          How to get GitHub Token
        </button>
      </div>

      {/* Add New Card */}
      <div className="add-card">
        <input
          type="text"
          placeholder="Enter category name"
          value={newCard}
          onChange={(e) => setNewCard(e.target.value)}
        />
        <button onClick={addCard}>+ Add Card</button>
      </div>

      {/* Display Cards and Subfolders */}
      <div className="cards-grid">
        {subfolders.length > 0
          ? subfolders.map((folder, index) => (
              <div key={index} className="card">{folder.name}</div>
            ))
          : cards.map((text, index) => (
              <div key={index} className="card">{text}</div>
            ))}
      </div>

      {/* Modal for GitHub Token Instructions */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <h2>How to Get GitHub Token</h2>
            <p>To generate a GitHub Personal Access Token (PAT):</p>
            <ol>
              <li>Go to GitHub and login to your account.</li>
              <li>Click on your profile icon in the top-right corner and go to <strong>Settings</strong>.</li>
              <li>In the left sidebar, click <strong>Developer settings</strong>.</li>
              <li>Under <strong>Personal access tokens</strong>, click <strong>Tokens (classic)</strong>.</li>
              <li>Click <strong>Generate new token</strong>.</li>
              <li>Select the necessary scopes you need (e.g., <strong>repo</strong> for full control of private repositories).</li>
              <li>Click <strong>Generate token</strong>.</li>
            </ol>
            <p style={{ color: 'red' }}>Save the token somewhere safe, as it will not be shown again!!!.</p>
            <a href="https://github.com/settings/tokens" target="_blank" rel="noopener noreferrer">
              Click here to go to GitHub Token Settings
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
