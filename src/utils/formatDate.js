export function formatDate(dateString) {
  const date = new Date(dateString);
  if (isNaN(date)) return '';

  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
