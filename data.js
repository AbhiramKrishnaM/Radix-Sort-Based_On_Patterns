let data = [
  { id: 0, pattern: "ppbp", patternResult: "pp" },
  { id: 1, pattern: "p", patternResult: "pp" },
  { id: 2, pattern: "tt", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
  { id: 3, pattern: "bp", patternResult: "pp" },
  { id: 4, pattern: "pb", patternResult: "pp" },
  { id: 5, pattern: "p", patternResult: "pp" },
  { id: 6, pattern: "pp", patternResult: "pp" },
  { id: 7, pattern: "pp", patternResult: "pp" },
  { id: 8, pattern: "ppbppp", patternResult: "pp" },
  { id: 9, pattern: "ppbp", patternResult: "pp" },
  { id: 10, pattern: "ppbp", patternResult: "pp" },
];

export default data;
