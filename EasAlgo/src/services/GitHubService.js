// src/services/GitHubService.js

import axios from "axios";

const GITHUB_API_URL = "https://api.github.com";

export default {
  async checkRepoExists(username, token) {
    try {
      const response = await axios.get(
        `${GITHUB_API_URL}/repos/${username}/EasAlgo`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );
      return response.status === 200;
    } catch (error) {
      return false; // Repo doesn't exist or other errors
    }
  },

  async fetchSubfolders(username, token) {
    try {
      // Fetch the root contents of the EasAlgo repo
      const response = await axios.get(
        `${GITHUB_API_URL}/repos/${username}/EasAlgo/contents`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );

      // Filter the contents to get only directories (subfolders)
      const subfolders = response.data.filter(item => item.type === "dir");
      return subfolders;
    } catch (error) {
      console.error("Error fetching subfolders:", error);
      return [];
    }
  },

  // Other existing methods (like creating repo, creating folders, etc.)
};
