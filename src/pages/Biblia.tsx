import AnimatedCard from "@/components/AnimatedCard";
import {
  Book as BookIcon,
  Search as SearchIcon,
  Bookmark as BookmarkIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { useEffect, useMemo, useState } from "react";
import { booksData, Book, Verse } from "@/lib/bookData";
import BookCard from "@/components/BookCard";
import VerseModal from "@/components/VerseModal";
import ReadingPlan from "@/components/ReadingPlan";
import BookCarousel from "@/components/BookCarousel";
import { getBookmarks, removeBookmark } from "@/lib/bookmarks";

const Biblia = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [modalBook, setModalBook] = useState<{
    name: string;
    verses?: Verse[];
  }>({ name: "", verses: [] });
  const [bookmarks, setBookmarks] = useState(() => getBookmarks());

  useEffect(() => {
    document.title = "Bíblia — CristãoTech";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Leia e pesquise versículos da Bíblia. Planos de leitura, favoritos e muito mais."
      );
    // simulate fetch
    setTimeout(() => {
      setBooks(booksData as Book[]);
      setLoading(false);
    }, 300);
  }, []);

  const openBook = (name: string, verses?: Verse[]) => {
    setModalBook({ name, verses });
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    setBookmarks(getBookmarks());
  }, [openModal]);

  const handleRemoveBookmark = (id: string) => {
    removeBookmark(id);
    setBookmarks(getBookmarks());
  };

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { verseMatches: [], bookMatches: [] };
    const verseMatches: { book: string; verse: Verse }[] = [];
    const bookMatches: Book[] = [];

    books.forEach((b) => {
      if (b.name.toLowerCase().includes(q)) bookMatches.push(b);
      (b.verses || []).forEach((v) => {
        if (v.text.toLowerCase().includes(q))
          verseMatches.push({ book: b.name, verse: v });
      });
    });
    return { verseMatches, bookMatches };
  }, [query, books]);

  const highlight = (text: string) => {
    if (!query) return text;
    const re = new RegExp(`(${query})`, "ig");
    return text.replace(re, "<mark>$1</mark>");
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Bíblia Sagrada
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leia, pesquise e organize seus versículos favoritos.
          </p>
        </div>

        {/* Search */}
        <AnimatedCard className="max-w-3xl mx-auto mb-8">
          <div className="flex items-center gap-4">
            <SearchIcon className="text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar versículos, livros ou palavras-chave..."
              className="flex-1 border-0 focus-visible:ring-0"
              aria-label="Buscar na Bíblia"
            />
          </div>

          {query && (
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Resultados</h4>
              <div className="space-y-2">
                {searchResults.verseMatches.slice(0, 8).map((r) => (
                  <button
                    key={r.verse.id}
                    onClick={() => openBook(r.book, [r.verse])}
                    className="w-full text-left px-3 py-2 rounded hover:bg-muted transition-colors"
                    dangerouslySetInnerHTML={{
                      __html: `<strong>${r.book}</strong> — ${highlight(
                        r.verse.text
                      )}`,
                    }}
                  />
                ))}

                {searchResults.bookMatches.slice(0, 6).map((b) => (
                  <button
                    key={b.name}
                    onClick={() => openBook(b.name, b.verses)}
                    className="w-full text-left px-3 py-2 rounded hover:bg-muted transition-colors"
                  >
                    <strong>{b.name}</strong> —{" "}
                    <span className="text-sm text-muted-foreground">
                      {b.testament}
                    </span>
                  </button>
                ))}

                {searchResults.verseMatches.length === 0 &&
                  searchResults.bookMatches.length === 0 && (
                    <div className="px-3 py-4 text-sm text-muted-foreground">
                      Nenhum resultado encontrado.
                    </div>
                  )}
              </div>
            </div>
          )}
        </AnimatedCard>

        {/* Quick Access grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <AnimatedCard delay={0}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <BookIcon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Versículo do Dia</h3>
                <p className="text-sm text-muted-foreground">
                  "Porque Deus amou o mundo..."
                </p>
                <p className="text-xs text-primary mt-2">João 3:16</p>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={100}>
            <div>
              <h3 className="font-bold mb-2">Salvos Recentemente</h3>
              <div className="space-y-2">
                {bookmarks.length === 0 && (
                  <p className="text-sm text-muted-foreground">
                    Nenhum favorito ainda.
                  </p>
                )}
                {bookmarks.slice(0, 4).map((b) => (
                  <div
                    key={b.id}
                    className="flex items-start justify-between gap-2"
                  >
                    <div>
                      <div className="text-sm font-medium">
                        {b.book} {b.chapter}:{b.verse}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {b.text}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button
                        aria-label={`Abrir ${b.book}`}
                        onClick={() =>
                          openBook(b.book, [
                            {
                              id: b.id,
                              chapter: b.chapter,
                              verse: b.verse,
                              text: b.text,
                            },
                          ])
                        }
                        className="text-sm text-primary"
                      >
                        Abrir
                      </button>
                      <button
                        aria-label={`Remover ${b.book}`}
                        onClick={() => handleRemoveBookmark(b.id)}
                        className="text-sm text-muted-foreground"
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={200}>
            <ReadingPlan />
          </AnimatedCard>
        </div>

        {/* Featured Carousel */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Destaques</h2>
          {loading ? (
            <div className="h-56 rounded-lg bg-muted/20 animate-pulse" />
          ) : (
            <BookCarousel books={books} onOpen={openBook} />
          )}
        </div>

        {/* Books List */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Livros da Bíblia</h2>
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-24 bg-muted/20 animate-pulse rounded"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {books.map((book, index) => (
                <BookCard key={book.name} book={book} onOpen={openBook} />
              ))}
            </div>
          )}
        </div>

        <VerseModal
          open={openModal}
          onClose={closeModal}
          bookName={modalBook.name}
          verses={modalBook.verses || []}
        />
      </div>
    </div>
  );
};

export default Biblia;
