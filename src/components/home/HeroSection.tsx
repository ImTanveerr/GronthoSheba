import { BookOpen, Plus } from "lucide-react";
import { Link } from "react-router";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white py-20 px-6 text-center">
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-100 via-transparent to-transparent opacity-70"></div>

      <motion.div
        className="space-y-6 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Badge
          variant="outline"
          className="px-4 py-2 text-sm border-green-600 text-green-700 bg-green-50 font-medium shadow-sm"
        >
          📚 Library Management System
        </Badge>

        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
          Organize Your <span className="text-green-700">Library</span> <br />
          <span className="text-green-500">Smarter & Faster</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Effortlessly manage your library — track books, monitor borrowing, and maintain your inventory with just a few clicks.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link to="/all-books">
            <Button
              size="lg"
              className="px-8 py-3 bg-green-700 text-white hover:bg-green-600 hover:shadow-lg transition-all duration-200 flex items-center gap-2"
            >
              <BookOpen className="h-5 w-5" />
              Browse Books
            </Button>
          </Link>

          <Link to="/add-book">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 border-2 border-green-600 text-green-700 hover:bg-green-100 transition-all duration-200 flex items-center gap-2"
            >
              <Plus className="h-5 w-5" />
              Add New Book
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
