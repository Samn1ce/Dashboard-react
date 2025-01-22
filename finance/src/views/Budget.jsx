import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Data from "../assets/data.json";

ChartJS.register(ArcElement, Tooltip, Legend);
function Budget() {
  // Map JSON data to the chart format
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

  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center my-8">
        <p className="text-3xl font-bold">Budget</p>
        <button className="py-2 px-4 rounded-md bg-black text-white">
          +Add New Budget
        </button>
      </div>
      <div className="w-full flex gap-4 border-black border-2">
        <div className="w-1/2 bg-white h-full rounded-2xl p-8">
          <div className="w-full flex justify-center items-center mb-8">
            <div className="w-60 h-60 relative">
              <Doughnut data={doughnutData} options={doughnutOptions} />
              <div className="absolute transform top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2  w-44 h-44 rounded-full bg-zinc-200/25 flex justify-center items-center">
                <div className="w-36 h-36 rounded-full bg-white flex flex-col justify-center items-center">
                  <div className="font-bold text-3xl">${totalSpent}</div>
                  <span className="text-sm text-zinc-500">
                    of ${totalMaximum} limit
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-black text-2xl font-bold mb-5">
              Spending Summary
            </p>
            {Data.budgets.map((b) => (
              <>
                <div className="w-full flex justify-between items-center">
                  <div className="flex gap-4 justify-center items-center">
                    <p
                      className={`w-1 h-6 rounded-lg`}
                      style={{ backgroundColor: b.theme }}
                    ></p>
                    <p className="text-xl">{b.category}</p>
                  </div>
                  <div>
                    <span className="font-bold text-lg">
                      ${b.spent.toFixed(2)}{" "}
                    </span>
                    Of
                    <span> ${b.maximum.toFixed(2)}</span>
                  </div>
                </div>
                <hr className="my-5" />
              </>
            ))}
          </div>
        </div>
        <div className="w-1/2 bg-white rounded-2xl"></div>
      </div>
    </div>
  );
}

export default Budget;
