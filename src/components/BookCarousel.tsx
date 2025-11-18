import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Book, Verse } from "@/lib/bookData";
import { useNavigate } from "react-router-dom";

interface Props {
  books: Book[];
  onOpen: (bookName: string, verses?: Verse[] | undefined) => void;
}

// Color presets for cover backgrounds
const testamentBg = (t: string) =>
  t === "Novo Testamento"
    ? "from-indigo-500 to-violet-600"
    : "from-amber-500 to-orange-600";

const BookCarousel: React.FC<Props> = ({ books, onOpen }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
  });
  const navigate = useNavigate();

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const handleOpenBook = (bookName: string) => {
    navigate(`/biblia/${bookName}`);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 py-6 px-4">
          {books.map((b) => (
            <div
              key={b.name}
              className="min-w-[180px] sm:min-w-[200px] md:min-w-[220px] lg:min-w-[260px] cursor-pointer"
            >
              <div
                onClick={() => handleOpenBook(b.name)}
                className={`h-56 md:h-72 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105`}
                role="button"
                tabIndex={0}
                aria-label={`Abrir ${b.name}`}
              >
                <div
                  className={`h-full w-full bg-gradient-to-br ${testamentBg(
                    b.testament
                  )} flex items-end p-4`}
                >
                  <div className="text-white">
                    <div className="text-sm opacity-90">{b.testament}</div>
                    <div className="text-xl font-bold leading-tight mt-2">
                      {b.name}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <div className="text-xs text-muted-foreground">
                  {b.chapters} capítulos
                </div>
                <button
                  onClick={() => handleOpenBook(b.name)}
                  className="text-sm text-primary ml-2"
                  aria-label={`Abrir ${b.name}`}
                >
                  Ler
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
        <button
          onClick={scrollPrev}
          className="pointer-events-auto ml-2 p-2 rounded-full bg-background/70 hover:bg-background text-muted-foreground shadow"
          aria-label="Anterior"
        >
          ‹
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
        <button
          onClick={scrollNext}
          className="pointer-events-auto mr-2 p-2 rounded-full bg-background/70 hover:bg-background text-muted-foreground shadow"
          aria-label="Próximo"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default BookCarousel;
