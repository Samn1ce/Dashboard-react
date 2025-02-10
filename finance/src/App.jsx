import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import IconOverview from "./components/icon/IconOverview";
import IconTransaction from "./components/icon/IconTransaction";
import IconBudget from "./components/icon/IconBudget";
import IconPots from "./components/icon/IconPots";
import IconRb from "./components/icon/IconRb";
import EditModal from "./components/EditModal.jsx";
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
      <div className="w-full lg:w-1/5 h-12 lg:h-screen fixed lg:sticky bottom-0 lg:top-0 z-20 bg-tintDark lg:rounded-r-xl px-3 lg:py-5 lg:px-0">
        {/* title */}
        <h1 className="font-bold text-3xl mx-8 mb-10 text-zinc-300 hidden lg:block">
          FINANCE
        </h1>
        {/* nav buttons */}
        <nav className="flex md:gap-20 lg:gap-0 lg:flex-col text-xs font-bold h-full lg:h-auto">
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
            <NavLink
              className="w-full h-full lg:w-auto lg:h-auto pt-1"
              key={item.path}
              to={item.path}
            >
              {({ isActive }) => (
                <>
                  <div
                    className={`hidden lg:flex gap-7 h-20 lg:h-10 lg:max-w-64 lg:rounded-r-lg lg:text-left ${
                      isActive ? "bg-white" : "text-gray-300"
                    }`}
                  >
                    <div
                      className={`lg:w-1 lg:h-full ${
                        isActive ? "bg-icons" : ""
                      }`}
                    ></div>
                    {/*  */}
                    <div className="flex items-center lg:gap-4">
                      {item.icon(isActive)}
                      <div className="lg:max-w-full hidden lg:block">
                        {item.label}
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div
                    className={`flex flex-col justify-between items-center lg:hidden w-full h-full ${
                      isActive ? "bg-white" : "text-gray-300"
                    } rounded-t-md pt-1`}
                  >
                    <div>{item.icon(isActive)}</div>
                    <div className="text-[10px] text-zinc-500">
                      {item.label}
                    </div>
                    <div
                      className={`w-full h-1 ${isActive ? "bg-icons" : ""}`}
                    ></div>
                  </div>
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
      {/* content */}
      <div className="w-11/12 lg:w-3/4 mx-auto pb-10 lg:pb-0">
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
