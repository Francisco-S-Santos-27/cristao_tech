// Bible API Service - 100% Local Data Only
// Uses: Local JSON file (public/bibleData.json) - Almeida Revisada e Atualizada
// No external API dependencies

interface BibleDataFile {
  version: string;
  name: string;
  language: string;
  lastUpdated: string;
  books: LocalBook[];
}

interface LocalBook {
  id: string;
  name: string;
  abbr: string;
  testament: string;
  chapters: number;
  totalVerses: number;
  verses: VerseResponse[];
}

export interface VerseResponse {
  id: string;
  chapter: number;
  verse: number;
  text: string;
}

export interface BookResponse {
  id: string;
  name: string;
  abbr: string;
  chapters: number;
  testament: string;
}

export class BibleAPIService {
  private bibleDataCache: BibleDataFile | null = null;
  private isCacheLoaded = false;

  /**
   * Load local Bible data from JSON file
   */
  private async loadLocalBibleData(): Promise<BibleDataFile | null> {
    if (this.isCacheLoaded) {
      return this.bibleDataCache;
    }

    try {
      const response = await fetch("/bibleData.json");
      if (!response.ok) {
        throw new Error("Failed to load local Bible data");
      }
      this.bibleDataCache = await response.json();
      this.isCacheLoaded = true;
      console.log("✅ Local Bible data loaded successfully");
      return this.bibleDataCache;
    } catch (error) {
      console.error("❌ Error loading local Bible data:", error);
      this.isCacheLoaded = true;
      return null;
    }
  }

  /**
   * Get all books (from local data)
   */
  async getBooks(): Promise<BookResponse[]> {
    const bibleData = await this.loadLocalBibleData();
    if (!bibleData) {
      console.error("No Bible data available");
      return [];
    }

    return bibleData.books.map((book) => ({
      id: book.id,
      name: book.name,
      abbr: book.abbr,
      chapters: book.chapters,
      testament: book.testament,
    }));
  }

  /**
   * Get verses for a specific book
   * Uses local JSON data only
   */
  async getBook(bookName: string): Promise<VerseResponse[]> {
    const bibleData = await this.loadLocalBibleData();
    if (!bibleData) {
      console.error("No Bible data available");
      return [];
    }

    const book = bibleData.books.find((b) => b.name === bookName);
    if (book && book.verses && book.verses.length > 0) {
      console.log(`📖 Loaded ${bookName} (${book.verses.length} verses)`);
      return book.verses;
    }

    console.warn(`📚 Book not found: ${bookName}`);
    return [];
  }

  /**
   * Get verses for a specific chapter
   */
  async getChapter(
    bookName: string,
    chapter: number
  ): Promise<VerseResponse[]> {
    const bibleData = await this.loadLocalBibleData();
    if (!bibleData) {
      return [];
    }

    const book = bibleData.books.find((b) => b.name === bookName);
    if (book && book.verses) {
      const chapterVerses = book.verses.filter((v) => v.chapter === chapter);
      if (chapterVerses.length > 0) {
        console.log(
          `📖 Loaded ${bookName} chapter ${chapter} (${chapterVerses.length} verses)`
        );
        return chapterVerses;
      }
    }

    console.warn(`Chapter not found: ${bookName} ${chapter}`);
    return [];
  }

  /**
   * Get a specific verse
   */
  async getVerse(
    bookName: string,
    chapter: number,
    verse: number
  ): Promise<VerseResponse | null> {
    const verses = await this.getChapter(bookName, chapter);
    const result = verses.find((v) => v.verse === verse);
    return result || null;
  }

  /**
   * Search verses by text
   * Searches in all local data only
   */
  async searchVerses(query: string): Promise<VerseResponse[]> {
    const bibleData = await this.loadLocalBibleData();
    if (!bibleData) {
      return [];
    }

    const results: VerseResponse[] = [];
    const lowerQuery = query.toLowerCase();

    for (const book of bibleData.books) {
      for (const verse of book.verses) {
        if (verse.text.toLowerCase().includes(lowerQuery)) {
          results.push(verse);
          if (results.length >= 500) break;
        }
      }
      if (results.length >= 500) break;
    }

    console.log(`🔍 Found ${results.length} results`);
    return results;
  }

  /**
   * Get data source status
   */
  async getDataSourceStatus(): Promise<{ local: boolean }> {
    const bibleData = await this.loadLocalBibleData();
    return {
      local: bibleData !== null,
    };
  }
}

// Export singleton instance
export const bibleApi = new BibleAPIService();
