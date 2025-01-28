import IconCancel from "./icon/IconCancel";
import Data from "../assets/data.json";

// eslint-disable-next-line react/prop-types
function NewBudget({ addNewBudget, setAddNewBudget }) {
  return (
    <div
      className={`absolute top-0 z-20 bg-black/70 w-full h-screen justify-center items-center ${
        addNewBudget ? "flex" : "hidden"
      }`}
    >
      <div className="bg-white w-[560px] rounded-md py-5 px-8 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p className="text-3xl font-bold">Add New Budget</p>
          <IconCancel onClick={() => setAddNewBudget(false)} />
        </div>
        <p className="text-zinc-600">
          Choose a category to set a spending budget. These categories can help
          you monitor spending.
        </p>
        <div className="w-full flex flex-col gap-4">
          <div className="w-full">
            <p className="font-semibold text-zinc-500 text-sm">
              Budget Category
            </p>
            <select className="w-full border border-black h-10 rounded-md py-1 px-5">
              {Data.budgets.map((b, index) => (
                <option key={index} className="text-xl">
                  {b.category}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <p className="font-semibold text-zinc-500 text-sm">Maximum Spend</p>
            <div className="w-full border border-black h-10 rounded-md py-1 px-5 flex">
              <input type="text" disabled placeholder="$" className="w-3" />
              <input type="number" className="text-xl flex-grow outline-none" />
            </div>
          </div>
          <div className="w-full">
            <p className="font-semibold text-zinc-500 text-sm">
              Budget Category
            </p>
            <select className="w-full border border-black h-10 rounded-md py-1 px-5">
              {Data.budgets.map((b, index) => (
                <option key={index} className="text-xl flex">
                  <div
                    className="h-5 w-5 rounded-full bg-black"
                    style={{ backgroundColor: b.theme }}
                  ></div>
                  <p>{b.theme}</p>
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={() => setAddNewBudget(false)}
            className="bg-zinc-900 w-full p-3 rounded-md font-semibold text-zinc-200"
          >
            Add Budget
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewBudget;
