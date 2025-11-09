import { useGetAllBooksQuery } from "@/redux/features/book/bookApi";
import type { IBook } from "@/types/book.type";
import { useState } from "react";
import { Link } from "react-router";
import Loader from "../shared/Loader";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { BookDetailsModal } from "./BookDetailsModal";
import { motion } from "framer-motion";

export default function RecentBooks() {
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    data: booksData,
    isLoading: bookDataLoading,
    error: bookDataError,
  } = useGetAllBooksQuery({ page: 1, limit: 6 });

  const closeModal = () => {
    setSelectedBookId(null);
    setIsModalOpen(false);
  };

  if (bookDataLoading) return <Loader />;
  if (bookDataError) return <div className="text-center text-red-500">⚠️ Failed to load books.</div>;

  return (
    <section className="container mx-auto py-16 px-4 space-y-10">
      {/* Section Header */}
      <div className="text-center space-y-3">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          📖 Recent <span className="text-green-700">Books</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Discover the latest additions to our library collection.
        </p>
      </div>

      {/* Book Cards Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {booksData?.data?.map((book: IBook) => (
          <motion.div key={book._id} whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
            <Card className="group border border-gray-100 hover:border-green-300 hover:shadow-lg transition-all duration-300 bg-white rounded-2xl overflow-hidden">
              <CardHeader className="p-5">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-green-700 line-clamp-2">
                      {book.title}
                    </CardTitle>
                    <p className="text-sm text-gray-500">by {book.author}</p>
                  </div>
                  <Badge
                    variant={book.available ? "secondary" : "destructive"}
                    className={`ml-2 ${
                      book.available
                        ? "bg-green-100 text-green-700 border-green-200"
                        : "bg-red-100 text-red-600 border-red-200"
                    }`}
                  >
                    {book.available ? "Available" : "Unavailable"}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="p-5 space-y-4 border-t border-gray-100">
                <div className="text-sm text-gray-700 space-y-1">
                  <p>
                    <span className="font-medium text-gray-900">Genre:</span> {book.genre}
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">Copies:</span> {book.copies}
                  </p>
                </div>

                {book.description && (
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {book.description.length > 60
                      ? book.description.slice(0, 60) + "..."
                      : book.description}
                  </p>
                )}

                <Button
                  onClick={() => {
                    setSelectedBookId(book._id);
                    setIsModalOpen(true);
                  }}
                  size="sm"
                  className="w-full bg-green-600 text-white hover:bg-green-700 transition-all duration-200"
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Button */}
      <div className="text-center pt-6">
        <Link to="/all-books">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-green-600 text-green-700 hover:bg-green-50 hover:shadow-md transition-all duration-300"
          >
            View All Books
          </Button>
        </Link>
      </div>

      {/* Book Details Modal */}
      <BookDetailsModal bookId={selectedBookId} isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}
