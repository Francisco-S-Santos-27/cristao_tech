const STORAGE_KEY = "ct_bookmarks_v1";

export interface Bookmark {
  id: string; // verse id
  book: string;
  chapter: number;
  verse: number;
  text: string;
  createdAt: string;
}

export function getBookmarks(): Bookmark[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

export function saveBookmarks(items: Bookmark[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function addBookmark(b: Bookmark) {
  const items = getBookmarks();
  const exists = items.find((it) => it.id === b.id);
  if (!exists) {
    items.unshift(b);
    saveBookmarks(items);
  }
}

export function removeBookmark(id: string) {
  const items = getBookmarks().filter((it) => it.id !== id);
  saveBookmarks(items);
}

export function isBookmarked(id: string) {
  return getBookmarks().some((it) => it.id === id);
}
