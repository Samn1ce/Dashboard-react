import { useState, useMemo } from "react";
import Data from "../assets/data.json";

function Transactions() {
  const [sortBy, setSortBy] = useState("latest");
  const [category, setCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 10;

  // Filter and sort the transactions
  const filteredAndSortedTransactions = useMemo(() => {
    let processed = [...Data.transactions];

    // First apply search filter
    if (searchQuery) {
      processed = processed.filter((t) =>
        t.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Then apply category filter
    if (category !== "all") {
      processed = processed.filter(
        (t) => t.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Finally apply sorting
    switch (sortBy) {
      case "latest":
        return processed.sort((a, b) => new Date(b.date) - new Date(a.date));
      case "oldest":
        return processed.sort((a, b) => new Date(a.date) - new Date(b.date));
      case "aToZ":
        return processed.sort((a, b) => a.name.localeCompare(b.name));
      case "zToA":
        return processed.sort((a, b) => b.name.localeCompare(a.name));
      case "highest":
        return processed.sort((a, b) => b.amount - a.amount);
      case "lowest":
        return processed.sort((a, b) => a.amount - b.amount);
      default:
        return processed;
    }
  }, [sortBy, category, searchQuery]);

  // Calculate pagination values
  const totalPages = Math.ceil(
    filteredAndSortedTransactions.length / transactionsPerPage
  );
  const startIndex = (currentPage - 1) * transactionsPerPage;
  const endIndex = startIndex + transactionsPerPage;
  const currentTransactions = filteredAndSortedTransactions.slice(
    startIndex,
    endIndex
  );

  // Handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold my-8">Transactions</h1>
      <div className="bg-white w-full rounded-md p-10">
        {/* Search & Dropdowns */}
        <div className="w-full flex justify-between mb-10">
          <div className="w-80 h-10 border border-black rounded-lg p-2">
            <input
              type="text"
              placeholder="Search Transactions"
              className="w-full h-full outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-8">
            <div className="flex justify-center items-center gap-2">
              <p>Sort by</p>
              <select
                className="w-28 h-10 border border-black rounded-md"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
                <option value="aToZ">A to Z</option>
                <option value="zToA">Z to A</option>
                <option value="highest">Highest</option>
                <option value="lowest">Lowest</option>
              </select>
            </div>
            <div className="flex justify-center items-center gap-2">
              <p>Category</p>
              <select
                className="w-40 h-10 border border-black rounded-md px-2"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="all">All Transactions</option>
                <option value="entertainment">Entertainment</option>
                <option value="bills">Bills</option>
                <option value="groceries">Groceries</option>
                <option value="drivingOut">Driving Out</option>
                <option value="transportation">Transportation</option>
              </select>
            </div>
          </div>
        </div>
        {/* Transactions */}
        <div className="w-full">
          <div className="w-full grid grid-cols-3">
            <p className="text-sm font-semibold">Receipt/Sender</p>
            <div className="flex justify-between text-zinc-500 text-sm">
              <p>Category</p>
              <p>Transaction Date</p>
            </div>
            <p className="text-sm text-zinc-500 justify-self-end">Amount</p>
          </div>
          <hr className="my-5" />
          <div className="w-full">
            {currentTransactions.map((t, index) => {
              const date = new Date(t.date);
              const formattedDate = `${date
                .getDate()
                .toString()
                .padStart(2, "0")} ${(date.getMonth() + 1)
                .toString()
                .padStart(2, "0")} ${date.getFullYear()}`;

              return (
                <div key={index} className="w-full">
                  <div className="w-full grid grid-cols-3">
                    <div className="flex">
                      <img src="" alt="" />
                      <p className="font-bold">{t.name}</p>
                    </div>
                    <div className="flex justify-between text-zinc-500">
                      <p>{t.category}</p>
                      <p>{formattedDate}</p>
                    </div>
                    <p
                      className={`font-bold text-lg justify-self-end ${
                        t.amount >= 0 ? "text-green-500" : "text-zinc-800"
                      }`}
                    >
                      {t.amount >= 0 ? "+" : ""}
                      {t.amount.toFixed(2)}
                    </p>
                  </div>
                  <hr className="my-5" />
                </div>
              );
            })}
          </div>
          <div className="flex justify-between gap-2 mt-6">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded-md disabled:opacity-50"
            >
              Prev
            </button>
            <div className="flex gap-4">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 border rounded-md ${
                    currentPage === index + 1 ? "bg-black text-white" : ""
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border rounded-md disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
