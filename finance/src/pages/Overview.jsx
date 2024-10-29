import { NavLink } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function Overview() {

    // Pie chart data and options
    const pieData = {
        labels: ["New Laptop", "Savings", "Gift", "Concert Ticket"],
        datasets: [
            {
                label: "Expenses",
                data: [150, 250, 100, 75],
                backgroundColor: ["#4CAF50", "#FF6384", "#36A2EB", "#FFCE56"],
                hoverBackgroundColor: ["#45a049", "#ff5a5f", "#329ddf", "#ffbb33"],
            },
        ],
    };

    const pieOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Hide the legend
            },
            tooltip: {
                enabled: false, // Disable tooltips
            },
        },
    };


    return (
        <div className="w-full">
            {/* TITLE */}
            <h1 className="text-3xl my-8 font-bold">Overview</h1>
            {/* PRICES div */}
            <div className="flex justify-between items-center w-full gap-4">
                <div className="rounded-lg flex flex-col gap-2 bg-tintDark text-zinc-300 p-5 w-1/6">
                    <h3 className="text-xs text-gray-400 font-bold">Current Balance</h3>
                    <h1 className="text-3xl font-semibold">$4,836.00</h1>
                </div>
                <div className="rounded-lg flex flex-col gap-2 bg-white text-black p-5 w-1/6">
                    <h3 className="text-xs text-gray-400 font-bold">Income</h3>
                    <h1 className="text-3xl font-semibold">$3,814.25</h1>
                </div>
                <div className="rounded-lg flex flex-col gap-2 bg-white text-black p-5 w-1/6">
                    <h3 className="text-xs text-gray-400 font-bold">Expenses</h3>
                    <h1 className="text-3xl font-semibold">$1,750.50</h1>
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
                            <div className="rounded-lg flex gap-4 items-center gap-2 bg-gray-200 text-black p-5 w-1/2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="26"
                                    height="26"
                                    fill="currentColor"
                                    class="bi bi-stack"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.6.6 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.6.6 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.6.6 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535z" />
                                    <path
                                        d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.6.6 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0z" />
                                </svg>
                                <div>
                                    <h3 className="text-xs text-gray-400 font-bold">Total Saved</h3>
                                    <h1 className="text-3xl font-semibold">$850</h1>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="flex items-center justify-start">
                                    <div className="w-1 h-10 border-green-500 border-2 rounded-lg mr-3"></div>
                                    <div>
                                        <h6 className="text-xs font-bold text-zinc-400">Savings</h6>
                                        <h4 className="text-base font-bold">$150</h4>
                                    </div>
                                </div>
                                <div className="flex items-center justify-start">
                                    <div className="w-1 h-10 border-blue-500 border-2 rounded-lg mx-5"></div>
                                    <div>
                                        <h6 className="text-xs font-bold text-zinc-400">Gift</h6>
                                        <h4 className="text-base font-bold">$150</h4>
                                    </div>
                                </div>
                                <div className="flex items-center justify-start">
                                    <div className="w-1 h-10 border-red-500 border-2 rounded-lg mr-3"></div>
                                    <div>
                                        <h6 className="text-xs font-bold text-zinc-400">Concert Ticket</h6>
                                        <h4 className="text-base font-bold">$150</h4>
                                    </div>
                                </div>
                                <div className="flex items-center justify-start">
                                    <div className="w-1 h-10 border-green-300 border-2 rounded-lg mx-5"></div>
                                    <div>
                                        <h6 className="text-xs font-bold text-zinc-400">New Laptop</h6>
                                        <h4 className="text-base font-bold">$150</h4>
                                    </div>
                                </div>
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
                        <div className="flex justify-between items-center">
                            <h6 className="text-xs font-bold">Emma Richardson</h6>
                            <div className="text-right">
                                <div className="text-sm font-bold text-green-500">+$75.50</div>
                                <p className="text-xs font-semibold text-zinc-400">{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="flex justify-between items-center">
                            <h6 className="text-xs font-bold">Emma Richardson</h6>
                            <div className="text-right">
                                <div className="text-sm font-bold text-green-500">+$75.50</div>
                                <p className="text-xs font-semibold text-zinc-400">{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="flex justify-between items-center">
                            <h6 className="text-xs font-bold">Emma Richardson</h6>
                            <div className="text-right">
                                <div className="text-sm font-bold text-green-500">+$75.50</div>
                                <p className="text-xs font-semibold text-zinc-400">{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                            </div>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center">
                            <h6 className="text-xs font-bold">Emma Richardson</h6>
                            <div className="text-right">
                                <div className="text-sm font-bold text-green-500">+$75.50</div>
                                <p className="text-xs font-semibold text-zinc-400">{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                            </div>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center">
                            <h6 className="text-xs font-bold">Emma Richardson</h6>
                            <div className="text-right">
                                <div className="text-sm font-bold text-green-500">+$75.50</div>
                                <p className="text-xs font-semibold text-zinc-400">{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                            </div>
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
                                <div className="relative w-52 h-52">
                                    <Pie data={pieData} options={pieOptions} />
                                    <div className="text-3xl font-bold absolute inset-0 w-3/4 h-3/4 border-2 bg-white m-auto rounded-full flex justify-center items-center"> ${pieData.datasets[0].data.reduce((acc, value) => acc + value, 0)}</div>
                                </div>
                                {/* LIST */}
                                <div className="grid gap-4">
                                    {pieData.labels.map((label, index) => (
                                        <div key={index} className="flex items-center justify-start">
                                            <div
                                                className="w-1 h-10 border-2 rounded-lg mx-5"
                                                style={{ borderColor: pieData.datasets[0].backgroundColor[index] }}
                                            ></div>
                                            <div>
                                                <p className="text-xs font-bold text-zinc-400">{label}</p>
                                                <p className="text-base font-bold">${pieData.datasets[0].data[index]}</p>
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

export default Overview