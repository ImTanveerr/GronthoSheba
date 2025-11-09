import { motion } from "framer-motion";
import { BookForm } from "@/components/shared/BookForm";

export default function AddBooks() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      {/* Header Section */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          📚 Add a New Book
        </h1>
        <p className="text-gray-600 max-w-md mx-auto">
          Fill out the form below to add a new book to the library database.
        </p>
      </motion.div>

      {/* Form Card */}
      <motion.div
        className="w-full max-w-3xl bg-white rounded-2xl shadow-md border border-gray-100 p-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <BookForm method="add" />
      </motion.div>
    </div>
  );
}
