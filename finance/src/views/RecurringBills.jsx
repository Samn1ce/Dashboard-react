import { useMemo, useState } from "react";
import HeaderSec from "../components/HeaderSec";
import Data from "../assets/data.json";
import IconSort from "../components/icon/IconSort";

function RecurringBills() {
  const getFormattedDate = (dateString) => {
    // Extract the day from the ISO date string
    const date = new Date(dateString);
    const day = date.getDate();

    // Function to determine the ordinal suffix (st, nd, rd, th)
    const ordinalSuffix = (d) => {
      if (d > 3 && d < 21) return "th"; // Covers 11th-19th
      switch (d % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `Monthly-${day}${ordinalSuffix(day)}`;
  };

  const totalRecurred = Data.transactions.reduce(
    (sum, b) => sum + b.recurring,
    0
  );

  const [sortBy, setSortBy] = useState("latest");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAndSortedRecurred = useMemo(() => {
    let processed = [...Data.transactions];

    // First apply search filter
    if (searchQuery) {
      processed = processed.filter((t) =>
        t.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Then apply category filter

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
        return processed.sort((a, b) => a.amount - b.amount);
      case "lowest":
        return processed.sort((a, b) => b.amount - a.amount);
      default:
        return processed;
    }
  }, [sortBy, searchQuery]);

  const [openSort, setOpenSort] = useState(false);

  return (
    <div className="max-w-7xl mx-auto">
      <HeaderSec headerText="Reccuring Bills" buttonDisplay="none" />
      <div className="flex flex-col lg:flex-row gap-4 w-full">
        <div className="w-full lg:w-1/3 flex flex-col md:flex-row lg:flex-col gap-4">
          <div className="bg-black w-full h-40 rounded-md p-5 text-zinc-200 flex flex-col justify-end">
            <p className="text-sm font-semibold">Total Bills</p>
            <p className="text-3xl font-bold">${totalRecurred}</p>
          </div>
          <div className="bg-white w-full h-40 rounded-md p-5 flex flex-col justify-end">
            <p className="font-semibold mb-2">Summary</p>
            <div className="flex justify-between">
              <p className="text-zinc-500 text-sm">Paid Bills</p>
              <p className="text-black font-semibold text-sm">
                4 {"($190.00)"}
              </p>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between">
              <p className="text-zinc-500 text-sm">Paid Bills</p>
              <p className="text-black font-semibold text-sm">
                4 {"($190.00)"}
              </p>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between">
              <p className="text-zinc-500 text-sm">Paid Bills</p>
              <p className="text-black font-semibold text-sm">
                4 {"($190.00)"}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white mb-3 w-full lg:w-8/12 rounded-md p-5">
          <div className="flex justify-between items-center gap-4 md:gap-0 relative">
            <div className="w-80 h-10 border border-black rounded-lg p-2">
              <input
                type="text"
                placeholder="Search bills"
                className="w-full h-full outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <IconSort onClick={() => setOpenSort(!openSort)} />
            <div
              className={`${
                openSort ? "block" : "hidden"
              } absolute top-10 right-0 bg-white w-24 text-xl justify-center items-center rounded-md border border-zinc-200 shadow-lg p-2`}
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
            <div className="hidden md:flex justify-center items-center gap-2">
              <p className="block">Sort by</p>
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value), setOpenSort(false);
                }}
                className="w-28 h-10 border border-black rounded-md"
              >
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
                <option value="aToZ">A to Z</option>
                <option value="zToA">Z to A</option>
                <option value="highest">Highest</option>
                <option value="lowest">Lowest</option>
              </select>
            </div>
          </div>
          <div className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-[7fr_3fr_3fr] text-zinc-400 text-sm px-3">
              <p>Bill Title</p>
              <p className="hidden md:block">Due Date</p>
              <p className="justify-self-end">Amount</p>
            </div>
            <hr className="my-3" />
            {filteredAndSortedRecurred.map((r, index) =>
              r.recurring ? (
                <div key={index}>
                  <div className="grid grid-cols-2 md:grid-cols-[7fr_3fr_3fr] px-3 text-lg items-center">
                    <div>
                      <p className="font-bold text-black">{r.name}</p>
                      <p className="block md:hidden text-xs text-green-600">
                        {getFormattedDate(r.date)}
                      </p>
                    </div>
                    <p className="text-sm text-green-600 hidden md:block">
                      {getFormattedDate(r.date)}
                    </p>
                    <p className="justify-self-end text-black font-bold">
                      ${r.amount}
                    </p>
                  </div>
                  <hr className="my-3" />
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecurringBills;
