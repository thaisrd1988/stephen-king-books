import React, { useEffect, useState } from 'react';
import { getBooks } from '../services/api';
import { Link } from 'react-router-dom';

interface Book {
  id: number;
  Title: string;
  Year: number;
  Publisher: string;
  ISBN: string;
  Pages: number;
}

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);  // Inicializando como array vazio

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getBooks();
        console.log("Dados recebidos da API:", response.data);  // Verificar dados recebidos
        setBooks(response.data);  // Armazenar os livros retornados
      } catch (error) {
        console.error("Erro ao buscar os livros", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Livros de Stephen King</h1>
      <ul>
        {books.length > 0 ? (
          books.map((book) => (
            <li key={book.id}>
              <Link to={`/details/${book.id}`}>{book.Title}</Link>  {/* Acessando 'Title' corretamente */}
            </li>
          ))
        ) : (
          <p>Nenhum livro encontrado.</p>
        )}
      </ul>
    </div>
  );
};

export default BookList;
