// src/api/fetchSearchResults.js
const WIKIMEDIA_API = 'https://api.wikimedia.org/core/v1/wikipedia/en/search/page';

export async function fetchSearchResults(query) {
  try {
    const params = new URLSearchParams({ q: query, limit: 10 });
    const response = await fetch(`${WIKIMEDIA_API}?${params.toString()}`, {
      headers: {
        'Api-User-Agent': 'BrowseBot/1.0 (your-email@example.com)',
      },
    });

    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();

    const results = (data.pages || []).map((page) => ({
      title: page.title,
      description: page.description || page.excerpt,
      link: `https://en.wikipedia.org/wiki/${encodeURIComponent(page.title)}`,
      thumbnail: page.thumbnail?.url || null,
    }));

    return { results };
  } catch (err) {
    throw err;
  }
}
