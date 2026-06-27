import { createContext, useState } from "react";
import { CustomerCard } from "./CustomerCard";

export const BankContext = createContext();

export const Dashboard = () => {
  const [accounts, setAccounts] = useState([
    {
      accountNo: 101,
      name: "Rahul",
      balance: 45000,
      accountType: "Saving",
    },
    {
      accountNo: 102,
      name: "Amit",
      balance: 15000,
      accountType: "Current",
    },
    {
      accountNo: 103,
      name: "Priya",
      balance: 72000,
      accountType: "Saving",
    },
  ]);

  function addAc() {
    const name = window.prompt("Enter ac name");
    const accountType = window.prompt("Enter ac type");
    const balance = window.prompt("Enter ac balance");
    const accountNo = accounts[accounts.length - 1].accountNo + 1;

    const newAc = { name, accountType, accountNo, balance };

    setAccounts([...accounts, newAc]);
  }

  function delAc() {
    const acNo = window.prompt("Enter ac no to delete");
    if(window.confirm(`Do you want to delete ac ${acNo}?`))
    {
    setAccounts(
      accounts.filter(function (e) {
        return e.accountNo != acNo;
      }),
    );
  }
  }
  return (
    <BankContext.Provider value={{ accounts, setAccounts }}>
      <h1 className="text-center display-6 py-3 mb-5 bg-dark text-white">
        Bank Dashboard
      </h1>
      <button onClick={addAc}>Add Ac</button>
      <button onClick={delAc}>Delete Ac</button>
      <CustomerCard />
    </BankContext.Provider>
  );
};
