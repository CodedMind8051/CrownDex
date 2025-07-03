import React, { useEffect } from "react";
import Chart from "../components/Futures/Chart";

function Futures() {
  useEffect(() => {
    const viewport = document.getElementById("viewport");
    if (viewport) {
      viewport.setAttribute(
        "content",
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      );
    }
  }, []);

  return (
    <>
      <Chart />
    <div className="futures-container">
        {/* Tabs */}
        <div className="tabs">
          <span className="tab active">Trade</span>
          <span className="tab">Positions</span>
          <span className="tab">Orders</span>
        </div>

        {/* Dropdowns */}
        <div className="row">
          <select defaultValue="isolated" className="select">
            <option value="isolated">Isolated</option>
            <option value="cross">Cross</option>
          </select>
          <select defaultValue="10x" className="select">
            <option value="10x">10x</option>
            <option value="20x">20x</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="row">
          <button className="btn btn-long">Long</button>
          <button className="btn btn-short">Short</button>
        </div>

        {/* Order Book Prices */}
        <div className="order-book">
          <div className="order-row">
            <span className="price red">2,425.20</span>
            <span className="volume">90.67K</span>
          </div>
          <div className="order-row">
            <span className="price red">2,425.19</span>
            <span className="volume">9.02K</span>
          </div>
          <div className="order-row">
            <span className="price red">2,425.18</span>
            <span className="volume">11.73L</span>
          </div>
          <div className="order-row">
            <span className="price red">2,425.17</span>
            <span className="volume">6.09K</span>
          </div>
        </div>

        {/* Market Dropdown */}
        <select defaultValue="market" className="select market-select">
          <option value="market">Market</option>
          <option value="limit">Limit</option>
        </select>

        {/* Divider */}
        <hr className="divider" />

        {/* Available Balance */}
        <div className="available-balance">
          Available: <span className="balance-amount">₹860.37</span>
        </div>
      </div>

      {/* CSS styles */}
      <style>{`
        .futures-container {
          background: #000;
          color: #fff;
          padding: 16px;
          border-radius: 8px;
          max-width: 480px;
          margin: 0 0;
          font-family: Arial, sans-serif;
        }
        .tabs {
          display: flex;
          justify-content: space-around;
          font-size: 14px;
          margin-bottom: 12px;
        }
        .tab {
          color: #888;
          cursor: pointer;
          font-weight: 500;
        }
        .tab.active {
          color: #3b82f6; /* blue.400 */
          font-weight: bold;
        }
        .row {
          display: flex;
          gap: 12px;
          margin-bottom: 12px;
        }
        .select {
          flex: 1;
          background: #333;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 8px;
          font-size: 14px;
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          cursor: pointer;
        }
        .market-select {
          width: 100%;
          margin-bottom: 12px;
        }
        .btn {
          flex: 1;
          padding: 10px 0;
          font-size: 16px;
          font-weight: 600;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.2s ease;
          color: white;
        }
        .btn-long {
          background-color: #38a169; /* green.500 */
        }
        .btn-long:hover {
          background-color: #2f855a;
        }
        .btn-short {
          background-color: #e53e3e; /* red.500 */
        }
        .btn-short:hover {
          background-color: #c53030;
        }
        .order-book {
          font-size: 14px;
          margin-bottom: 12px;
        }
        .order-row {
          display: flex;
          justify-content: space-between;
          margin: 2px 0;
        }
        .price.red {
          color: #f56565; /* red.400 */
        }
        .volume {
          color: #ddd;
        }
        .divider {
          border: 0;
          height: 1px;
          background: #444;
          margin: 16px 0;
        }
        .available-balance {
          font-size: 14px;
          color: #bbb;
        }
        .balance-amount {
          color: #fff;
          font-weight: bold;
        }

        /* Responsive */
        @media (max-width: 480px) {
          .futures-container {
            padding: 12px;
            max-width: 100%;
          }
          .row {
            flex-direction: column;
          }
          .btn {
            font-size: 14px;
            padding: 8px 0;
          }
          .select {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}

export default Futures;
