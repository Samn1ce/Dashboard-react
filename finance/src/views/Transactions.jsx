import Data from "../assets/data.json";

function Transactions() {
  return (
    <div>
      <h1 className="text-3xl font-bold my-8">Transactions</h1>
      <div className="bg-white w-full rounded-md p-10">
        {/* Search & Dropdowns */}
        <div className="w-full flex justify-between mb-10">
          <div className="w-80 h-10 border border-black rounded-lg">
            <input type="text" className="" />
          </div>
          <div className="flex gap-8">
            <div className="flex justify-center items-center gap-2">
              <p>Sort by</p>
              <select className="w-28 h-10 border border-black rounded-md">
                <option>Latest</option>
                <option>Oldest</option>
                <option>A to Z</option>
                <option>Z to A</option>
                <option>Highest</option>
                <option>Lowest</option>
              </select>
            </div>
            <div className="flex justify-center items-center gap-2">
              <p>Category</p>
              <select className="w-40 h-10 border border-black rounded-md">
                <option>All Transactions</option>
                <option>Entertainment</option>
                <option>Bills</option>
                <option>Groceries</option>
                <option>Driving Out</option>
                <option>Transportation</option>
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
            {Data.transactions.map((t, index) => {
              // Format the date
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
                      <img src="" />
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
        </div>
      </div>
    </div>
  );
}

export default Transactions;
