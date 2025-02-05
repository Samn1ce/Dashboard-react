import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import IconOverview from "./components/icon/IconOverview";
import IconTransaction from "./components/icon/IconTransaction";
import IconBudget from "./components/icon/IconBudget";
import IconPots from "./components/icon/IconPots";
import IconRb from "./components/icon/IconRb";
import EditModal from "./components/EditModal";
import DeleteBudget from "./components/DeleteBudget";
import AddModal from "./components/AddModal";
import AddWithdraw from "./components/AddWithdraw";

function App() {
  const [modal, setModal] = useState(false);
  const [addEditModal, setAddEditModal] = useState(false);
  const [addWithdrawModal, setAddWithdrawModal] = useState(false);
  const [editModalType, setEditModalType] = useState(null);
  const [addModalType, setAddModalType] = useState(null);
  const [dropdownType, setDropdownType] = useState(null);
  const [buttonFor, setButtonFor] = useState(null);
  const [selectedPots, setSelectedPots] = useState(null);

  const [deleteModal, setDeleteModal] = useState(false);
  // In your parent component/route
  const [budgetToEdit, setBudgetToEdit] = useState(null);
  const [potsToEdit, setPotsToEdit] = useState(null);
  const closeModal = () => {
    setModal(false);
    setBudgetToEdit(null);
    setAddModalType(null);
    setAddEditModal(false);
    setAddWithdrawModal(false);
  };

  return (
    <div className="w-full flex bg-gray-200">
      <AddModal
        modal={modal}
        setModal={setModal}
        closeModal={closeModal}
        addModalType={addModalType}
        setAddModalType={setAddModalType}
      />
      <DeleteBudget deleteModal={deleteModal} setDeleteModal={setDeleteModal} />
      <EditModal
        addEditModal={addEditModal}
        setAddEditModal={setAddEditModal}
        editModalType={editModalType}
        budgetToEdit={budgetToEdit}
        potsToEdit={potsToEdit}
        closeModal={closeModal}
      />
      <AddWithdraw
        addWithdrawModal={addWithdrawModal}
        setAddWithdrawModal={setAddWithdrawModal}
        closeModal={closeModal}
        buttonFor={buttonFor}
        selectedPots={selectedPots}
        setSelectedPots={setSelectedPots}
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
            setAddEditModal,
            setDeleteModal,
            setBudgetToEdit,
            setPotsToEdit,
            setAddModalType,
            editModalType,
            setEditModalType,
            dropdownType,
            setDropdownType,
            setAddWithdrawModal,
            setButtonFor,
            setSelectedPots,
          }}
        />
      </div>
    </div>
  );
}

export default App;
