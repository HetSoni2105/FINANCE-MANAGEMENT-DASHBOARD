import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const addexpense = () => {
    navigate("/addExpense");
  };
  return (
    <>
      <div>Dashboard</div>
      <button onClick={addexpense} id="addExpense">
        Add Expense
      </button>
    </>
  );
}

export default Dashboard;
