import { useState, useMemo, useEffect } from "react";
import Data from "../utils/data.json";
import IconSort from "../components/icon/IconSort";
import IconFilter from "../components/icon/IconFilter";

function Transactions() {
  const [sortBy, setSortBy] = useState("latest");
  const [category, setCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 10;

  // 1. Add mobile detection state
  const [isMobile, setIsMobile] = useState(false);

  // 2. Add resize listener
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 3. Create dynamic page number generator
  const getPagesToShow = () => {
    if (!isMobile) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages = [];

    // Add previous page if exists
    if (currentPage > 1) {
      pages.push(currentPage - 1);
    }

    // Always add current page
    pages.push(currentPage);

    // Add ellipsis and last page if needed
    if (currentPage < totalPages) {
      if (currentPage + 1 < totalPages) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages;
  };

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

  const [openCategory, setOpenCategory] = useState(false);
  const [openSort, setOpenSort] = useState(false);

  return (
    <div className="w-full mx-auto max-w-7xl">
      <h1 className="text-3xl font-bold my-8">Transactions</h1>
      <div className="bg-white w-full rounded-md p-3 md:p-10">
        {/* Search & Dropdowns */}
        <div className="w-full flex justify-between items-center mb-10 relative">
          <div className="lg:w-80 h-10 border border-black rounded-lg p-2">
            <input
              type="text"
              placeholder="Search Transactions"
              className="w-full h-full outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <IconSort
            onClick={() => {
              setOpenSort(!openSort), setOpenCategory(!openCategory);
            }}
          />
          <div
            className={`${
              openSort ? "flex" : "hidden"
            } absolute top-12 right-16 bg-white w-24 text-xl flex-col justify-center rounded-md border border-zinc-200 shadow-lg p-2`}
          >
            <div onClick={() => setSortBy("latest")}>Latest</div>
            <hr className="my-2" />
            <div onClick={() => setSortBy("oldest")}>Oldest</div>
            <hr className="my-2" />
            <div onClick={() => setSortBy("aToZ")}>A to Z</div>
            <hr className="my-2" />
            <div onClick={() => setSortBy("zToA")}>Z to A</div>
            <hr className="my-2" />
            <div onClick={() => setSortBy("highest")}>Highest</div>
            <hr className="my-2" />
            <div onClick={() => setSortBy("lowest")}>Lowest</div>
          </div>
          <IconFilter
            onClick={() => {
              setOpenCategory(!openCategory), setOpenCategory(!openCategory);
            }}
          />
          <div
            className={`${
              openCategory ? "flex" : "hidden"
            } absolute top-12 right-0 bg-white w-40 text-xl flex-col justify-center rounded-md border border-zinc-200 shadow-lg p-2`}
          >
            <div onClick={() => setCategory("all")}>All Transactions</div>
            <hr className="my-2" />
            <div onClick={() => setCategory("entertainment")}>
              Entertainment
            </div>
            <hr className="my-2" />
            <div onClick={() => setCategory("bills")}>Bills</div>
            <hr className="my-2" />
            <div onClick={() => setCategory("groceries")}>Groceries</div>
            <hr className="my-2" />
            <div onClick={() => setCategory("drivingOut")}>Driving Out</div>
            <hr className="my-2" />
            <div onClick={() => setCategory("transportation")}>
              Transportation
            </div>
          </div>
          <div className="flex gap-8">
            <div className="hidden md:flex justify-center items-center gap-2">
              <p className="text-xs lg:text-base">Sort by</p>
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
            <div className="hidden md:flex justify-center items-center gap-2">
              <p className="text-xs lg:text-base">Category</p>
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
          <div className="w-full grid grid-cols-2 md:grid-cols-[7fr_5fr_4fr] lg:grid-cols-3">
            <p className="text-sm font-semibold">Receipt/Sender</p>
            <div className="hidden md:flex justify-between text-zinc-500 text-sm">
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
                  <div className="w-full grid grid-cols-[7fr_3fr] md:grid-cols-[7fr_5fr_4fr] lg:grid-cols-3">
                    <div className="flex gap-4 items-center">
                      <img
                        src={t.avatar}
                        alt=""
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="font-bold text-sm md:text-base">
                          {t.name}
                        </p>
                        <p className="text-xs md:hidden">{t.category}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex justify-between items-center text-zinc-500">
                      <p>{t.category}</p>
                      <p>{formattedDate}</p>
                    </div>
                    <div className="justify-self-end">
                      <p
                        className={`font-bold text-lg justify-self-end ${
                          t.amount >= 0 ? "text-green-500" : "text-zinc-800"
                        }`}
                      >
                        {t.amount >= 0 ? "+" : ""}
                        {t.amount.toFixed(2)}
                      </p>
                      <p className="block md:hidden text-xs justify-self-end">
                        {formattedDate}
                      </p>
                    </div>
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
              {getPagesToShow().map((page, index) =>
                typeof page === "number" ? (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 border rounded-md ${
                      currentPage === page ? "bg-black text-white" : ""
                    }`}
                  >
                    {page}
                  </button>
                ) : (
                  <span key={`ellipsis-${index}`} className="px-2">
                    ...
                  </span>
                )
              )}
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
