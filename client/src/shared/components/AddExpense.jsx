import React, { useState } from "react";

function AddExpense() {
  const [date, setDate] = useState("")
  const [Amount, setAmount] = useState("")
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [type, setType] = useState("")
  const [category, setCategory] = useState("")

  const setctg = () => {
    console.log("hello")
    const opt = document.getElementById("#enp")
    opt.set.hidden = false;

  }
  const handlesubmit= () => {

  }
  return (
    <>
      <div className="text-center">
        <div className=" mx-8 my-6 shadow-2xl shadow-gray-600">
          <div className="bg-gray-500 h-20 pt-3 text-3xl underline border-2 border-gray-600"> ADD EXPENSE</div>
          <div className="flex   bg-gray-800 text-gray-300">
              <div className=" bg-gray-700 w-96">
                section
              <p></p>
              </div>
              <div className="m-auto">
              section
              <div className="flex flex-wrap flex-col m-10 text-2xl p-5  ">
                
                  <div className="flex space-x-4 mb-12 ">
                  <label className="">Date:</label>
                  <input className="bg-gray-500 border-b-2 border-b-gray-100 focus-within:border-0 ml-9 " type="date" required/>
                  </div>
                  <div className="flex space-x-4 mb-12 ">
                  <label>Amount:</label>
                  <input className="bg-gray-500 border-b-2 border-b-gray-100 focus-within:border-0  " min="0"  type="number"  required/>
                  </div>

                <div className="space-x-4 flex justify-between mb-12">
                  <label>From:</label>
                  <input className="bg-gray-500 border-b-2 border-b-gray-100 w-2xl focus-within:border-0 " type="text" required/>
                </div>
                <div className="flex justify-between mb-12">
                  <label>To:</label>
                  <input className="bg-gray-500 border-b-2 border-b-gray-100 w-2xl focus-within:border-0 " type="text" required/>
                </div>
                <div className="flex justify-between  mb-12">
                  <div className="">
                  <label>Type: </label>
                  <select style={{borderRadius: 5}} className="bg-gray-300 text-black text-center ml-4 outline-none" name="type" 
                  onChange={setctg}
                  required>
                    <option value="type" >select type</option>
                    <option value="income" >income</option>
                    <option value="expense" >expense</option>
                    <option value="debt" >debt</option>
                  </select>
                  </div>
                  <div>
                  <label>Category:</label>
                  <select style={{borderRadius: 5}} className="bg-gray-300 text-black text-center ml-2 outline-none" name="category" required>
                    <option  id="" value="category" >select category</option>
                    <option  id="enp" value="food" hidden>food</option>
                    <option  id="enp" value="transport" hidden>transport</option>
                    <option  id="enp" value="shopping" hidden>shopping</option>
                    <option  id="enp" value="entertainment" hidden>entertainment</option>
                    <option  id="enp" value="bills" hidden>bills</option>
                    <option  id="enp" value="health" hidden>health</option>
                    <option  id="enp" value="education" hidden>education</option>
                    <option  id="inc" value="salary" hidden>salary</option>
                    <option  id="inc" value="investment" hidden>investment</option>
                    <option  id="debt" value="investment" hidden>investment</option>
                    <option  id="debt" value="lent" hidden>lent</option>
                    <option  id="debt" value="borrow" hidden>borrow</option>
                    <option  id="" value="other" >other</option>
                  </select>
                  </div>
                  <div>
                  <label>Status:</label>
                  <select style={{borderRadius: 5}} className="bg-gray-300 text-black text-center ml-2 outline-none" name="status" required>
                    <option value="status" >select status</option>
                    <option value="pending" >pending</option>
                    <option value="completed" >completed</option>
                    <option value="scheduled" >scheduled</option>
                  </select>
                  </div>
                </div>
                <div className="flex space-x-4 mt-4">
                <label>Note:</label>
                <textarea className="bg-gray-500 border-b-2 border-b-gray-100 w-2xl h-28 focus-within:border-0 " name="note" id=""></textarea>
                </div>
                <div>
                  <button className="bg-gray-500  float-end mt-8 border-2 border-gray-700 hover:bg-gray-900 hover:border-gray-400 p-2 w-24 "
                  onClick={handlesubmit} type="submit"
                  >add</button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddExpense;
