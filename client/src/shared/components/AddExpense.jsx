import React, { useEffect, useState } from "react";
import { transactionService } from "../../Feature/auth/service/TransactionService";

function AddExpense() {
  const initialForm={
    date:"",
    amount:"",
    from:"",
    to:"",
    type:"",
    category:"",
    status:"",
    note:""
  };
  const [form, setForm] = useState(initialForm)

  //the category is not available at load
  useEffect(()=>{
    const c = document.getElementById('category')

    c.style.backgroundColor = "gray";

  },[])
  
  //onsubmit function
  const handlesubmit= async (e) => {
    e.preventDefault()
    const addRecord = await transactionService.add(form)
    setForm(initialForm)
    
  }
 

  const setctg = (typevalue) => {
    const typeSelector = document.getElementById('type')
    const categorySelector = document.getElementById('category')
    
    const categoryOption = categorySelector.querySelectorAll('option:not([value=""])')
    
    categorySelector.value = "";
    
    if(typevalue==""){
      categorySelector.disabled = true;
      categorySelector.style.backgroundColor = "gray" 
      return;
    }
    categorySelector.style.backgroundColor = "#d1d5dc "


    categorySelector.disabled = false;

    categoryOption.forEach(option =>{
      const categoryType = option.getAttribute('data-category')
      if(option.value=="other" || !categoryType){
        option.hidden = false;
        option.disabled = false;
        return;
      }

      if (categoryType=== typevalue)
      {
        option.hidden = false;
        option.disabled = false;
      }else
      {
        option.hidden=true;
        option.disabled= true;
      }
    })
  }
  return (
    <>
      <div className="text-center">
        <div className=" mx-8 my-4 shadow-2xl shadow-gray-600">
          <div className="bg-gray-700 h-18 pt-3 text-3xl text-white  border-2 border-gray-600"> ADD EXPENSE</div>
          <div className="flex   bg-gray-800 text-white">
              <div className=" bg-gray-700 w-96">
                section - pending
              <p></p>
              </div>
              <div className="m-auto text-3xl">
              <div className="flex ml-30 mt-8">
              RECORD DETAILS
              </div>
              <form onSubmit={handlesubmit} className="flex flex-wrap flex-col m-10 mt-8 text-2xl p-5  ">
                
                  <div className="flex space-x-4 mb-12 ">
                  <label className="">Date:</label>
                  <input className="bg-gray-500 border-b-2 border-b-gray-100 focus-within:border-0 ml-9 " type="date" 
                  value={form.date}
                  onChange={(e)=> setForm({...form,date:e.target.value})}
                  required/>
                  </div>
                  <div className="flex space-x-4 mb-12 ">
                  <label>Amount:</label>
                  <input className="bg-gray-500 border-b-2 border-b-gray-100 focus-within:border-0  " min="0"  type="number"  
                  value={form.amount}
                  onChange={(e)=> setForm({...form,amount:e.target.value})}
                  required/>
                  </div>

                <div className="space-x-4 flex justify-between mb-12">
                  <label>From:</label>
                  <input className="bg-gray-500 border-b-2 border-b-gray-100 w-2xl focus-within:border-0 " type="text" 
                  value={form.from}
                  onChange={(e)=> setForm({...form,from:e.target.value})}
                  required/>
                </div>
                <div className="flex justify-between mb-12">
                  <label>To:</label>
                  <input className="bg-gray-500 border-b-2 border-b-gray-100 w-2xl focus-within:border-0 " type="text" 
                  value={form.to}
                  onChange={(e)=> setForm({...form,to:e.target.value})}
                  required/>
                </div>
                <div className="flex justify-between  mb-12">
                  <div className="">
                  <label>Type: </label>
                  <select style={{borderRadius: 5}} className="bg-gray-300 text-black text-center ml-4 outline-none" id="type" 
                  value={form.type}
                  onChange={(e) =>{ setctg(e.target.value) 
                  setForm({...form,type:e.target.value})
                   }}
                  required>
                    <option value="" >select type</option>
                    <option value="income" >income</option>
                    <option value="expense" >expense</option>
                    <option value="debt" >debt</option>
                  </select>
                  </div>
                  <div>
                  <label>Category:</label>
                  <select style={{borderRadius: 5}} className="bg-gray-300 text-black text-center ml-2 outline-none" id="category" 
                  value={form.category}
                  onChange={(e)=> setForm({...form,category:e.target.value})}
                  required>
                    <option  id="" value="" >select category</option>
                    <option  data-category="expense" value="food" hidden>food</option>
                    <option  data-category="expense" value="transport" hidden>transport</option>
                    <option  data-category="expense" value="shopping" hidden>shopping</option>
                    <option  data-category="expense" value="entertainment" hidden>entertainment</option>
                    <option  data-category="expense" value="bills" hidden>bills</option>
                    <option  data-category="expense" value="health" hidden>health</option>
                    <option  data-category="expense" value="education" hidden>education</option>
                    <option  data-category="income" value="salary" hidden>salary</option>
                    <option  data-category="income" value="investment" hidden>investment</option>
                    <option  data-category="debt" value="investment" hidden>investment</option>
                    <option  data-category="debt" value="lent" hidden>lent</option>
                    <option  data-category="debt" value="borrow" hidden>borrow</option>
                    <option  id="" value="other" >other</option>
                  </select>
                  </div>
                  <div>
                  <label>Status:</label>
                  <select style={{borderRadius: 5}} className="bg-gray-300 text-black text-center ml-2 outline-none" id="status"
                  value={form.status}
                  onChange={(e)=> setForm({...form,status:e.target.value})}
                  required>
                    <option value="" >select status</option>
                    <option value="pending" >pending</option>
                    <option value="completed" >completed</option>
                    <option value="scheduled" >scheduled</option>
                  </select>
                  </div>
                </div>
                <div className="flex space-x-4 mt-4">
                <label>Note:</label>
                <textarea className="bg-gray-500 border-b-2 border-b-gray-100 w-2xl h-28 focus-within:border-0 "  id="note"
                value={form.note}
                  onChange={(e)=> setForm({...form,note:e.target.value})}
                  ></textarea>
                </div>
                <div>
                  <button 
                  type="submit"
                  className="bg-gray-500  float-end mt-8 border-2 border-gray-700 hover:bg-gray-900 hover:border-gray-400 p-2 w-24 "
                  >add</button>
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddExpense;
