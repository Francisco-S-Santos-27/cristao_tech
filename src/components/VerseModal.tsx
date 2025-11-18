import { useEffect, useState } from "react";
import { X, Heart } from "lucide-react";
import { addBookmark, isBookmarked, removeBookmark } from "@/lib/bookmarks";
import { Verse } from "@/lib/bookData";

interface Props {
  open: boolean;
  onClose: () => void;
  bookName: string;
  verses: Verse[];
}

const VerseModal = ({ open, onClose, bookName, verses }: Props) => {
  const [selectedVerse, setSelectedVerse] = useState<Verse | null>(null);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    if (selectedVerse) {
      setBookmarked(isBookmarked(selectedVerse.id));
    }
  }, [selectedVerse]);

  useEffect(() => {
    if (!open) {
      setSelectedVerse(null);
    }
  }, [open]);

  if (!open) return null;

  const handleBookmark = (v: Verse) => {
    if (isBookmarked(v.id)) {
      removeBookmark(v.id);
      setBookmarked(false);
    } else {
      addBookmark({
        id: v.id,
        book: bookName,
        chapter: v.chapter,
        verse: v.verse,
        text: v.text,
        createdAt: new Date().toISOString(),
      });
      setBookmarked(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-background w-full max-w-3xl mx-4 rounded-lg shadow-lg overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-border/40">
          <h3 className="font-bold">{bookName}</h3>
          <button
            aria-label="Fechar"
            onClick={onClose}
            className="p-2 rounded hover:bg-muted"
          >
            <X />
          </button>
        </div>

        <div className="p-4 max-h-[60vh] overflow-y-auto space-y-4">
          {verses && verses.length > 0 ? (
            verses.map((v) => (
              <div
                key={v.id}
                className="p-3 rounded hover:bg-muted/40 transition-colors"
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {v.chapter}:{v.verse}
                    </div>
                    <p className="text-foreground mt-1">{v.text}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => handleBookmark(v)}
                      aria-pressed={bookmarked}
                      className={`p-2 rounded ${
                        bookmarked ? "text-red-500" : "text-muted-foreground"
                      } hover:bg-muted/20`}
                    >
                      <Heart />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-muted-foreground">
              Nenhum versículo disponível.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerseModal;
