import { useContext } from "react";
import { BankContext } from "./Dashboard";
import { Link } from "react-router-dom";

export const CustomerCard = () => {
  const { accounts, setAccounts } = useContext(BankContext);


  function depositeAmt(ac) {
    ac.balance += parseFloat(window.prompt("Enter Deposite amount"));
    updateAccounts(ac);
  }

  function withdrawalAmt(ac) {
    ac.balance -= parseFloat(window.prompt("Enter Withdrawal amount"));
    updateAccounts(ac);
   
  }

  function updateAccounts(ac) {
  
    setAccounts(
      accounts.map((e) => {
        if (ac.accountNo == e.accountNo) {
          e.balance = ac.balance;
          return e;
        } else {
          return e;
        }
      }),
    );
  }

  return (
    <div className="d-flex justify-content-evenly">
      {accounts.map((e, i) => {
        return (
          <>
            <div key={i} className="card bg-light" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{e.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {e.accountNo}
                </h6>
                <p className="card-text">
                  <h4 className="text-primary">{e.accountType} Account</h4>
                  <strong>Balance {e.balance}/-</strong>
                </p>
                <button
                  className="btn btn-success me-3"
                  onClick={() => depositeAmt(e)}
                >
                  Deposit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => withdrawalAmt(e)}
                >
                  Withdrawal
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
