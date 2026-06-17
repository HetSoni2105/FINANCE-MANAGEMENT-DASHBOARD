import React from "react";

function AddExpense() {
  return (
    <>
      <div className="text-center">
        <div className="border h-auto mx-8 ">
          AddExpense
          <div className="flex   bg-gray-800 text-gray-300">
              <div className=" bg-gray-700 w-96">
                section
              <p></p>
              </div>
              <div className="m-auto">
              section
              <div className="flex flex-wrap flex-col m-10 text-2xl p-5  ">
                <div className="flex gap-x-6 ">
                  <div className="space-x-4">
                  <label>Date:</label>
                  <input className="bg-gray-500 border-b-2 border-b-gray-100 mb-8 focus-within:border-0 " type="text" />
                  </div>
                  <div className="space-x-4">
                  <label>Amount:</label>
                  <input className="bg-gray-500 border-b-2 border-b-gray-100 focus-within:border-0 " type="text" />
                  </div>
                </div>
                <div className="space-x-4 flex justify-between mb-8">
                  <label>From:</label>
                  <input className="bg-gray-500 border-b-2 border-b-gray-100 w-2xl focus-within:border-0 " type="text" />
                </div>
                <div className="flex justify-between">
                  <label>To:</label>
                  <input className="bg-gray-500 border-b-2 border-b-gray-100 w-2xl focus-within:border-0 " type="text" />
                </div>
                <div className="flex justify-center gap-x-2">
                  <div className="">
                  <label> type</label>
                  <select name="" id="">
                    <option value="type" >select type</option>
                    <option value="income" >select type</option>
                    <option value="expense" >select type</option>
                    <option value="type" >select type</option>
                  </select>
                  </div>
                  <div>
                  <label> category</label>
                  </div>
                  <div>
                  <label> status</label>
                  </div>
                </div>
                <div className="flex space-x-4 mt-4">
                <label>Note:</label>
                <textarea className="bg-gray-500 border-b-2 border-b-gray-100 w-2xl " name="note" id=""></textarea>
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
