import { Outlet, NavLink } from "react-router-dom";
import Overview from "./pages/Overview";
import Transactions from "./pages/Transactions";

function App() {

  return (

      <div className="w-full flex gap-8 bg-gray-200">
        {/* side nav */}
        <div className="w-1/5 h-screen sticky top-0 bg-tintDark rounded-r-xl py-5">
          {/* title */}
          <h1 className="font-bold text-3xl mx-8 mb-10 text-zinc-300">FINANCE</h1>
          {/* nav buttons */}
          <div className="flex flex-col text-xs font-bold">
            {/* OVERVIEW button */}
            <NavLink
              to="/"
              className={({ isActive }) => {
                return `flex gap-7 h-10 max-w-64 rounded-r-lg text-left ${isActive ? "bg-white" : "text-gray-300"}`
              }}
            >
              {({ isActive }) => (
                <>
                  {/* left green fader */}
                  <div className={`w-1 h-full ${isActive ? "bg-icons" : ""}`}></div>
                  {/*  */}
                  <div className="flex items-center gap-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      fill={isActive ? "#2D7979" : "currentColor"}
                      class="bi bi-house-door-fill" 
                      viewBox="0 0 16 16"
                    >
                      <path 
                        d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"
                      />
                    </svg>
                    <div className="max-w-full">Overview</div>
                  </div>
                </>
              )}
            </NavLink>
            {/* 2 TRANSACTION buttons */}
            <NavLink
              to="/transactions"
              className={({ isActive }) => {
                return `flex gap-7 h-10 max-w-64 rounded-r-lg text-left ${isActive ? "bg-white" : "text-gray-300"}`
              }}
            >
              {({ isActive }) => (
                <>
                  {/* left green fader */}
                  <div className={`w-1 h-full ${isActive ? "bg-icons" : ""}`}></div>
                  {/*  */}
                  <div className="flex items-center gap-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" height="16" 
                      fill={isActive ? "#2D7979" : "currentColor"} 
                      class="bi bi-arrow-down-up" 
                      viewBox="0 0 16 16"
                    >
                      <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5m-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5"/>
                    </svg>

                    <div className="max-w-full">Transactions</div>
                  </div>
                </>
              )}
            </NavLink>
            {/* 3 BUDGET button */}
            <NavLink
              to="/budget"
              className={({ isActive }) => {
                return `flex gap-7 h-10 max-w-64 rounded-r-lg text-left ${isActive ? "bg-white" : "text-gray-300"}`
              }}
            >
              {({ isActive }) => (
                <>
                  {/* left green fader */}
                  <div className={`w-1 h-full ${isActive ? "bg-icons" : ""}`}></div>
                  {/*  */}
                  <div className="flex items-center gap-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      fill={isActive ? "#2D7979" : "currentColor"} 
                      class="bi bi-pie-chart-fill" 
                      viewBox="0 0 16 16"
                    >
                      <path
                            d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778zM8.5.015V7.5h7.485A8 8 0 0 0 8.5.015" />
                    </svg>
                    <div className="max-w-full">Budget</div>
                  </div>
                </>
              )}
            </NavLink>
            {/* 4 POTS button */}
            <NavLink
              to="/pots"
              className={({ isActive }) => {
                return `flex gap-7 h-10 max-w-64 rounded-r-lg text-left ${isActive ? "bg-white" : "text-gray-300"}`
              }}
            >
              {({ isActive }) => (
                <>
                  {/* left green fader */}
                  <div className={`w-1 h-full ${isActive ? "bg-icons" : ""}`}></div>
                  {/*  */}
                  <div className="flex items-center gap-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      fill={isActive ? "#2D7979" : "currentColor"}
                      class="bi bi-stack" 
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.6.6 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.6.6 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.6.6 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535z" />
                      <path
                        d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.6.6 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0z" />
                    </svg>
                    <div className="max-w-full">Pots</div>
                  </div>
                </>
              )}
            </NavLink>
            {/* 5 Recurring bills button*/}
            <NavLink
              to="/recurring-bills"
              className={({ isActive }) => {
                return `flex gap-7 h-10 max-w-64 rounded-r-lg text-left ${isActive ? "bg-white" : "text-gray-300"}`
              }}
            >
              {({ isActive }) => (
                <>
                  {/* left green fader */}
                  <div className={`w-1 h-full ${isActive ? "bg-icons" : ""}`}></div>
                  {/*  */}
                  <div className="flex items-center gap-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      fill={isActive ? "#2D7979" : "currentColor"} 
                      className="bi bi-ticket-perforated" 
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 4.85v.9h1v-.9zm7 0v.9h1v-.9zm-7 1.8v.9h1v-.9zm7 0v.9h1v-.9zm-7 1.8v.9h1v-.9zm7 0v.9h1v-.9zm-7 1.8v.9h1v-.9zm7 0v.9h1v-.9z" />
                      <path d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1 0 3 .5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3zM1 4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1.05a2.5 2.5 0 0 0 0 4.9v1.05a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1.05a2.5 2.5 0 0 0 0-4.9z" />
                    </svg>
                    <div className="max-w-full">Recurring Bills</div>
                  </div>
                </>
              )}
            </NavLink>
          </div>
        </div>
        {/* content */}
        <div className="w-3/4">
          <Outlet />
        </div>
      </div>

  );

}

export default App
