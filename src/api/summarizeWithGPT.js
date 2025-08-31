// summarizeWithGPT.js
import axios from "axios";

export async function summarizeWithGPT(results, query) {
  try {
        const response = await axios.post("http://localhost:4000/summarize", {
        results,  // Search results
        query,    // The search query
    });

    return response.data.summary;
  } catch (error) {
    console.error("GPT summarization failed:", error);
    return "Sorry, unable to generate summary at the moment.";
  }
}
