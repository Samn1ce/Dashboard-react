import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import IconOverview from "./components/icon/IconOverview";
import IconTransaction from "./components/icon/IconTransaction";
import IconBudget from "./components/icon/IconBudget";
import IconPots from "./components/icon/IconPots";
import IconRb from "./components/icon/IconRb";
import NewBudget from "./components/NewBudget";
import DeleteBudget from "./components/DeleteBudget";

function App() {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState(null); // "budget" or "pots"

  // Budget Modal Rendering
  // const [newBudgetModal, setNewBudgetModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  // In your parent component/route
  const [budgetToEdit, setBudgetToEdit] = useState(null);
  const closeModal = () => {
    setModal(false);
    setBudgetToEdit(null);
    setModalType(null);
  };

  // Pots Modal Rendering
  // const [newPots, setNewPots] = useState(false);

  return (
    <div className="w-full flex bg-gray-200">
      <DeleteBudget deleteModal={deleteModal} setDeleteModal={setDeleteModal} />
      <NewBudget
        modal={modal}
        setModal={setModal}
        // newBudgetModal={newBudgetModal}
        // setNewBudgetModal={setNewBudgetModal}
        budgetToEdit={budgetToEdit}
        closeModal={closeModal}
        // newPots={newPots}
        // setNewPots={setNewPots}
        modalType={modalType}
        setModalType={setModalType}
      />
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
        <Outlet
          context={{
            modal,
            setModal,
            // newBudgetModal,
            // setNewBudgetModal,
            setDeleteModal,
            setBudgetToEdit,
            // setNewPots,
            setModalType,
          }}
        />
      </div>
    </div>
  );
}

export default App;
