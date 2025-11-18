import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { booksData, Book, Verse } from "@/lib/bookData";
import { bibleApi, VerseResponse } from "@/lib/bibleApi";
import {
  Search as SearchIcon,
  ChevronLeft,
  Bookmark as BookmarkIcon,
  BookMarked,
  AlertCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import AnimatedCard from "@/components/AnimatedCard";
import VerseModal from "@/components/VerseModal";
import { getBookmarks, removeBookmark, addBookmark } from "@/lib/bookmarks";

const BookPage = () => {
  const { bookName } = useParams<{ bookName: string }>();
  const navigate = useNavigate();
  const [book, setBook] = useState<Book | null>(null);
  const [verses, setVerses] = useState<VerseResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [modalVerses, setModalVerses] = useState<Verse[]>([]);
  const [bookmarks, setBookmarks] = useState(() => getBookmarks());

  // Load book metadata and verses
  useEffect(() => {
    const loadBook = async () => {
      setLoading(true);
      setError(null);

      try {
        // Find book metadata from local data
        const found = booksData.find(
          (b) => b.name.toLowerCase() === bookName?.toLowerCase()
        );

        if (!found) {
          setError("Livro não encontrado");
          navigate("/biblia");
          return;
        }

        setBook(found);
        document.title = `${found.name} — CristãoTech`;
        const meta = document.querySelector('meta[name="description"]');
        if (meta)
          meta.setAttribute(
            "content",
            `Leia ${found.name} da Bíblia com bookmarks e ferramentas de estudo.`
          );

        // Fetch verses from API with offline-first strategy
        try {
          const apiVerses = await bibleApi.getBook(found.name);

          if (apiVerses.length === 0) {
            console.warn("No verses from API, using local data");
            // Fallback to local data
            if (found.verses) {
              setVerses(
                found.verses.map((v) => ({
                  id: v.id,
                  chapter: v.chapter,
                  verse: v.verse,
                  text: v.text,
                }))
              );
            } else {
              setError("Nenhum versículo disponível");
            }
          } else {
            setVerses(apiVerses);
          }
        } catch (apiError) {
          console.warn("Error fetching from API, using local data:", apiError);
          // Fallback to local data
          if (found.verses) {
            setVerses(
              found.verses.map((v) => ({
                id: v.id,
                chapter: v.chapter,
                verse: v.verse,
                text: v.text,
              }))
            );
          } else {
            setError("Erro ao carregar versículos");
          }
        }
      } catch (err) {
        console.error("Error loading book:", err);
        setError("Erro ao carregar livro");
      } finally {
        setLoading(false);
      }
    };

    if (bookName) {
      loadBook();
    }
  }, [bookName, navigate]);

  useEffect(() => {
    setBookmarks(getBookmarks());
  }, [openModal]);

  const filteredVerses = useMemo(() => {
    if (!verses) return [];
    const q = query.toLowerCase();
    return verses.filter((v) => {
      const matchQuery =
        !q ||
        v.text.toLowerCase().includes(q) ||
        v.chapter === parseInt(q) ||
        `${v.chapter}:${v.verse}`.includes(q);
      const matchChapter =
        selectedChapter === 0 || v.chapter === selectedChapter;
      return matchQuery && matchChapter;
    });
  }, [verses, query, selectedChapter]);

  const versesByChapter = useMemo(() => {
    if (!verses) return new Map();
    const grouped = new Map<number, VerseResponse[]>();
    verses.forEach((v) => {
      if (!grouped.has(v.chapter)) grouped.set(v.chapter, []);
      grouped.get(v.chapter)!.push(v);
    });
    return grouped;
  }, [verses]);

  const chapters = Array.from({ length: book?.chapters || 0 }, (_, i) => i + 1);

  const openVerseModal = (verse: VerseResponse) => {
    const verseData: Verse = {
      id: verse.id,
      chapter: verse.chapter,
      verse: verse.verse,
      text: verse.text,
    };
    setModalVerses([verseData]);
    setOpenModal(true);
  };

  const toggleBookmark = (verse: VerseResponse) => {
    const existingBookmark = bookmarks.find((b) => b.id === verse.id);
    if (existingBookmark) {
      removeBookmark(verse.id);
    } else {
      addBookmark({
        id: verse.id,
        book: book?.name || "",
        chapter: verse.chapter,
        verse: verse.verse,
        text: verse.text,
        createdAt: new Date().toISOString(),
      });
    }
    setBookmarks(getBookmarks());
  };

  const isBookmarked = (verseId: string) =>
    bookmarks.some((b) => b.id === verseId);

  const highlight = (text: string) => {
    if (!query) return text;
    const re = new RegExp(`(${query})`, "ig");
    return text.replace(re, "<mark>$1</mark>");
  };

  if (loading) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="space-y-4">
            <div className="h-20 bg-muted/20 animate-pulse rounded" />
            <div className="h-96 bg-muted/20 animate-pulse rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="min-h-screen py-12 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Livro não encontrado</h1>
          <button
            onClick={() => navigate("/biblia")}
            className="text-primary underline"
          >
            Voltar para a Bíblia
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <button
          onClick={() => navigate("/biblia")}
          className="flex items-center gap-2 text-primary hover:underline mb-6"
        >
          <ChevronLeft className="w-4 h-4" />
          Voltar
        </button>

        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{book.name}</h1>
          <p className="text-lg text-muted-foreground">
            {book.testament} • {book.chapters} capítulos • {verses.length}{" "}
            versículos
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <AnimatedCard className="max-w-3xl mx-auto mb-8 bg-orange-50 border border-orange-200">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-orange-800">{error}</p>
            </div>
          </AnimatedCard>
        )}

        {/* Search */}
        <AnimatedCard className="max-w-3xl mx-auto mb-8">
          <div className="flex items-center gap-4 mb-4">
            <SearchIcon className="text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar versículos, número ou texto..."
              className="flex-1 border-0 focus-visible:ring-0"
              aria-label="Buscar versículos"
            />
          </div>

          {/* Chapter selector */}
          <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
            <button
              onClick={() => setSelectedChapter(0)}
              className={`px-3 py-1 rounded text-sm transition-colors flex-shrink-0 ${
                selectedChapter === 0
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              Todos
            </button>
            {chapters.map((ch) => (
              <button
                key={ch}
                onClick={() => setSelectedChapter(ch)}
                className={`px-3 py-1 rounded text-sm transition-colors flex-shrink-0 ${
                  selectedChapter === ch
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                {ch}
              </button>
            ))}
          </div>
        </AnimatedCard>

        {/* Verses List */}
        <div className="max-w-3xl mx-auto">
          {filteredVerses.length === 0 ? (
            <AnimatedCard>
              <div className="text-center py-12 text-muted-foreground">
                Nenhum versículo encontrado com esses critérios.
              </div>
            </AnimatedCard>
          ) : (
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground mb-4">
                {filteredVerses.length} versículo(s) encontrado(s)
              </div>
              {filteredVerses.map((verse) => (
                <AnimatedCard key={verse.id}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <div className="text-sm font-semibold text-primary">
                        {verse.chapter}:{verse.verse}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-base leading-relaxed">
                        {query ? (
                          <span
                            dangerouslySetInnerHTML={{
                              __html: highlight(verse.text),
                            }}
                          />
                        ) : (
                          verse.text
                        )}
                      </p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <button
                        onClick={() => openVerseModal(verse)}
                        className="px-3 py-1 rounded text-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors whitespace-nowrap"
                      >
                        Ler
                      </button>
                      <button
                        onClick={() => toggleBookmark(verse)}
                        className="p-2 rounded hover:bg-muted transition-colors flex-shrink-0"
                        aria-label={`${
                          isBookmarked(verse.id) ? "Remover de" : "Adicionar a"
                        } favoritos`}
                      >
                        {isBookmarked(verse.id) ? (
                          <BookMarked className="w-5 h-5 fill-primary text-primary" />
                        ) : (
                          <BookmarkIcon className="w-5 h-5 text-muted-foreground" />
                        )}
                      </button>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          )}
        </div>

        <VerseModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          bookName={book.name}
          verses={modalVerses}
        />
      </div>
    </div>
  );
};

export default BookPage;
