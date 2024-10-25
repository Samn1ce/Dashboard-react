function Overview() {

    return(
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
            <div className="w-full grid grid-cols-[7fr,5fr] gap-4 border-2 my-5">
                <div className="p-5 grid gap-4 rounded-lg bg-white">
                    <div className="flex justify-between">
                        <h3 className="text-sm font-bold">Pots</h3>
                        <div className="text-xs font-semibold text-zinc-400">
                            <p>See Details</p>
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
                {/*  */}
                <div className="border-2 border-red-500">

                </div>
            </div>
        </div>
    );

}

export default Overview