# BrowseBot

BrowseBot is a smart, fast, and private search engine built with React. It offers a modern, responsive UI with both light and dark modes, enabling seamless web searches with enhanced privacy.

## Features

- **Modern UI:** Clean and responsive design with Tailwind CSS, including animated gradient buttons and subtle shadows for depth.
- **Light & Dark Mode:** User-controlled theme toggle with consistent theming across all pages.
- **Smart Search:** Input supports natural language sentence queries, mimicking Google’s search experience.
- **Wikimedia API Integration:** Switched to Wikimedia’s Search API to enable rich, sentence-based query results.
- **AI-Powered Summary:** Uses **Cohere's AI API** to generate concise summaries of search results.
- **Results Page:** Displays search results with clickable titles, descriptions, and URLs, with adaptive styling for readability in both themes.
- **AI Summary Styling:** Custom background adapts to light/dark themes with enhanced visibility for AI summary box.
- **Animated UI Elements:** Search button includes a subtle animated gradient; search results have hover zoom and shadow effects.
- **Accessibility:** Keyboard support for search input and button (Enter key triggers search).
- **Privacy-focused:** Does not track or store user data; queries go directly to Wikimedia API.
- **Multi-device & Screen Support:** Fully responsive design optimized for desktops, tablets, and mobile devices.

## Tech Stack

### Frontend
- React (functional components, hooks)
- React Router for navigation
- Tailwind CSS for styling and theming
- Context API for theme management
- Axios (for API communication with backend)

### Backend
- Node.js with Express
- dotenv (for environment variable management)
- Axios (used to call Cohere AI API)
- CORS and JSON middleware

## How to Run

### Frontend
1. Clone the repo
2. Navigate to the frontend folder: `cd browsebot-frontend`
3. Run `npm install` to install dependencies
4. Run `npm start` to launch the app locally

### Backend
1. Navigate to the backend folder: `cd browsebot-backend`
2. Create a `.env` file and add your Cohere API key: 

## Future Improvements

- Autocomplete suggestions for search input  
- Save recent searches locally using `localStorage`  
- Add “Did you mean...” feature to suggest corrections    

---

Built by [Subhasmita Sahu] • © 2025

