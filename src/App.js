import { useEffect, useState } from "react";
import FrontPage from "./components/FrontPage";
import GuessPage from "./components/GuessPage";
import LastPage from "./components/LastPage";
import SummaryPage from "./components/SummaryPage";

const stockArray=['GOOG','ADBE', 'BAC', 'SBUX', 'NVDA','MCD','KO','DIS','AAL','UBER']
const dateArray=['2019-09-01','2019-10-01','2019-11-01','2019-12-01','2020-01-01','2020-02-01','2020-03-01','2020-04-01','2020-05-01','2020-06-01']


function App() {

  const [source,setSource]= useState('')


  function getStock(){

    let stockNumber=Math.floor(Math.random()*(9-0+1))+0
    let dateNumber=Math.floor(Math.random()*(9-0+1))+0

    let url=`https://us-central1-nimble-net-279220.cloudfunctions.net/RealPredict?s=${stockArray[stockNumber]}&d=${dateArray[dateNumber]}&v&o&m&a&l&summary`
    setSource('')
    fetch(url, {method: 'GET', mode: 'cors', })
    .then(function(resp) {
      return resp.json()
    })

    .then(function(resp){
      setSource(resp)
    })
  }

  useEffect(getStock,[])




  const [pageNumber, setpageNumber]=useState(1);
  const [input, setInput] = useState(0);




  return (

    <div>
        { pageNumber===1 ?<FrontPage setpageNumber={setpageNumber} pageNumber={pageNumber}/>
        : pageNumber===2 ?<GuessPage setInput={setInput} input={input} setpageNumber={setpageNumber} pageNumber={pageNumber} anonymousImg={(source!=='') ? source['anonymousImgURL']:''}/>
        : pageNumber===3 ?<SummaryPage cbPrediction={(source!=='') ? source['summary']['20day_center']:'noData'} getStock={getStock} input={input} setpageNumber={setpageNumber} pageNumber={pageNumber} fullImg={(source!=='') ? source['imgURL']:''}/>
        :<LastPage getStock={getStock} setpageNumber={setpageNumber} pageNumber={pageNumber}/>
}

    </div>
  );
}

export default App;
