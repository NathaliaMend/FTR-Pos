// O Pick serve para reaproveitar tipagens 
// e tambem para escolher a/as propriedade/s que te interessa/m

interface Book {
    title: string,
    pages: number,
    author: string
    description: string
}

const book1: Pick<Book, "title"> = {title:"TypeScript"}
const book2: Pick<Book, "title" | "pages"> = {title:"TypeScript", pages:150}
