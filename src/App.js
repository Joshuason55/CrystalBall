import FrontPage from "./components/FrontPage";
import GuessPage from "./components/GuessPage";
import LastPage from "./components/LastPage";
import SummaryPage from "./components/SummaryPage";

function App() {
  const stockArray=['GOOG','ADBE', 'BAC', 'SBUX', 'NVDA','MCD','KO','DIS','AAL','UBER']
  const dateArray=['2019-09-01','2019-10-01','2019-11-01','2019-12-01','2020-01-01','2020-02-01','2020-03-01','2020-04-01','2020-05-01','2020-06-01']
  function getStock(){
    let stockNumber=Math.floor(Math.random()*(9-0+1))+0
    let dateNumber=Math.floor(Math.random()*(9-0+1))+0
    let stockDate=[stockNumber,dateNumber]
    return stockDate
  }
  let stockDate=getStock()
  let stock=stockArray[stockDate[0]]
  let date=dateArray[stockDate[1]]




  return (

    <div>
      <FrontPage/>
      <GuessPage date={date} stock={stock}/>
      <SummaryPage date={date} stock={stock}/>
      <LastPage/>

    </div>
  );
}

export default App;
