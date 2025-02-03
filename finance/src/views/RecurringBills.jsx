import HeaderSec from "../components/HeaderSec";
import Data from "../assets/data.json";

function RecurringBills() {
  return (
    <div>
      <HeaderSec headerText="Reccuring Bills" buttonDisplay="none" />
      <div className="flex gap-4 w-full">
        <div className="w-1/3 flex flex-col gap-4">
          <div className="bg-black w-full h-40 rounded-md p-5 text-zinc-200 flex flex-col justify-end">
            <p className="text-sm font-semibold">Total Bills</p>
            <p className="text-3xl font-bold">$384.98</p>
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

        <div className="bg-white mb-3 w-8/12 rounded-md p-5">
          <div className="flex justify-between">
            <div className="w-80 h-10 border border-black rounded-lg p-2">
              <input
                type="text"
                placeholder="Search bills"
                className="w-full h-full outline-none"
              />
            </div>
            <div className="flex justify-center items-center gap-2">
              <p>Sort by</p>
              <select className="w-28 h-10 border border-black rounded-md">
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
            <div className="grid grid-cols-[7fr_3fr_3fr] text-zinc-400 text-sm px-3">
              <p>Bill Title</p>
              <p>Due Date</p>
              <p className="justify-self-end">Amount</p>
            </div>
            <hr className="my-3" />
            {Data.transactions.map((r, index) =>
              r.recurring ? (
                <div key={index}>
                  <div className="grid grid-cols-[7fr_3fr_3fr] px-3 text-lg items-center">
                    <p className="font-bold text-black">{r.name}</p>
                    <p className="text-sm text-green-600">Monthly-2nd</p>
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
