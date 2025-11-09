import Loader from "@/components/shared/Loader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useBorrowBooksSummaryQuery } from "@/redux/features/borrow-book/borrowBookApi";
import type { IBook } from "@/types/book.type";
import { Book, Hash, User } from "lucide-react";

interface BorrowBookSummaryItem {
  totalQuantity: number;
  book: IBook;
}

export default function BorrowBookSummary() {
  const { data: borrowBookData, isLoading } = useBorrowBooksSummaryQuery(undefined);

  if (isLoading) return <Loader />;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Borrowed Books Summary</h1>
        <p className="text-gray-600 max-w-xl">
          Overview of all borrowed books, including the total quantity of each book. Hover over cards for more details.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {borrowBookData?.data?.map((item: BorrowBookSummaryItem) => (
          <Card
            key={item.book.isbn}
            className="hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 border border-gray-100 rounded-lg"
          >
            {/* Card Header */}
            <CardHeader>
              <div className="flex justify-between items-start gap-3">
                <div className="min-w-0 flex-1">
                  <CardTitle className="text-lg font-semibold line-clamp-2">{item.book.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 text-gray-500 text-sm truncate">
                    <User className="h-4 w-4" />
                    {item.book.author}
                  </CardDescription>
                </div>
                <Badge variant="default" className="flex-shrink-0 font-semibold px-2 py-1">
                  {item.totalQuantity} copies
                </Badge>
              </div>
            </CardHeader>

            {/* Card Content */}
            <CardContent className="space-y-3 pt-2">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Book className="h-4 w-4" />
                  <span className="font-medium">Genre:</span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {item.book.genre.replace("_", " ")}
                </Badge>
              </div>

              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Hash className="h-4 w-4 mt-0.5" />
                  <span className="font-medium">ISBN:</span>
                </div>
                <span className="text-sm text-gray-500 font-mono break-all text-right">
                  {item.book.isbn}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
