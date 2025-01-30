import { useOutletContext } from "react-router-dom";
import HeaderSec from "../components/HeaderSec";
import Data from "../assets/data.json";

function Pots() {
  const { setModalType, setModal } = useOutletContext();

  return (
    <div className="w-full">
      <HeaderSec
        setModal={setModal}
        setModalType={setModalType}
        headerText="Pots"
        buttonText="+Add New Pots"
        modalFor="Pots"
      />
      <div className="grid grid-cols-2 gap-4">
        {Data.pots.map((p, index) => (
          <div
            key={index}
            className="w-full bg-white h-60 rounded-md p-5 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-4 justify-center items-center">
                <p
                  className="w-4 h-4 rounded-full bg-green-600"
                  style={{ backgroundColor: p.theme }}
                ></p>
                <p className="font-bold">{p.name}</p>
              </div>
              <p>...</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <p>Total Spend</p>
                <p className="font-bold text-3xl">${p.total}</p>
              </div>
              <div className="w-full h-3 bg-zinc-100 rounded-md overflow-hidden">
                <div
                  className="w-1/2 h-full bg-green-600"
                  style={{
                    backgroundColor: p.theme,
                    width: `${(p.total / p.target) * 100}%`,
                  }}
                ></div>
              </div>
              <div className="flex justify-between items-center text-zinc-500 text-sm font-semibold">
                <p>{((p.total / p.target) * 100).toFixed(2)}%</p>
                <p>
                  Target of $
                  {p.target > 999 ? p.target.toLocaleString() : p.target}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="w-60 bg-zinc-200 rounded-md py-3 font-semibold">
                +Add Money
              </button>
              <button className="w-60 bg-zinc-200 rounded-md py-3 font-semibold">
                Withdraw
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pots;
