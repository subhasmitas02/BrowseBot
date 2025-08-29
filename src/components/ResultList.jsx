import React from 'react';
import SearchResult from './SearchResult';

export default function ResultList({ results }) {
  return (
    <div className="space-y-6">
      {results.map((result, i) => (
        <SearchResult key={i} {...result} />
      ))}
    </div>
  );
}
