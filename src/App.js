import { useEffect, useState } from "react";
import FrontPage from "./components/FrontPage";
import GuessPage from "./components/GuessPage";
import LastPage from "./components/LastPage";
import SummaryPage from "./components/SummaryPage";
import Log from './components/log';

const stockArray=['WFC','ADBE', 'BAC', 'SBUX', 'NVDA','MCD','KO','DIS','AAL','HRB']
// const dateArray=['2019-09-01','2019-10-01','2019-11-01','2019-12-01','2020-01-01','2020-02-01','2020-03-01','2020-04-01','2020-05-01','2020-06-01']
Log.log('Game started')

function App() {

  const [source,setSource]= useState('')
  const [loading, setLoading]=useState(false)

  function getStock(){

    let stockNumber=Math.floor(Math.random()*(9-0+1))+0
    // let dateNumber=Math.floor(Math.random()*(9-0+1))+0
    let date=new Date('2019-06-01'); 
    date.setDate(Math.floor(Math.random()*650));
    date=date.toISOString().split('T')[0]

    // let url=`https://us-central1-nimble-net-279220.cloudfunctions.net/RealPredict?s=${stockArray[stockNumber]}&d=${dateArray[dateNumber]}&o&m&a&summary&f`
    let url=`https://us-central1-nimble-net-279220.cloudfunctions.net/RealPredict?s=${stockArray[stockNumber]}&d=${date}&o&m&a&summary&f`
    setSource('')
    fetch(url, {method: 'GET', mode: 'cors', })
    .then(function(resp) {
      setLoading(true);
      return resp.json()
      
    })

    .then(function(resp){
      setSource(resp)
    })
  }

  useEffect(getStock,[])




  const [pageNumber, setpageNumber]=useState(1);
  const [input, setInput] = useState(0);
  const [numAttempts, setnumAttempts]= useState(0);

  // Average array consists of [avg user acc, avg cb acc, ticker, date, confidence, user acc, cb acc]
  const[Average, setAverage]=useState([[0,0,'','','', 0,0,0],[0,0,'','','', 0,0,0]]);
  let actualPrice=(source!=='') ? source['summary']['close10']: 0
  let cbPrediction=(source!=='') ? source['summary']['10day_center']: 0

function userAverageFunct(){
    if (numAttempts===0){
      return
    }
    let userAccuracy=Math.abs((actualPrice-input)/actualPrice)
    let cbAccuracy=Math.abs((actualPrice-cbPrediction)/actualPrice)
    // let userAccuracy=1/(1+Math.abs((actualPrice-input)/actualPrice))
    // let cbAccuracy=1/(1+Math.abs((actualPrice-cbPrediction)/actualPrice))
    let new_avg_arr = [...Average]
    let ca = numAttempts
    let pa = ca-1
    new_avg_arr[ca] = [(new_avg_arr[pa][0]*pa + userAccuracy)/ca, 
                       (new_avg_arr[pa][1]*pa + cbAccuracy)/ca,
                       source['summary']['ticker'],
                       source['summary']['date'],
                       source['summary']['10day_confidence'],
                       userAccuracy,
                       cbAccuracy,
                       userAccuracy < cbAccuracy ? new_avg_arr[pa][7] + 1 : 0
                      ]
    Log.log(`NumAttempts: ${numAttempts}, Response: ${new_avg_arr[ca].toString()}`)
    new_avg_arr[ca+1]=[0,0,'','','', 0,0,0]
    setAverage(new_avg_arr)
    

}
useEffect(userAverageFunct,[numAttempts])

const [feedbackCounter, setfeedbackCounter]=useState(0);
const [emailCounter, setemailCounter]=useState(0);

  return (
  
    <div>
        
        { pageNumber===1 ?
        <FrontPage 
          setpageNumber={setpageNumber} 
          pageNumber={pageNumber}
        />
        : pageNumber===2 ?
        <GuessPage 
          loading={loading}
          numAttempts={numAttempts} 
          setnumAttempts={setnumAttempts} 
          setInput={setInput} input={input} 
          setpageNumber={setpageNumber} 
          pageNumber={pageNumber} 
          anonymousImg={(source!=='') ? source['anonymousImgURL']:''}
        />
        : pageNumber===3 ?
        <SummaryPage 
          loading={loading}
          setLoading={setLoading}
          feedbackCounter={feedbackCounter}
          setfeedbackCounter={setfeedbackCounter}
          emailCounter={emailCounter}
          setemailCounter={setemailCounter}
          Average={Average[numAttempts]}
          AttemptSummary={Average}
          numAttempts={numAttempts} 
          setnumAttempts={setnumAttempts}
          actualPrice={(source!=='') ? source['summary']['close10']:'noData'} 
          cbPrediction={(source!=='') ? source['summary']['10day_center']:'noData'} 
          getStock={getStock} 
          input={input} 
          setInput={setInput}
          setpageNumber={setpageNumber} 
          pageNumber={pageNumber} 
          fullImg={(source!=='') ? source['imgURL']:''}
        />

        :<LastPage 
          loading={loading}
          setLoading={setLoading}
          feedbackCounter={feedbackCounter}
          setfeedbackCounter={setfeedbackCounter}
          emailCounter={emailCounter}
          setemailCounter={setemailCounter}
          input={input} 
          setInput={setInput}
          getStock={getStock} 
          setpageNumber={setpageNumber} 
          pageNumber={pageNumber}
        />
}

    </div>
  );
}

export default App;
