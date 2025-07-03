// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';
import "./chart.css"

function TradingViewWidget() {
  const container = useRef(null);

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "allow_symbol_change": true,
          "calendar": false,
          "details": false,
          "hide_side_toolbar": true,
          "hide_top_toolbar": false,
          "hide_legend": false,
          "hide_volume": false,
          "hotlist": false,
          "interval": "D",
          "locale": "en",
          "save_image": true,
          "style": "1",
          "symbol": "BITSTAMP:BTCUSD",
          "theme": "dark",
          "timezone": "Etc/UTC",
          "backgroundColor": "rgba(0, 0, 0, 1)",
          "gridColor": "rgba(46, 46, 46, 0.06)",
          "watchlist": [
            "BITSTAMP:BTCUSD",
            "BINANCE:ETHUSD",
            "BINANCE:SOLUSD",
            "BINANCE:ADAUSDT",
            "BINANCE:XRPUSD",
            "KRAKEN:BTCUSD",
            "PYTH:HYPEUSD",
            "COINBASE:SEIUSD",
            "COINBASE:TRUMPUSD",
            "BINANCE:VETUSDT",
            "BINANCE:FILUSDT",
            "BYBIT:APTUSDT.P"
          ],
          "withdateranges": false,
          "compareSymbols": [],
          "studies": [],
          "autosize": true
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
<div className="chart">

    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text"></span></a></div>
    </div>
        </div>
  );
}

export default memo(TradingViewWidget);
