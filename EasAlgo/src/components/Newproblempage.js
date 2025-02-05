import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const GITHUB_USERNAME = "your-username";
const REPO_NAME = "EasAlgo-Problems";
const GITHUB_TOKEN = "your-github-token";

export default function NewProblemPage() {
  const { cardId } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [notes, setNotes] = useState("");

  const handleSave = async () => {
    if (!title.trim()) return alert("Title is required");

    const filePath = `${cardId}/${title.replace(/\s+/g, "-")}.md`;
    const content = `# ${title}\n\n## Code:\n\`\`\`js\n${code}\n\`\`\`\n\n## Notes:\n${notes}`;

    try {
      await axios.put(
        `https://api.github.com/repos/${GITHUB_USERNAME}/${REPO_NAME}/contents/${filePath}`,
        {
          message: `Added problem: ${title}`,
          content: btoa(content),
        },
        {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
          },
        }
      );

      alert("Problem added successfully!");
      navigate(`/card/${cardId}`);
    } catch (error) {
      console.error("Error saving problem:", error);
    }
  };

  return (
    <div className="new-problem-page">
      <h2>Add Problem in {cardId.toUpperCase()}</h2>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Code" value={code} onChange={(e) => setCode(e.target.value)} />
      <textarea placeholder="Notes" value={notes} onChange={(e) => setNotes(e.target.value)} />
      <button onClick={handleSave}>Save Problem</button>
    </div>
  );
}
