import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef(null);

  useEffect(() => {
    const viewport = document.getElementById('viewport');
    if (viewport) {
      viewport.setAttribute(
        'content',
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      );
    }


    if (!container.current) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: "dark",
      dateRange: "12M",
      locale: "en",
      largeChartUrl: "",
      isTransparent: false,
      showFloatingTooltip: false,
      plotLineColorGrowing: "rgba(41, 98, 255, 1)",
      plotLineColorFalling: "rgba(41, 98, 255, 1)",
      gridLineColor: "rgba(240, 243, 250, 0)",
      scaleFontColor: "#DBDBDB",
      belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
      belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
      symbolActiveColor: "rgba(41, 98, 255, 0.12)",
      tabs: [
        {
          title: "Indices",
          symbols: [
            { s: "BINANCE:BTCUSDT", d: "Crypto" },
            { s: "COINBASE:BTCUSD", d: "Crypto" },
            { s: "BINANCE:ETHUSDT", d: "Crypto" },
            { s: "COINBASE:XRPUSD", d: "Crypto" },
            { s: "BINANCE:AAVEUSDT", d: "Crypto" },
            { s: "OKX:ETHUSDT.P", d: "Crypto" },
            { s: "BYBIT:FARTCOINUSDT.P", d: "Crypto" },
            { s: "BINANCE:WLDUSDT", d: "Crypto" },
            { s: "CRYPTO:SOLUSD", d: "Crypto" },
            { s: "CAPITALCOM:ADAUSD", d: "Crypto" },
            { s: "BINANCE:WIFUSDT", d: "Crypto" },
            { s: "COINBASE:TRUMPUSD", d: "Crypto" }
          ],
          originalTitle: "Indices"
        },
        {
          title: "Futures",
          symbols: [
            { s: "BMFBOVESPA:ISP1!", d: "S&P 500" },
            { s: "BMFBOVESPA:EUR1!", d: "Euro" },
            { s: "CMCMARKETS:GOLD", d: "Gold" },
            { s: "PYTH:WTI3!", d: "WTI Crude Oil" },
            { s: "BMFBOVESPA:CCM1!", d: "Corn" }
          ],
          originalTitle: "Futures"
        },
        {
          title: "Bonds",
          symbols: [
            { s: "EUREX:FGBL1!", d: "Euro Bund" },
            { s: "EUREX:FBTP1!", d: "Euro BTP" },
            { s: "EUREX:FGBM1!", d: "Euro BOBL" }
          ],
          originalTitle: "Bonds"
        },
        {
          title: "Forex",
          symbols: [
            { s: "FX:EURUSD", d: "EUR to USD" },
            { s: "FX:GBPUSD", d: "GBP to USD" },
            { s: "FX:USDJPY", d: "USD to JPY" },
            { s: "FX:USDCHF", d: "USD to CHF" },
            { s: "FX:AUDUSD", d: "AUD to USD" },
            { s: "FX:USDCAD", d: "USD to CAD" }
          ],
          originalTitle: "Forex"
        }
      ],
      support_host: "https://www.tradingview.com",
      backgroundColor: "#131722",
      width: "100%",
      height: "950",
      showSymbolLogo: true,
      showChart: true
    });

    container.current.innerHTML = ""; // Clear previous widgets if any
    container.current.appendChild(script);
  }, []);

  return (
    <div className="Main">
      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright">
          <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
            <span className="blue-text">Track all markets on TradingView</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
