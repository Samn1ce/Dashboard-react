import { Outlet, NavLink } from "react-router-dom";
import IconOverview from "./components/icon/IconOverview";
import IconTransaction from "./components/icon/IconTransaction";
import IconBudget from "./components/icon/IconBudget";
import IconPots from "./components/icon/IconPots";
import IconRb from "./components/icon/IconRb";
import IconCancel from "./components/icon/IconCancel";

function App() {
  return (
    <div className="w-full flex bg-gray-200">
      <div className="absolute top-0 z-20 bg-black/70 w-full h-screen flex justify-center items-center">
        <div className="bg-white w-[560px] h-[490px] rounded-md py-5 px-8 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <p className="text-3xl font-bold">Add New Budget</p>
            <IconCancel />
          </div>
          <p className="text-zinc-600">
            Choose a category to set a spending budget. These categories can
            help you monitor spending.
          </p>
          <div className="w-full">
            <div className="w-full">
              <p className="font-semibold text-zinc-500 text-sm">
                Budget Category
              </p>
              <select className="w-full border border-black h-10 rounded-md py-1 px-5">
                <option className="text-xl">Entertainment</option>
              </select>
            </div>
            <div className="w-full">
              <p className="font-semibold text-zinc-500 text-sm">
                Maximum Spend
              </p>
              <div className="w-full border border-black h-10 rounded-md py-1 px-5 flex">
                <input type="text" disabled placeholder="$" className="w-3" />
                <input
                  type="number"
                  className="text-xl flex-grow outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* side nav */}
      <div className="w-1/5 h-screen sticky top-0 z-10 bg-tintDark rounded-r-xl py-5">
        {/* title */}
        <h1 className="font-bold text-3xl mx-8 mb-10 text-zinc-300">FINANCE</h1>
        {/* nav buttons */}
        <nav className="flex flex-col text-xs font-bold">
          {[
            {
              path: "/",
              icon: (isActive) => <IconOverview isActive={isActive} />,
              label: "Overview",
            },
            {
              path: "/transactions",
              icon: (isActive) => <IconTransaction isActive={isActive} />,
              label: "Transactions",
            },
            {
              path: "/budget",
              icon: (isActive) => <IconBudget isActive={isActive} />,
              label: "Budget",
            },
            {
              path: "/pots",
              icon: (isActive) => <IconPots isActive={isActive} />,
              label: "Pots",
            },
            {
              path: "/recurring-bills",
              icon: (isActive) => <IconRb isActive={isActive} />,
              label: "Recurring Bills",
            },
          ].map((item) => (
            <NavLink key={item.path} to={item.path}>
              {({ isActive }) => (
                <div
                  className={`flex gap-7 h-10 max-w-64 rounded-r-lg text-left ${
                    isActive ? "bg-white" : "text-gray-300"
                  }`}
                >
                  <div
                    className={`w-1 h-full ${isActive ? "bg-icons" : ""}`}
                  ></div>
                  {/*  */}
                  <div className="flex items-center gap-4">
                    {item.icon(isActive)}
                    <div className="max-w-full">{item.label}</div>
                  </div>
                </div>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
      {/* content */}
      <div className="w-3/4 mx-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
