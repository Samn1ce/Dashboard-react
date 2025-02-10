import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Data from "../assets/data.json";
import HeaderSec from "../components/HeaderSec";
import MenuDropDown from "../components/MenuDropDown";

ChartJS.register(ArcElement, Tooltip, Legend);

function Budget() {
  const {
    setModal,
    setAddModalEdit,
    setDeleteModal,
    setBudgetToEdit,
    setaddModalType,
    setDropdownType,
    dropdownType,
    setModalEditType,
  } = useOutletContext();

  // Rest of your existing setup code remains the same
  const doughnutData = {
    labels: Data.budgets.map((b) => b.category),
    datasets: [
      {
        data: Data.budgets.map((b) => b.spent),
        backgroundColor: Data.budgets.map((b) => b.theme),
        hoverBackgroundColor: Data.budgets.map((b) => b.theme),
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  const totalSpent = Data.budgets.reduce((sum, b) => sum + b.spent, 0);
  const totalMaximum = Data.budgets.reduce((sum, b) => sum + b.maximum, 0);

  const getLatestTransactions = (category) => {
    const categoryTransactions = Data.transactions.filter(
      (t) => t.category === category
    );
    return categoryTransactions
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);
  };

  useEffect(() => {
    setDropdownType("budgets");
    setModalEditType("budgets");
  }, [setDropdownType, setModalEditType]);

  return (
    <div className="w-full mx-auto max-w-7xl">
      <HeaderSec
        setModal={setModal}
        setaddModalType={setaddModalType}
        headerText="Budget"
        buttonText="+Add New Budget"
        buttonDisplay="block"
        modalForAdd="budget"
      />
      <div className="w-full flex flex-col lg:flex-row gap-4">
        {/* Left side with doughnut chart remains the same */}
        <div className="lg:w-1/2 flex flex-col justify-center lg:justify-normal items-center lg:items-start md:flex-row lg:flex-col bg-white h-full rounded-2xl p-8 gap-8 lg:gap-0">
          <div className="lg:w-full flex justify-center items-center lg:mb-8">
            <div className="w-60 h-60 relative">
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
          </div>
          <div className="w-full">
            <p className="text-black text-2xl font-bold mb-5">
              Spending Summary
            </p>
            {Data.budgets.map((b, index) => (
              <div key={index}>
                <div className="w-full flex justify-between items-center">
                  <div className="flex gap-4 justify-center items-center">
                    <p
                      className="w-1 h-6 rounded-lg"
                      style={{ backgroundColor: b.theme }}
                    ></p>
                    <p className="text-sm md:text-xl">{b.category}</p>
                  </div>
                  <div>
                    <span className="font-bold text-sm md:text-lg">
                      ${b.spent.toFixed(2)}{" "}
                    </span>
                    Of
                    <span> ${b.maximum.toFixed(2)}</span>
                  </div>
                </div>
                <hr className="my-5" />
              </div>
            ))}
          </div>
        </div>

        {/* Right side with budget cards */}
        <div className="lg:w-1/2">
          {Data.budgets.map((b, index) => (
            <div key={index} className="bg-white w-full rounded-md p-8 mb-5">
              <div className="flex flex-col gap-4 mb-4">
                <div className="flex justify-between items-center w-full relative">
                  <div className="flex justify-center items-center gap-4">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: b.theme }}
                    ></div>
                    <p className="text-2xl font-bold">{b.category}</p>
                  </div>
                  <MenuDropDown
                    setAddModalEdit={setAddModalEdit}
                    setDeleteModal={setDeleteModal}
                    setBudgetToEdit={setBudgetToEdit}
                    index={index}
                    b={b}
                    p={null}
                    setDropdownType={setDropdownType}
                    dropdownType={dropdownType}
                  />
                </div>
                <p className="text-gray-600">
                  Maximum Of ${b.maximum.toFixed(2)}
                </p>
                <div className="w-full h-8 bg-zinc-200 rounded-md p-1 overflow-hidden">
                  <div
                    className="h-full rounded-md"
                    style={{
                      backgroundColor: b.theme,
                      width: `${(b.spent / b.maximum) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="w-full grid grid-cols-2">
                <div className="flex gap-4">
                  <div
                    className="w-1 rounded-full"
                    style={{ backgroundColor: b.theme }}
                  ></div>
                  <div className="flex flex-col justify-between">
                    <p>Spent</p>
                    <p>${b.spent.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 bg-zinc-200 rounded-full"></div>
                  <div className="flex flex-col justify-between">
                    <p>Remaining</p>
                    <p>${Math.max(b.maximum - b.spent, 0).toFixed(2)}</p>
                  </div>
                </div>
              </div>
              <div className="w-full p-5 rounded-lg bg-zinc-200 mt-5">
                <div className="flex justify-between">
                  <h3 className="text-base font-bold">Latest Spending</h3>
                  <p className="text-sm font-semibold text-zinc-400">See All</p>
                </div>
                <div className="mt-5">
                  {getLatestTransactions(b.category).map((t, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center">
                        <p className="font-semibold">{t.name}</p>
                        <div className="text-sm text-right">
                          <p className="font-bold">${t.amount.toFixed(2)}</p>
                          <p className="text-zinc-500">
                            {new Date(t.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <hr className="my-2 border-0.5 border-zinc-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Budget;
