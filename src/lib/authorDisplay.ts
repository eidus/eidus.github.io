import { Author } from '@/types/publication';

const ELLIPSIS: Author = { name: '...' };
const LEADING_COUNT = 2;
const TRUNCATE_THRESHOLD = 8;

// For long author lists (e.g. large collaborations), show the first few
// authors, an ellipsis, the highlighted (site owner) author if not already
// visible, and a trailing ellipsis — instead of the full list.
export function getDisplayAuthors(authors: Author[]): Author[] {
  if (authors.length <= TRUNCATE_THRESHOLD) return authors;

  const highlightedIndex = authors.findIndex(a => a.isHighlighted);
  const leading = authors.slice(0, LEADING_COUNT);

  if (highlightedIndex === -1 || highlightedIndex < LEADING_COUNT) {
    return [...leading, ELLIPSIS];
  }

  if (highlightedIndex === authors.length - 1) {
    return [...leading, ELLIPSIS, authors[highlightedIndex]];
  }

  return [...leading, ELLIPSIS, authors[highlightedIndex], ELLIPSIS];
}
