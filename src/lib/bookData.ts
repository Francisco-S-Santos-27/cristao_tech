export interface Verse {
  id: string;
  chapter: number;
  verse: number;
  text: string;
}

export interface Book {
  name: string;
  testament: "Antigo Testamento" | "Novo Testamento";
  chapters: number;
  verses?: Verse[];
}

// All 66 books of the Bible with sample verses
export const booksData: Book[] = [
  // Antigo Testamento - Pentateuco (5 livros)
  {
    name: "Gênesis",
    testament: "Antigo Testamento",
    chapters: 50,
    verses: [
      {
        id: "gen-1-1",
        chapter: 1,
        verse: 1,
        text: "No princípio criou Deus os céus e a terra.",
      },
      {
        id: "gen-1-2",
        chapter: 1,
        verse: 2,
        text: "E a terra era sem forma e vazia; e havia trevas sobre a face do abismo; e o Espírito de Deus se movia sobre a face das águas.",
      },
      {
        id: "gen-1-3",
        chapter: 1,
        verse: 3,
        text: "E disse Deus: Haja luz. E houve luz.",
      },
      {
        id: "gen-3-16",
        chapter: 3,
        verse: 16,
        text: "E à mulher disse: Multiplicarei sobremodo os sofrimentos da tua gravidez; com dor darás à luz filhos...",
      },
    ],
  },
  {
    name: "Êxodo",
    testament: "Antigo Testamento",
    chapters: 40,
    verses: [
      {
        id: "exo-1-1",
        chapter: 1,
        verse: 1,
        text: "Estes são os nomes dos filhos de Israel, que entraram no Egito com Jacó, entrando cada um com sua família.",
      },
      {
        id: "exo-3-14",
        chapter: 3,
        verse: 14,
        text: "Disse Deus a Moisés: EU SOU O QUE SOU. Disse mais: Assim dirás aos filhos de Israel: EU SOU me enviou a vós.",
      },
      {
        id: "exo-20-1",
        chapter: 20,
        verse: 1,
        text: "E Deus falou todas estas palavras, dizendo:",
      },
    ],
  },
  {
    name: "Levítico",
    testament: "Antigo Testamento",
    chapters: 27,
    verses: [
      {
        id: "lev-1-1",
        chapter: 1,
        verse: 1,
        text: "E o SENHOR chamou a Moisés, e falou com ele da tenda da congregação, dizendo:",
      },
      {
        id: "lev-19-18",
        chapter: 19,
        verse: 18,
        text: "Não te vingarás, nem guardarás ira contra os filhos do teu povo; mas amarás o teu próximo como a ti mesmo. Eu sou o SENHOR.",
      },
    ],
  },
  {
    name: "Números",
    testament: "Antigo Testamento",
    chapters: 36,
    verses: [
      {
        id: "num-1-1",
        chapter: 1,
        verse: 1,
        text: "E o SENHOR falou a Moisés no deserto de Sinai, na tenda da congregação, no primeiro dia do mês segundo, no segundo ano da sua saída da terra do Egito, dizendo:",
      },
      {
        id: "num-6-24",
        chapter: 6,
        verse: 24,
        text: "O SENHOR te abençoe e te guarde;",
      },
    ],
  },
  {
    name: "Deuteronômio",
    testament: "Antigo Testamento",
    chapters: 34,
    verses: [
      {
        id: "deu-1-1",
        chapter: 1,
        verse: 1,
        text: "Estas são as palavras que Moisés falou a todo o Israel, além do Jordão, no deserto, na Arabá, diante de Sufe, entre Parã, Tofél, Labã, Hazerote e Di-Zabe.",
      },
      {
        id: "deu-6-4",
        chapter: 6,
        verse: 4,
        text: "Ouve, Israel, o SENHOR nosso Deus é o único SENHOR.",
      },
    ],
  },

  // Antigo Testamento - Históricos (12 livros)
  {
    name: "Josué",
    testament: "Antigo Testamento",
    chapters: 24,
    verses: [
      {
        id: "jos-1-1",
        chapter: 1,
        verse: 1,
        text: "Depois da morte de Moisés, servo do SENHOR, disse o SENHOR a Josué, filho de Num, servidor de Moisés:",
      },
      {
        id: "jos-1-8",
        chapter: 1,
        verse: 8,
        text: "Não cesses de falar deste Livro da Lei; medita nele dia e noite, para que tenhas cuidado de fazer conforme tudo quanto nele está escrito...",
      },
    ],
  },
  {
    name: "Juízes",
    testament: "Antigo Testamento",
    chapters: 21,
    verses: [
      {
        id: "jui-1-1",
        chapter: 1,
        verse: 1,
        text: "Depois da morte de Josué, perguntaram os filhos de Israel ao SENHOR, dizendo: Quem subirá primeiro por nós contra os cananeus, para lhes fazer guerra?",
      },
    ],
  },
  {
    name: "Rute",
    testament: "Antigo Testamento",
    chapters: 4,
    verses: [
      {
        id: "rut-1-1",
        chapter: 1,
        verse: 1,
        text: "Nos dias em que os juízes julgavam, houve fome na terra. Então um homem de Belém de Judá foi habitar na terra de Moabe, ele, sua mulher, e seus dois filhos.",
      },
    ],
  },
  {
    name: "1 Samuel",
    testament: "Antigo Testamento",
    chapters: 31,
    verses: [
      {
        id: "1sa-1-1",
        chapter: 1,
        verse: 1,
        text: "Havia um homem de Ramataim de Zofim, da montanha de Efraim, chamado Elcana, filho de Jeroão, filho de Eliú, filho de Toá, filho de Zufe, efraimita.",
      },
    ],
  },
  {
    name: "2 Samuel",
    testament: "Antigo Testamento",
    chapters: 24,
    verses: [
      {
        id: "2sa-1-1",
        chapter: 1,
        verse: 1,
        text: "Depois da morte de Saul, tendo Davi voltado da derrota dos amalequitas, Davi esteve dois dias em Ziclague.",
      },
    ],
  },
  {
    name: "1 Reis",
    testament: "Antigo Testamento",
    chapters: 22,
    verses: [
      {
        id: "1rei-1-1",
        chapter: 1,
        verse: 1,
        text: "Havia um certo rei Davi, que era velho e adiantado em idade; e o cobriam de roupas, mas não se aquentava.",
      },
    ],
  },
  {
    name: "2 Reis",
    testament: "Antigo Testamento",
    chapters: 25,
    verses: [
      {
        id: "2rei-1-1",
        chapter: 1,
        verse: 1,
        text: "Depois da morte de Acabe, Moabe se rebelou contra Israel.",
      },
    ],
  },
  {
    name: "1 Crônicas",
    testament: "Antigo Testamento",
    chapters: 29,
    verses: [
      { id: "1cro-1-1", chapter: 1, verse: 1, text: "Adão, Set, Enos," },
    ],
  },
  {
    name: "2 Crônicas",
    testament: "Antigo Testamento",
    chapters: 36,
    verses: [
      {
        id: "2cro-1-1",
        chapter: 1,
        verse: 1,
        text: "Salomão, filho de Davi, se fortificou em seu reino, e o SENHOR seu Deus era com ele, e o engrandecia sobremodo.",
      },
    ],
  },
  {
    name: "Esdras",
    testament: "Antigo Testamento",
    chapters: 10,
    verses: [
      {
        id: "esd-1-1",
        chapter: 1,
        verse: 1,
        text: "No primeiro ano de Ciro, rei da Pérsia, para que se cumprisse a palavra do SENHOR pela boca de Jeremias, o SENHOR despertou o espírito de Ciro, rei da Pérsia...",
      },
    ],
  },
  {
    name: "Neemias",
    testament: "Antigo Testamento",
    chapters: 13,
    verses: [
      {
        id: "nee-1-1",
        chapter: 1,
        verse: 1,
        text: "Palavras de Neemias, filho de Hacalias. Aconteceu no mês de Quisleu, no vigésimo ano, estando eu em Susã, a capital,",
      },
    ],
  },
  {
    name: "Ester",
    testament: "Antigo Testamento",
    chapters: 10,
    verses: [
      {
        id: "est-1-1",
        chapter: 1,
        verse: 1,
        text: "Aconteceu nos dias de Assuero (este é o Assuero que reinou desde a Índia até à Etiópia, sobre cento e vinte e sete províncias)",
      },
    ],
  },

  // Antigo Testamento - Poéticos (5 livros)
  {
    name: "Jó",
    testament: "Antigo Testamento",
    chapters: 42,
    verses: [
      {
        id: "job-1-1",
        chapter: 1,
        verse: 1,
        text: "Havia um homem na terra de Uz, chamado Jó; e esse homem era perfeito e reto, e temia a Deus, e se desviava do mal.",
      },
      {
        id: "job-19-25",
        chapter: 19,
        verse: 25,
        text: "Porque eu sei que o meu Redentor vive, e que por fim se levantará sobre a terra.",
      },
    ],
  },
  {
    name: "Salmos",
    testament: "Antigo Testamento",
    chapters: 150,
    verses: [
      {
        id: "sal-1-1",
        chapter: 1,
        verse: 1,
        text: "Bem-aventurado o homem que não anda segundo o conselho dos ímpios, nem se detém no caminho dos pecadores, nem se senta na roda dos escarnecedores;",
      },
      {
        id: "sal-23-1",
        chapter: 23,
        verse: 1,
        text: "O SENHOR é o meu pastor, nada me faltará.",
      },
      {
        id: "sal-119-105",
        chapter: 119,
        verse: 105,
        text: "Lâmpada para os meus pés é tua palavra, e luz para o meu caminho.",
      },
    ],
  },
  {
    name: "Provérbios",
    testament: "Antigo Testamento",
    chapters: 31,
    verses: [
      {
        id: "pro-1-1",
        chapter: 1,
        verse: 1,
        text: "Os provérbios de Salomão, filho de Davi, rei de Israel;",
      },
      {
        id: "pro-3-5",
        chapter: 3,
        verse: 5,
        text: "Confia no SENHOR de todo o teu coração, e não te estribes no teu próprio entendimento.",
      },
      {
        id: "pro-27-12",
        chapter: 27,
        verse: 12,
        text: "O astuto vê o mal e se esconde; mas os simples passam adiante e sofrem a pena.",
      },
    ],
  },
  {
    name: "Eclesiastes",
    testament: "Antigo Testamento",
    chapters: 12,
    verses: [
      {
        id: "ecl-1-1",
        chapter: 1,
        verse: 1,
        text: "Palavras do Pregador, filho de Davi, rei em Jerusalém.",
      },
      {
        id: "ecl-12-13",
        chapter: 12,
        verse: 13,
        text: "De tudo quanto se ouviu, a conclusão é: Teme a Deus, e guarda os seus mandamentos; porque este é o dever de todo o homem.",
      },
    ],
  },
  {
    name: "Cantares",
    testament: "Antigo Testamento",
    chapters: 8,
    verses: [
      {
        id: "can-1-1",
        chapter: 1,
        verse: 1,
        text: "O Cântico dos Cânticos, que é de Salomão.",
      },
      {
        id: "can-2-4",
        chapter: 2,
        verse: 4,
        text: "Ele me levou à casa do banquete, e o seu pendão sobre mim é amor.",
      },
    ],
  },

  // Antigo Testamento - Profetas Maiores (5 livros)
  {
    name: "Isaías",
    testament: "Antigo Testamento",
    chapters: 66,
    verses: [
      {
        id: "isa-1-1",
        chapter: 1,
        verse: 1,
        text: "Visão de Isaías, filho de Amós, que teve acerca de Judá e de Jerusalém, nos dias de Uzias, Jotão, Acaz e Ezequias, reis de Judá.",
      },
      {
        id: "isa-40-31",
        chapter: 40,
        verse: 31,
        text: "Mas os que esperam no SENHOR renovarão as suas forças; subirão com asas como águias; correrão, e não se cansarão; caminharão, e não se fatigarão.",
      },
    ],
  },
  {
    name: "Jeremias",
    testament: "Antigo Testamento",
    chapters: 52,
    verses: [
      {
        id: "jer-1-1",
        chapter: 1,
        verse: 1,
        text: "Palavras de Jeremias, filho de Hilquias, um dos sacerdotes que havia em Anatote, na terra de Benjamim.",
      },
      {
        id: "jer-29-11",
        chapter: 29,
        verse: 11,
        text: "Porque eu bem sei os pensamentos que penso de vós, diz o SENHOR; pensamentos de paz, e não de mal, para vos dar um fim esperado.",
      },
    ],
  },
  {
    name: "Lamentações",
    testament: "Antigo Testamento",
    chapters: 5,
    verses: [
      {
        id: "lam-1-1",
        chapter: 1,
        verse: 1,
        text: "Como está solitária a cidade que era tão populosa! Como se tornou viúva aquela que era grande entre as nações! A princesa das províncias se tornou tributária.",
      },
    ],
  },
  {
    name: "Ezequiel",
    testament: "Antigo Testamento",
    chapters: 48,
    verses: [
      {
        id: "eze-1-1",
        chapter: 1,
        verse: 1,
        text: "Ora, no trigésimo ano, no quarto mês, no quinto dia do mês, estando eu entre os cativos, junto ao rio Quebar, os céus se abriram, e tive visões de Deus.",
      },
      {
        id: "eze-37-1",
        chapter: 37,
        verse: 1,
        text: "A mão do SENHOR foi sobre mim, e o SENHOR me levou em espírito, e me colocou no meio de um vale que estava cheio de ossos.",
      },
    ],
  },
  {
    name: "Daniel",
    testament: "Antigo Testamento",
    chapters: 12,
    verses: [
      {
        id: "dan-1-1",
        chapter: 1,
        verse: 1,
        text: "No terceiro ano do reinado de Jeoiaquim, rei de Judá, veio Nabucodonozor, rei de Babilônia, a Jerusalém, e a sitiou.",
      },
      {
        id: "dan-6-26",
        chapter: 6,
        verse: 26,
        text: "Faço um decreto para que em todo o domínio do meu reino haja temor e tremor diante do Deus de Daniel; porque ele é o Deus vivo, e permanece para sempre...",
      },
    ],
  },

  // Antigo Testamento - Profetas Menores (12 livros)
  {
    name: "Oseias",
    testament: "Antigo Testamento",
    chapters: 14,
    verses: [
      {
        id: "ose-1-1",
        chapter: 1,
        verse: 1,
        text: "Palavra do SENHOR, que foi a Oseias, filho de Beeri, nos dias de Uzias, Jotão, Acaz e Ezequias, reis de Judá, e nos dias de Jeroboão, filho de Joás, rei de Israel.",
      },
    ],
  },
  {
    name: "Joel",
    testament: "Antigo Testamento",
    chapters: 3,
    verses: [
      {
        id: "joe-1-1",
        chapter: 1,
        verse: 1,
        text: "Palavra do SENHOR, que veio a Joel, filho de Petuel.",
      },
    ],
  },
  {
    name: "Amós",
    testament: "Antigo Testamento",
    chapters: 9,
    verses: [
      {
        id: "amo-1-1",
        chapter: 1,
        verse: 1,
        text: "Palavras de Amós, que era um dos pastores de Tecoa, que teve sobre Israel visões nos dias de Uzias, rei de Judá, e nos dias de Jeroboão, filho de Joás, rei de Israel, dois anos antes do terremoto.",
      },
    ],
  },
  {
    name: "Obadias",
    testament: "Antigo Testamento",
    chapters: 1,
    verses: [
      {
        id: "oba-1-1",
        chapter: 1,
        verse: 1,
        text: "Visão de Obadias. Assim diz o SENHOR Deus acerca de Edom...",
      },
    ],
  },
  {
    name: "Jonas",
    testament: "Antigo Testamento",
    chapters: 4,
    verses: [
      {
        id: "jon-1-1",
        chapter: 1,
        verse: 1,
        text: "Veio a palavra do SENHOR a Jonas, filho de Amitai, dizendo:",
      },
    ],
  },
  {
    name: "Miquéias",
    testament: "Antigo Testamento",
    chapters: 7,
    verses: [
      {
        id: "miq-1-1",
        chapter: 1,
        verse: 1,
        text: "Palavra do SENHOR, que veio a Miquéias de Morasti, nos dias de Jotão, Acaz e Ezequias, reis de Judá; a qual teve ele em visão acerca de Samaria e de Jerusalém.",
      },
    ],
  },
  {
    name: "Naum",
    testament: "Antigo Testamento",
    chapters: 3,
    verses: [
      {
        id: "nau-1-1",
        chapter: 1,
        verse: 1,
        text: "Profecia acerca de Nínive. Livro da visão de Naum de Elcós.",
      },
    ],
  },
  {
    name: "Habacuc",
    testament: "Antigo Testamento",
    chapters: 3,
    verses: [
      {
        id: "hab-1-1",
        chapter: 1,
        verse: 1,
        text: "A profecia que o profeta Habacuc recebeu em visão.",
      },
    ],
  },
  {
    name: "Sofonias",
    testament: "Antigo Testamento",
    chapters: 3,
    verses: [
      {
        id: "sof-1-1",
        chapter: 1,
        verse: 1,
        text: "Palavra do SENHOR, que veio a Sofonias, filho de Cúxi, filho de Gedalias, filho de Amarias, filho de Ezequias, nos dias de Josias, filho de Amom, rei de Judá.",
      },
    ],
  },
  {
    name: "Ageu",
    testament: "Antigo Testamento",
    chapters: 2,
    verses: [
      {
        id: "age-1-1",
        chapter: 1,
        verse: 1,
        text: "No segundo ano do rei Dario, no sexto mês, no primeiro dia do mês, veio a palavra do SENHOR, por intermédio do profeta Ageu, a Zorobabel, filho de Salatiel, governador de Judá, e a Josué, filho de Jozadaque, o sumo sacerdote, dizendo:",
      },
    ],
  },
  {
    name: "Zacarias",
    testament: "Antigo Testamento",
    chapters: 14,
    verses: [
      {
        id: "zac-1-1",
        chapter: 1,
        verse: 1,
        text: "No oitavo mês, no segundo ano de Dario, veio a palavra do SENHOR ao profeta Zacarias, filho de Berequias, filho de Ido, dizendo:",
      },
    ],
  },
  {
    name: "Malaquias",
    testament: "Antigo Testamento",
    chapters: 4,
    verses: [
      {
        id: "mal-1-1",
        chapter: 1,
        verse: 1,
        text: "Profecia da palavra do SENHOR a Israel, por intermédio de Malaquias.",
      },
      {
        id: "mal-4-5",
        chapter: 4,
        verse: 5,
        text: "Eis que vos enviarei o profeta Elias, antes que venha o grande e terrível dia do SENHOR;",
      },
    ],
  },

  // Novo Testamento - Evangelhos (4 livros)
  {
    name: "Mateus",
    testament: "Novo Testamento",
    chapters: 28,
    verses: [
      {
        id: "mat-1-1",
        chapter: 1,
        verse: 1,
        text: "Livro da genealogia de Jesus Cristo, filho de Davi, filho de Abraão.",
      },
      {
        id: "mat-5-3",
        chapter: 5,
        verse: 3,
        text: "Bem-aventurados os pobres de espírito, porque deles é o reino dos céus.",
      },
      {
        id: "mat-28-19",
        chapter: 28,
        verse: 19,
        text: "Portanto, ide, ensinai todas as nações, batizando-as em nome do Pai, e do Filho, e do Espírito Santo;",
      },
    ],
  },
  {
    name: "Marcos",
    testament: "Novo Testamento",
    chapters: 16,
    verses: [
      {
        id: "mar-1-1",
        chapter: 1,
        verse: 1,
        text: "Princípio do evangelho de Jesus Cristo, Filho de Deus;",
      },
      {
        id: "mar-10-45",
        chapter: 10,
        verse: 45,
        text: "Porque nem mesmo o Filho do homem veio para ser servido, mas para servir, e dar a sua vida em resgate de muitos.",
      },
    ],
  },
  {
    name: "Lucas",
    testament: "Novo Testamento",
    chapters: 24,
    verses: [
      {
        id: "luc-1-1",
        chapter: 1,
        verse: 1,
        text: "Visto que muitos já empreenderam uma narração dos fatos que entre nós se cumpriram,",
      },
      {
        id: "luc-15-11",
        chapter: 15,
        verse: 11,
        text: "Disse ainda: Um certo homem tinha dois filhos;",
      },
    ],
  },
  {
    name: "João",
    testament: "Novo Testamento",
    chapters: 21,
    verses: [
      {
        id: "joao-1-1",
        chapter: 1,
        verse: 1,
        text: "No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus.",
      },
      {
        id: "joao-3-16",
        chapter: 3,
        verse: 16,
        text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
      },
      { id: "joao-11-35", chapter: 11, verse: 35, text: "Jesus chorou." },
    ],
  },

  // Novo Testamento - Atos
  {
    name: "Atos",
    testament: "Novo Testamento",
    chapters: 28,
    verses: [
      {
        id: "ato-1-1",
        chapter: 1,
        verse: 1,
        text: "No meu primeiro livro, ó Teófilo, tratei de tudo quanto Jesus começou, não só a fazer, mas a ensinar,",
      },
      {
        id: "ato-2-38",
        chapter: 2,
        verse: 38,
        text: "Respondeu-lhes Pedro: Arrependei-vos, e cada um de vós seja batizado em nome de Jesus Cristo, para perdão de vossos pecados; e recebereis o dom do Espírito Santo.",
      },
    ],
  },

  // Novo Testamento - Epístolas Paulinas (14 livros)
  {
    name: "Romanos",
    testament: "Novo Testamento",
    chapters: 16,
    verses: [
      {
        id: "rom-1-1",
        chapter: 1,
        verse: 1,
        text: "Paulo, servo de Jesus Cristo, chamado para ser apóstolo, separado para o evangelho de Deus,",
      },
      {
        id: "rom-3-23",
        chapter: 3,
        verse: 23,
        text: "Pois todos pecaram e carecem da glória de Deus;",
      },
      {
        id: "rom-8-28",
        chapter: 8,
        verse: 28,
        text: "Sabemos que todas as coisas cooperam para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu propósito.",
      },
    ],
  },
  {
    name: "1 Coríntios",
    testament: "Novo Testamento",
    chapters: 16,
    verses: [
      {
        id: "1co-1-1",
        chapter: 1,
        verse: 1,
        text: "Paulo, chamado para ser apóstolo de Jesus Cristo pela vontade de Deus, e Sóstenes, nosso irmão,",
      },
      {
        id: "1co-13-4",
        chapter: 13,
        verse: 4,
        text: "O amor é paciente, o amor é benigno; não é invejoso, não se comporta com leviandade, não se ensoberbece;",
      },
    ],
  },
  {
    name: "2 Coríntios",
    testament: "Novo Testamento",
    chapters: 13,
    verses: [
      {
        id: "2co-1-1",
        chapter: 1,
        verse: 1,
        text: "Paulo, apóstolo de Jesus Cristo pela vontade de Deus, e Timóteo, nosso irmão, à igreja de Deus que está em Corinto, com todos os santos que estão em toda a Acaia:",
      },
      {
        id: "2co-12-9",
        chapter: 12,
        verse: 9,
        text: "E disse-me: A minha graça te basta, porque o meu poder se aperfeiçoa na fraqueza. De boa vontade, pois, me gloriarei nas minhas fraquezas, para que em mim habite o poder de Cristo.",
      },
    ],
  },
  {
    name: "Gálatas",
    testament: "Novo Testamento",
    chapters: 6,
    verses: [
      {
        id: "gal-1-1",
        chapter: 1,
        verse: 1,
        text: "Paulo, apóstolo, não da parte de homens, nem por homem algum, mas por Jesus Cristo, e por Deus Pai, que o ressuscitou de entre os mortos;",
      },
      {
        id: "gal-5-22",
        chapter: 5,
        verse: 22,
        text: "Mas o fruto do Espírito é: amor, alegria, paz, longanimidade, benignidade, bondade, fidelidade,",
      },
    ],
  },
  {
    name: "Efésios",
    testament: "Novo Testamento",
    chapters: 6,
    verses: [
      {
        id: "efe-1-1",
        chapter: 1,
        verse: 1,
        text: "Paulo, apóstolo de Jesus Cristo pela vontade de Deus, aos santos que estão em Éfeso, e fiéis em Jesus Cristo:",
      },
      {
        id: "efe-6-10",
        chapter: 6,
        verse: 10,
        text: "Finalmente, meus irmãos, robustecei-vos no Senhor e na força do seu poder.",
      },
    ],
  },
  {
    name: "Filipenses",
    testament: "Novo Testamento",
    chapters: 4,
    verses: [
      {
        id: "fil-1-1",
        chapter: 1,
        verse: 1,
        text: "Paulo e Timóteo, servos de Jesus Cristo, a todos os santos em Cristo Jesus que estão em Filipos, com os bispos e diáconos:",
      },
      {
        id: "fil-4-6",
        chapter: 4,
        verse: 6,
        text: "Por nada fiqueis ansiosos; em tudo, porém, sejam conhecidas, diante de Deus, as vossas petições, pela oração e súplica com ações de graças.",
      },
    ],
  },
  {
    name: "Colossenses",
    testament: "Novo Testamento",
    chapters: 4,
    verses: [
      {
        id: "col-1-1",
        chapter: 1,
        verse: 1,
        text: "Paulo, apóstolo de Jesus Cristo pela vontade de Deus, e Timóteo, nosso irmão,",
      },
      {
        id: "col-3-16",
        chapter: 3,
        verse: 16,
        text: "A palavra de Cristo habite ricamente em vós, em toda a sabedoria; ensinai-vos e admoestai-vos uns aos outros, com salmos, hinos e cânticos espirituais, cantando com graça em vosso coração ao Senhor.",
      },
    ],
  },
  {
    name: "1 Tessalonicenses",
    testament: "Novo Testamento",
    chapters: 5,
    verses: [
      {
        id: "1ts-1-1",
        chapter: 1,
        verse: 1,
        text: "Paulo, Silvano e Timóteo, à igreja dos tessalonicenses, em Deus Pai e no Senhor Jesus Cristo: graça e paz a vós.",
      },
    ],
  },
  {
    name: "2 Tessalonicenses",
    testament: "Novo Testamento",
    chapters: 3,
    verses: [
      {
        id: "2ts-1-1",
        chapter: 1,
        verse: 1,
        text: "Paulo, Silvano e Timóteo, à igreja dos tessalonicenses, em Deus nosso Pai e no Senhor Jesus Cristo:",
      },
    ],
  },
  {
    name: "1 Timóteo",
    testament: "Novo Testamento",
    chapters: 6,
    verses: [
      {
        id: "1ti-1-1",
        chapter: 1,
        verse: 1,
        text: "Paulo, apóstolo de Jesus Cristo, por mandado de Deus nosso Salvador, e de Jesus Cristo, nossa esperança,",
      },
    ],
  },
  {
    name: "2 Timóteo",
    testament: "Novo Testamento",
    chapters: 4,
    verses: [
      {
        id: "2ti-1-1",
        chapter: 1,
        verse: 1,
        text: "Paulo, apóstolo de Jesus Cristo, pela vontade de Deus, segundo a promessa da vida que há em Jesus Cristo,",
      },
    ],
  },
  {
    name: "Tito",
    testament: "Novo Testamento",
    chapters: 3,
    verses: [
      {
        id: "tit-1-1",
        chapter: 1,
        verse: 1,
        text: "Paulo, servo de Deus e apóstolo de Jesus Cristo, para promover a fé dos eleitos de Deus e o conhecimento da verdade que é segundo a piedade,",
      },
    ],
  },
  {
    name: "Filémon",
    testament: "Novo Testamento",
    chapters: 1,
    verses: [
      {
        id: "fle-1-1",
        chapter: 1,
        verse: 1,
        text: "Paulo, prisioneiro de Jesus Cristo, e o irmão Timóteo, a Filémon, nosso amado cooperador,",
      },
    ],
  },

  // Novo Testamento - Hebreus
  {
    name: "Hebreus",
    testament: "Novo Testamento",
    chapters: 13,
    verses: [
      {
        id: "heb-1-1",
        chapter: 1,
        verse: 1,
        text: "Havendo Deus, outrora, falado muitas vezes, e de muitas maneiras, aos pais, pelos profetas,",
      },
      {
        id: "heb-11-1",
        chapter: 11,
        verse: 1,
        text: "Ora, a fé é a certeza de coisas que se esperam, a convicção de fatos que não se veem.",
      },
    ],
  },

  // Novo Testamento - Tiago
  {
    name: "Tiago",
    testament: "Novo Testamento",
    chapters: 5,
    verses: [
      {
        id: "tia-1-1",
        chapter: 1,
        verse: 1,
        text: "Tiago, servo de Deus e do Senhor Jesus Cristo, às doze tribos da Dispersão, saudações.",
      },
      {
        id: "tia-1-2",
        chapter: 1,
        verse: 2,
        text: "Meus irmãos, tende por sumo gozo o passardes por várias provações,",
      },
    ],
  },

  // Novo Testamento - 1 Pedro
  {
    name: "1 Pedro",
    testament: "Novo Testamento",
    chapters: 5,
    verses: [
      {
        id: "1pe-1-1",
        chapter: 1,
        verse: 1,
        text: "Pedro, apóstolo de Jesus Cristo, aos eleitos que estão espalhados pelo Ponto, Galácia, Capadócia, Ásia e Bitínia,",
      },
      {
        id: "1pe-5-7",
        chapter: 5,
        verse: 7,
        text: "Lançai toda a vossa ansiedade sobre ele, porque ele tem cuidado de vós.",
      },
    ],
  },

  // Novo Testamento - 2 Pedro
  {
    name: "2 Pedro",
    testament: "Novo Testamento",
    chapters: 3,
    verses: [
      {
        id: "2pe-1-1",
        chapter: 1,
        verse: 1,
        text: "Simeão Pedro, servo e apóstolo de Jesus Cristo, aos que conosco receberam fé igualmente preciosa na justiça do nosso Deus e Salvador Jesus Cristo:",
      },
    ],
  },

  // Novo Testamento - Epístolas de João (3 livros)
  {
    name: "1 João",
    testament: "Novo Testamento",
    chapters: 5,
    verses: [
      {
        id: "1jo-1-1",
        chapter: 1,
        verse: 1,
        text: "O que era desde o princípio, o que ouvimos, o que vimos com os nossos olhos, o que contemplamos, e o que as nossas mãos tocaram, a respeito do Verbo da vida",
      },
      {
        id: "1jo-4-7",
        chapter: 4,
        verse: 7,
        text: "Amados, amemo-nos uns aos outros; porque o amor é de Deus; e todo aquele que ama é nascido de Deus, e conhece a Deus.",
      },
    ],
  },
  {
    name: "2 João",
    testament: "Novo Testamento",
    chapters: 1,
    verses: [
      {
        id: "2jo-1-1",
        chapter: 1,
        verse: 1,
        text: "O ancião à senhora eleita e aos seus filhos, a quem amo na verdade; e não só eu, mas também todos os que conhecem a verdade;",
      },
    ],
  },
  {
    name: "3 João",
    testament: "Novo Testamento",
    chapters: 1,
    verses: [
      {
        id: "3jo-1-1",
        chapter: 1,
        verse: 1,
        text: "O ancião a Gaio, o amado, a quem amo na verdade.",
      },
    ],
  },

  // Novo Testamento - Judas
  {
    name: "Judas",
    testament: "Novo Testamento",
    chapters: 1,
    verses: [
      {
        id: "jud-1-1",
        chapter: 1,
        verse: 1,
        text: "Judas, servo de Jesus Cristo, e irmão de Tiago, aos chamados, santificados em Deus Pai, e guardados em Jesus Cristo:",
      },
    ],
  },

  // Novo Testamento - Apocalipse
  {
    name: "Apocalipse",
    testament: "Novo Testamento",
    chapters: 22,
    verses: [
      {
        id: "apo-1-1",
        chapter: 1,
        verse: 1,
        text: "Revelação de Jesus Cristo, que Deus lhe deu, para mostrar aos seus servos as coisas que brevemente devem acontecer; e, enviando por intermédio do seu anjo, as notificou a João,",
      },
      {
        id: "apo-22-20",
        chapter: 22,
        verse: 20,
        text: "Aquele que testifica estas coisas diz: Certamente venho sem demora. Amém. Vem, Senhor Jesus.",
      },
    ],
  },
];
