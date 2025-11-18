/**
 * Script para gerar dados completos da Bíblia ARA em JSON
 *
 * Este script pode ser executado com:
 * - Node.js: npx ts-node src/lib/generateBibleData.ts
 * - Ou manualmente para atualizar o arquivo public/bibleData.json
 *
 * Instruções:
 * 1. Instale as dependências: npm install axios
 * 2. Configure as variáveis de ambiente com a chave da API
 * 3. Execute o script: npx ts-node src/lib/generateBibleData.ts
 * 4. O arquivo será salvo em public/bibleData.json
 */

// Tipos
interface BibleVerse {
  id: string;
  chapter: number;
  verse: number;
  text: string;
}

interface BibleBook {
  id: string;
  name: string;
  abbr: string;
  testament: string;
  chapters: number;
  totalVerses: number;
  verses: BibleVerse[];
}

interface BibleData {
  version: string;
  name: string;
  language: string;
  lastUpdated: string;
  books: BibleBook[];
}

// Dados dos livros da Bíblia
const BIBLE_BOOKS = [
  // Antigo Testamento
  {
    id: "01",
    name: "Gênesis",
    abbr: "Gn",
    testament: "Antigo Testamento",
    chapters: 50,
  },
  {
    id: "02",
    name: "Êxodo",
    abbr: "Ex",
    testament: "Antigo Testamento",
    chapters: 40,
  },
  {
    id: "03",
    name: "Levítico",
    abbr: "Lv",
    testament: "Antigo Testamento",
    chapters: 27,
  },
  {
    id: "04",
    name: "Números",
    abbr: "Nm",
    testament: "Antigo Testamento",
    chapters: 36,
  },
  {
    id: "05",
    name: "Deuteronômio",
    abbr: "Dt",
    testament: "Antigo Testamento",
    chapters: 34,
  },
  {
    id: "06",
    name: "Josué",
    abbr: "Js",
    testament: "Antigo Testamento",
    chapters: 24,
  },
  {
    id: "07",
    name: "Juízes",
    abbr: "Jz",
    testament: "Antigo Testamento",
    chapters: 21,
  },
  {
    id: "08",
    name: "Rute",
    abbr: "Rt",
    testament: "Antigo Testamento",
    chapters: 4,
  },
  {
    id: "09",
    name: "1 Samuel",
    abbr: "1Sm",
    testament: "Antigo Testamento",
    chapters: 31,
  },
  {
    id: "10",
    name: "2 Samuel",
    abbr: "2Sm",
    testament: "Antigo Testamento",
    chapters: 24,
  },
  {
    id: "11",
    name: "1 Reis",
    abbr: "1Rs",
    testament: "Antigo Testamento",
    chapters: 22,
  },
  {
    id: "12",
    name: "2 Reis",
    abbr: "2Rs",
    testament: "Antigo Testamento",
    chapters: 25,
  },
  {
    id: "13",
    name: "1 Crônicas",
    abbr: "1Cr",
    testament: "Antigo Testamento",
    chapters: 29,
  },
  {
    id: "14",
    name: "2 Crônicas",
    abbr: "2Cr",
    testament: "Antigo Testamento",
    chapters: 36,
  },
  {
    id: "15",
    name: "Esdras",
    abbr: "Ed",
    testament: "Antigo Testamento",
    chapters: 10,
  },
  {
    id: "16",
    name: "Neemias",
    abbr: "Ne",
    testament: "Antigo Testamento",
    chapters: 13,
  },
  {
    id: "17",
    name: "Ester",
    abbr: "Et",
    testament: "Antigo Testamento",
    chapters: 10,
  },
  {
    id: "18",
    name: "Jó",
    abbr: "Jó",
    testament: "Antigo Testamento",
    chapters: 42,
  },
  {
    id: "19",
    name: "Salmos",
    abbr: "Sl",
    testament: "Antigo Testamento",
    chapters: 150,
  },
  {
    id: "20",
    name: "Provérbios",
    abbr: "Pv",
    testament: "Antigo Testamento",
    chapters: 31,
  },
  {
    id: "21",
    name: "Eclesiastes",
    abbr: "Ec",
    testament: "Antigo Testamento",
    chapters: 12,
  },
  {
    id: "22",
    name: "Cantares",
    abbr: "Ct",
    testament: "Antigo Testamento",
    chapters: 8,
  },
  {
    id: "23",
    name: "Isaías",
    abbr: "Is",
    testament: "Antigo Testamento",
    chapters: 66,
  },
  {
    id: "24",
    name: "Jeremias",
    abbr: "Jr",
    testament: "Antigo Testamento",
    chapters: 52,
  },
  {
    id: "25",
    name: "Lamentações",
    abbr: "Lm",
    testament: "Antigo Testamento",
    chapters: 5,
  },
  {
    id: "26",
    name: "Ezequiel",
    abbr: "Ez",
    testament: "Antigo Testamento",
    chapters: 48,
  },
  {
    id: "27",
    name: "Daniel",
    abbr: "Dn",
    testament: "Antigo Testamento",
    chapters: 12,
  },
  {
    id: "28",
    name: "Oseias",
    abbr: "Os",
    testament: "Antigo Testamento",
    chapters: 14,
  },
  {
    id: "29",
    name: "Joel",
    abbr: "Jl",
    testament: "Antigo Testamento",
    chapters: 3,
  },
  {
    id: "30",
    name: "Amós",
    abbr: "Am",
    testament: "Antigo Testamento",
    chapters: 9,
  },
  {
    id: "31",
    name: "Obadias",
    abbr: "Ob",
    testament: "Antigo Testamento",
    chapters: 1,
  },
  {
    id: "32",
    name: "Jonas",
    abbr: "Jn",
    testament: "Antigo Testamento",
    chapters: 4,
  },
  {
    id: "33",
    name: "Miquéias",
    abbr: "Mq",
    testament: "Antigo Testamento",
    chapters: 7,
  },
  {
    id: "34",
    name: "Naum",
    abbr: "Na",
    testament: "Antigo Testamento",
    chapters: 3,
  },
  {
    id: "35",
    name: "Habacuc",
    abbr: "Hc",
    testament: "Antigo Testamento",
    chapters: 3,
  },
  {
    id: "36",
    name: "Sofonias",
    abbr: "Sf",
    testament: "Antigo Testamento",
    chapters: 3,
  },
  {
    id: "37",
    name: "Ageu",
    abbr: "Ag",
    testament: "Antigo Testamento",
    chapters: 2,
  },
  {
    id: "38",
    name: "Zacarias",
    abbr: "Zc",
    testament: "Antigo Testamento",
    chapters: 14,
  },
  {
    id: "39",
    name: "Malaquias",
    abbr: "Ml",
    testament: "Antigo Testamento",
    chapters: 4,
  },
  // Novo Testamento
  {
    id: "40",
    name: "Mateus",
    abbr: "Mt",
    testament: "Novo Testamento",
    chapters: 28,
  },
  {
    id: "41",
    name: "Marcos",
    abbr: "Mc",
    testament: "Novo Testamento",
    chapters: 16,
  },
  {
    id: "42",
    name: "Lucas",
    abbr: "Lc",
    testament: "Novo Testamento",
    chapters: 24,
  },
  {
    id: "43",
    name: "João",
    abbr: "Jo",
    testament: "Novo Testamento",
    chapters: 21,
  },
  {
    id: "44",
    name: "Atos",
    abbr: "At",
    testament: "Novo Testamento",
    chapters: 28,
  },
  {
    id: "45",
    name: "Romanos",
    abbr: "Rm",
    testament: "Novo Testamento",
    chapters: 16,
  },
  {
    id: "46",
    name: "1 Coríntios",
    abbr: "1Co",
    testament: "Novo Testamento",
    chapters: 16,
  },
  {
    id: "47",
    name: "2 Coríntios",
    abbr: "2Co",
    testament: "Novo Testamento",
    chapters: 13,
  },
  {
    id: "48",
    name: "Gálatas",
    abbr: "Gl",
    testament: "Novo Testamento",
    chapters: 6,
  },
  {
    id: "49",
    name: "Efésios",
    abbr: "Ef",
    testament: "Novo Testamento",
    chapters: 6,
  },
  {
    id: "50",
    name: "Filipenses",
    abbr: "Fp",
    testament: "Novo Testamento",
    chapters: 4,
  },
  {
    id: "51",
    name: "Colossenses",
    abbr: "Cl",
    testament: "Novo Testamento",
    chapters: 4,
  },
  {
    id: "52",
    name: "1 Tessalonicenses",
    abbr: "1Ts",
    testament: "Novo Testamento",
    chapters: 5,
  },
  {
    id: "53",
    name: "2 Tessalonicenses",
    abbr: "2Ts",
    testament: "Novo Testamento",
    chapters: 3,
  },
  {
    id: "54",
    name: "1 Timóteo",
    abbr: "1Tm",
    testament: "Novo Testamento",
    chapters: 6,
  },
  {
    id: "55",
    name: "2 Timóteo",
    abbr: "2Tm",
    testament: "Novo Testamento",
    chapters: 4,
  },
  {
    id: "56",
    name: "Tito",
    abbr: "Tt",
    testament: "Novo Testamento",
    chapters: 3,
  },
  {
    id: "57",
    name: "Filémon",
    abbr: "Fm",
    testament: "Novo Testamento",
    chapters: 1,
  },
  {
    id: "58",
    name: "Hebreus",
    abbr: "Hb",
    testament: "Novo Testamento",
    chapters: 13,
  },
  {
    id: "59",
    name: "Tiago",
    abbr: "Tg",
    testament: "Novo Testamento",
    chapters: 5,
  },
  {
    id: "60",
    name: "1 Pedro",
    abbr: "1Pd",
    testament: "Novo Testamento",
    chapters: 5,
  },
  {
    id: "61",
    name: "2 Pedro",
    abbr: "2Pd",
    testament: "Novo Testamento",
    chapters: 3,
  },
  {
    id: "62",
    name: "1 João",
    abbr: "1Jo",
    testament: "Novo Testamento",
    chapters: 5,
  },
  {
    id: "63",
    name: "2 João",
    abbr: "2Jo",
    testament: "Novo Testamento",
    chapters: 1,
  },
  {
    id: "64",
    name: "3 João",
    abbr: "3Jo",
    testament: "Novo Testamento",
    chapters: 1,
  },
  {
    id: "65",
    name: "Judas",
    abbr: "Jd",
    testament: "Novo Testamento",
    chapters: 1,
  },
  {
    id: "66",
    name: "Apocalipse",
    abbr: "Ap",
    testament: "Novo Testamento",
    chapters: 22,
  },
];

// Instruções de uso
export function generateBibleData(): BibleData {
  /**
   * Para gerar dados COMPLETOS, você pode:
   *
   * 1. OPÇÃO A: Usar API api.api-bible.com (recomendado)
   *    - Acesse: https://api.api-bible.com
   *    - Crie uma conta e pegue sua chave de API
   *    - Use este script com a chave para buscar todos os versículos
   *
   * 2. OPÇÃO B: Usar fonte de dados local pré-existente
   *    - Baixe a Bíblia ARA em JSON de: https://github.com/amorim-dev/bible-api
   *    - Ou use a API bibleapi.com
   *
   * 3. OPÇÃO C: Criar manualmente (não recomendado, muito trabalho)
   *
   * POR ENQUANTO: Este arquivo tem dados de exemplo
   * Para uso em PRODUÇÃO: Execute o script abaixo
   */

  const bibleData: BibleData = {
    version: "ARA",
    name: "Almeida Revisada e Atualizada",
    language: "pt-BR",
    lastUpdated: new Date().toISOString().split("T")[0],
    books: BIBLE_BOOKS.map((book) => ({
      id: book.id,
      name: book.name,
      abbr: book.abbr,
      testament: book.testament,
      chapters: book.chapters,
      totalVerses: 0, // Será preenchido pela API
      verses: [], // Será preenchido pela API
    })),
  };

  return bibleData;
}

/**
 * Script para atualizar o JSON com dados da API
 *
 * Execute assim:
 *
 * import { generateBibleDataFromApi } from "@/lib/generateBibleData";
 *
 * const fullBibleData = await generateBibleDataFromApi();
 * // Salve em public/bibleData.json
 */
export async function generateBibleDataFromApi(
  apiKey: string
): Promise<BibleData> {
  const apiUrl = "https://api.api-bible.com/v1";
  const bibleId = "8f0a13dd8f4c4fcb8e7b8b3e1a1c5e5e"; // ARA Portuguese

  const bibleData: BibleData = {
    version: "ARA",
    name: "Almeida Revisada e Atualizada",
    language: "pt-BR",
    lastUpdated: new Date().toISOString().split("T")[0],
    books: [],
  };

  for (const book of BIBLE_BOOKS) {
    console.log(`Fetching ${book.name}...`);

    const bookData: BibleBook = {
      id: book.id,
      name: book.name,
      abbr: book.abbr,
      testament: book.testament,
      chapters: book.chapters,
      totalVerses: 0,
      verses: [],
    };

    // Fetch all chapters for this book
    for (let chapter = 1; chapter <= book.chapters; chapter++) {
      const chapterNum = String(chapter).padStart(3, "0");
      const chapterId = `${book.id}.${chapterNum}`;

      try {
        const response = await fetch(
          `${apiUrl}/bibles/${bibleId}/chapters/${chapterId}?include-verses=true`,
          {
            headers: {
              "api-key": apiKey,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();

          if (data.data && data.data.verses) {
            for (const verse of data.data.verses) {
              bookData.verses.push({
                id: verse.id,
                chapter: parseInt(verse.verseOsisId.split(".")[2]),
                verse: parseInt(verse.verseOsisId.split(".")[3]),
                text: verse.content,
              });
            }
          }
        }

        // Rate limiting
        await new Promise((resolve) => setTimeout(resolve, 100));
      } catch (error) {
        console.error(`Error fetching chapter ${chapter}:`, error);
      }
    }

    bookData.totalVerses = bookData.verses.length;
    bibleData.books.push(bookData);
  }

  return bibleData;
}

/**
 * Alternativa: Importar de fonte pública
 * GitHub: https://github.com/amorim-dev/bible-api/tree/main/resources/bible
 */
export async function generateBibleDataFromGitHub(): Promise<BibleData> {
  const baseUrl =
    "https://raw.githubusercontent.com/amorim-dev/bible-api/main/resources/bible/ARA";

  const bibleData: BibleData = {
    version: "ARA",
    name: "Almeida Revisada e Atualizada",
    language: "pt-BR",
    lastUpdated: new Date().toISOString().split("T")[0],
    books: [],
  };

  for (const book of BIBLE_BOOKS) {
    try {
      const fileName = book.name.replace(/\s+/g, "_");
      const response = await fetch(`${baseUrl}/${fileName}.json`);

      if (response.ok) {
        const bookData = await response.json();
        bibleData.books.push(bookData);
      } else {
        console.warn(`Could not fetch ${book.name}`);
      }
    } catch (error) {
      console.error(`Error fetching ${book.name}:`, error);
    }
  }

  return bibleData;
}
