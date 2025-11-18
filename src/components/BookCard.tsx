import AnimatedCard from "@/components/AnimatedCard";
import { Book, Verse } from "@/lib/bookData";
import { useState } from "react";
import { Heart, BookOpen } from "lucide-react";
import { addBookmark, removeBookmark, isBookmarked } from "@/lib/bookmarks";
import { useNavigate } from "react-router-dom";

interface Props {
  book: Book;
  onOpen: (bookName: string, verses?: Verse[] | undefined) => void;
}

const BookCard = ({ book, onOpen }: Props) => {
  const [bookmarked, setBookmarked] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    navigate(`/biblia/${book.name}`);
  };

  const toggleBookmark = () => {
    // bookmark a primeira passagem do livro como exemplo
    const v = book.verses && book.verses[0];
    if (!v) return;
    if (isBookmarked(v.id)) {
      removeBookmark(v.id);
      setBookmarked(false);
    } else {
      addBookmark({
        id: v.id,
        book: book.name,
        chapter: v.chapter,
        verse: v.verse,
        text: v.text,
        createdAt: new Date().toISOString(),
      });
      setBookmarked(true);
    }
  };

  return (
    <AnimatedCard className="group hover:shadow-lg focus-within:shadow-lg">
      <div
        role="button"
        tabIndex={0}
        onClick={handleOpen}
        className="flex justify-between items-center"
      >
        <div>
          <h3 className="font-bold text-lg">{book.name}</h3>
          <p className="text-sm text-muted-foreground">{book.testament}</p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <div className="text-2xl font-bold text-primary">{book.chapters}</div>
          <div className="text-xs text-muted-foreground">capítulos</div>
          <div className="mt-2 flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleOpen();
              }}
              aria-label={`Abrir ${book.name}`}
              className="p-2 rounded bg-primary/10 hover:bg-primary/20"
            >
              <BookOpen />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleBookmark();
              }}
              aria-label={`Favoritar ${book.name}`}
              className={`p-2 rounded ${
                bookmarked ? "text-red-500" : "text-muted-foreground"
              } hover:bg-muted/20`}
            >
              <Heart />
            </button>
          </div>
        </div>
      </div>
    </AnimatedCard>
  );
};

export default BookCard;
