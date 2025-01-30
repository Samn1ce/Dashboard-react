import { useMemo } from "react";
import { format } from "date-fns";
import { NavLink } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Data from "../assets/data.json";
import IconPots from "../components/icon/IconPots";

ChartJS.register(ArcElement, Tooltip, Legend);

function Overview() {
  const doughnutData = {
    labels: Data.budgets.map((b) => b.category), // Categories as labels
    datasets: [
      {
        data: Data.budgets.map((b) => b.spent), // Spent amounts as data
        backgroundColor: Data.budgets.map((b) => b.theme), // Theme colors for each category
        hoverBackgroundColor: Data.budgets.map((b) => b.theme), // Optional hover effect
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: false, // Disable tooltipsfr
      },
    },
  };
  const totalSpent = Data.budgets.reduce((sum, b) => sum + b.spent, 0);
  const totalMaximum = Data.budgets.reduce((sum, b) => sum + b.maximum, 0);

  const sorted = "latest";
  const show = 5;

  const sortedTransactions = useMemo(() => {
    const done = [...Data.transactions];

    if (sorted === "latest") {
      return done.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else {
      return;
    }
  }, [sorted]);

  const startIndex = 0 * show;
  const endIndex = startIndex + show;
  const currentTransactions = sortedTransactions.slice(startIndex, endIndex);

  const totalPots = Data.pots.reduce((sum, item) => sum + item.total, 0);

  const showPots = 4;

  const currentPots = Data.pots.slice(0, showPots);

  return (
    <div className="w-full">
      {/* TITLE */}
      <h1 className="text-3xl my-8 font-bold">Overview</h1>
      {/* PRICES div */}
      <div className="flex justify-between items-center w-full gap-4">
        <div className="rounded-lg flex flex-col gap-2 bg-tintDark text-zinc-300 p-5 w-1/6">
          <h3 className="text-xs text-gray-400 font-bold">Current Balance</h3>
          <h1 className="text-3xl font-semibold">
            ${Data.balance.current.toFixed(2)}
          </h1>
        </div>
        <div className="rounded-lg flex flex-col gap-2 bg-white text-black p-5 w-1/6">
          <h3 className="text-xs text-gray-400 font-bold">Income</h3>
          <h1 className="text-3xl font-semibold">
            ${Data.balance.income.toFixed(2)}
          </h1>
        </div>
        <div className="rounded-lg flex flex-col gap-2 bg-white text-black p-5 w-1/6">
          <h3 className="text-xs text-gray-400 font-bold">Expenses</h3>
          <h1 className="text-3xl font-semibold">
            ${Data.balance.expenses.toFixed(2)}
          </h1>
        </div>
      </div>
      {/* TABS OVERVIEW */}
      {/* grid-cols-[7fr,5fr] */}
      <div className="w-full flex flex-wrap gap-4 border-2 my-5">
        {/* LHS */}
        <div className="w-7/12 flex flex-col gap-4">
          {/* POTS tab */}
          <div className="p-5 grid gap-4 rounded-lg h-44 bg-white">
            <div className="flex justify-between">
              <h3 className="text-sm font-bold">Pots</h3>
              <div className="text-xs font-semibold text-zinc-400">
                <NavLink to="/pots">See Details</NavLink>
              </div>
            </div>
            <div className="flex gap-4 max-w-[500px]">
              <div className="rounded-lg flex gap-4 items-center bg-gray-200 text-black p-5 w-1/2">
                <IconPots />
                <div>
                  <h3 className="text-xs text-gray-400 font-bold">
                    Total Saved
                  </h3>
                  <h1 className="text-3xl font-semibold">${totalPots}</h1>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {currentPots.map((p, index) => (
                  <div key={index} className="flex items-center justify-start">
                    <div
                      className="w-1 h-10 border-green-500 border-2 rounded-lg mr-3"
                      style={{ borderColor: p.theme }}
                    ></div>
                    <div>
                      <h6 className="text-xs font-bold text-zinc-400">
                        {p.name}
                      </h6>
                      <h4 className="text-base font-bold">${p.total}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* TRANSACTION grid */}
          <div className="p-5 grid gap-4 rounded-lg bg-white">
            <div className="flex justify-between">
              <h3 className="text-sm font-bold">Transactions</h3>
              <div className="text-xs font-semibold text-zinc-400">
                <NavLink to="/transactions">See Details</NavLink>
              </div>
            </div>
            {/* TRANSACTION LIST */}
            <div className="">
              {currentTransactions.map((c, index) => {
                const formattedDate = format(new Date(c.date), "dd/MM/yyyy");
                return (
                  <div key={index}>
                    <div className="flex justify-between items-center py-3">
                      <h6 className="text-xs font-bold">{c.name}</h6>
                      <div className="text-right flex flex-col gap-2">
                        <div
                          className={`text-sm font-bold ${
                            c.amount >= 0 ? "text-green-500" : "text-zinc-800"
                          }`}
                        >
                          {c.amount >= 0 ? "+" : ""}
                          {c.amount.toFixed(2)}
                        </div>
                        <p className="text-xs font-semibold text-zinc-400">
                          {formattedDate}
                        </p>
                      </div>
                    </div>
                    <hr />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* RHS */}
        <div className="flex flex-col gap-4 w-2/5">
          {/* BUDGETS grid */}
          <div className="p-5 grid gap-4 rounded-lg bg-white">
            <div className="flex justify-between">
              <h3 className="text-sm font-bold">Budgets</h3>
              <div className="text-xs font-semibold text-zinc-400">
                <NavLink to="/budget">See Details</NavLink>
              </div>
            </div>
            {/* PIE CHART & LIST */}
            <div className="flex gap-4 max-w-[500px]">
              <div className="flex mx-auto justify-center my-8">
                {/* PIE CHART */}
                <div className="relative w-60 h-60">
                  <Doughnut data={doughnutData} options={doughnutOptions} />
                  <div className="absolute transform top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-44 h-44 rounded-full bg-zinc-200/25 flex justify-center items-center">
                    <div className="w-36 h-36 rounded-full bg-white flex flex-col justify-center items-center">
                      <div className="font-bold text-3xl">${totalSpent}</div>
                      <span className="text-sm text-zinc-500">
                        of ${totalMaximum} limit
                      </span>
                    </div>
                  </div>
                </div>
                {/* LIST */}
                <div className="grid gap-4">
                  {doughnutData.labels.map((label, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-start"
                    >
                      <div
                        className="w-1 h-10 border-2 rounded-lg mx-5"
                        style={{
                          borderColor:
                            doughnutData.datasets[0].backgroundColor[index],
                        }}
                      ></div>
                      <div>
                        <p className="text-xs font-bold text-zinc-400">
                          {label}
                        </p>
                        <p className="text-base font-bold">
                          ${doughnutData.datasets[0].data[index]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* RECURRING BILLS tab */}
          <div className="p-5 grid gap-4 rounded-lg bg-white">
            <div className="flex justify-between">
              <h3 className="text-sm font-bold">Recurring Bills</h3>
              <div className="text-xs font-semibold text-zinc-400">
                <NavLink to="/recurring-bills">See Details</NavLink>
              </div>
            </div>
            {/*  */}
            <div>
              <div className="flex w-full rounded-lg">
                <div className="bg-green-500 w-[1%] rounded-l-md z-10"></div>
                <div className="bg-gray-200 p-3 flex justify-between w-[99%] rounded-lg">
                  <p>Paid Bills</p>
                  <p>$190.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
