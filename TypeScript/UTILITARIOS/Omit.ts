// O Omit serve para omitir propriedades
// Ele pode ser usando para reaproveitar uma tipagem sem precisar usar todas as propriedades.

interface Book {
    title: string,
    pages: number,
    author: string
    description: string
}

const book: Omit<Book, "description"> = {title: "Typescript", pages: 100, author: "Nathalia"  }
