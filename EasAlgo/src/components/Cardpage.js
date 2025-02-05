import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Cardpage.css";

const GITHUB_USERNAME = "your-username";
const REPO_NAME = "EasAlgo-Problems";
const GITHUB_TOKEN = "your-github-token";

export default function CardPage() {
  const { cardId } = useParams();
  const navigate = useNavigate();
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/${GITHUB_USERNAME}/${REPO_NAME}/contents/${cardId}`
        );
        const problemTitles = response.data.map((file) => file.name.replace(".md", ""));
        setProblems(problemTitles);
      } catch (error) {
        console.error("Error fetching problems:", error);
      }
    };

    fetchProblems();
  }, [cardId]);

  return (
    <div className="card-page">
      <h2>{cardId.toUpperCase()} Problems</h2>
      <ul>
        {problems.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
      <button className="add-btn" onClick={() => navigate(`/card/${cardId}/new`)}>
        Add New Problem
      </button>
    </div>
  );
}
