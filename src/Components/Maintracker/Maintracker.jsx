import React from 'react'
import maintracke from "../Style/Maintracker.css";

const Maintracker = () => {
  return (
    <div>

<div class="container ">

      <h4>My Balance</h4>
      <h1 id="balance">$0.00</h1>
      <div class="inc-exp-container">
      

        <div>
          <h4>Income</h4>
          <p id="money-plus" class="money-plus">
            +$0.00
          </p>
        </div>

        <div>
          <h4>Expense</h4>
          <p id="money-minus" class="money-minus">
            -$0.00
          </p>
        </div>
      </div>

      <h3>History</h3>
      <ul id="list" class="list">
        <li class="minus">
           Blance <span>-$0.00</span
          ><button class="delete-btn">x</button>
        </li>
      </ul>
      <h3>Add New Transition</h3>
  
      <form id="form"> 

      <div class="form-control">
              <label for="text">Text</label>
              <input type="text" id="text" placeholder="Enter Text...."/>
       </div>
       <div class="form-control">
              <label for="amount">Amount</label>
              <input type="text" id="text" placeholder="Enter Amount...."/>
       </div>
          
       <button class="btn">All transaction</button>
      </form>



    </div>

    </div>
  )
}

export default Maintracker