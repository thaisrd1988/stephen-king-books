import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookDetails } from '../services/api';

interface BookDetails {
  id: number;
  Title: string;
  Year: number;
  Publisher: string;
  ISBN: string;
  Pages: number;
  Notes?: string[]; // Notas podem ser opcionais
}

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Obtendo o ID do livro da URL
  const [book, setBook] = useState<BookDetails | null>(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      if (id) {
        try {
          const response = await getBookDetails(id);
          console.log("Detalhes do livro:", response.data); // Verificar dados recebidos
          setBook(response.data); // Armazenando o livro no estado
        } catch (error) {
          console.error("Erro ao buscar detalhes do livro", error);
        }
      }
    };

    fetchBookDetails();
  }, [id]);

  if (!book) return <div>Carregando...</div>;

  return (
    <div>
      <h1>{book.Title}</h1>
      <p><strong>Year:</strong> {book.Year || "Year not available"}</p>
      <p><strong>Publisher:</strong> {book.Publisher}</p>
      <p><strong>ISBN:</strong> {book.ISBN}</p>
      <p><strong>Pages:</strong> {book.Pages}</p>
      <p>
        <strong>Notes:</strong>{" "}
        {book.Notes && book.Notes.length > 0
          ? book.Notes.join(", ")
          : "No notes available"}
      </p>
    </div>
  );
};

export default BookDetails;
