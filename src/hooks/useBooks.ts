import { useState, useEffect } from "react";
import { api } from "@/api/api";

export interface Book {
  _id: string;
  title: string;
  hindiTitle: string;
  description: string;
  category: string;
  stats: string;
  pdfUrl: string;
  createdAt?: string;
  updatedAt?: string;
}

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch all books
  const fetchBooks = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log("Fetching books from /books endpoint...");
      const res = await api.get<Book[]>("/books");
      console.log("Books fetched successfully:", res.data);
      setBooks(res.data);
    } catch (err: any) {
      const errorMsg = err.response?.data?.error || err.message || "Failed to fetch books";
      console.error("Failed to fetch books - Full error:", err);
      console.error("Error response:", err.response);
      console.error("Error message:", errorMsg);
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  // Fetch single book by ID
  const fetchBookById = async (id: string) => {
    try {
      const res = await api.get<Book>(`/books/${id}`);
      return res.data;
    } catch (err: any) {
      const errorMsg = err.response?.data?.error || err.message || "Failed to fetch book";
      console.error("Failed to fetch book:", err);
      throw new Error(errorMsg);
    }
  };

  // Load books on mount
  useEffect(() => {
    fetchBooks();
  }, []);

  return {
    books,
    loading,
    error,
    fetchBooks,
    fetchBookById,
  };
};
