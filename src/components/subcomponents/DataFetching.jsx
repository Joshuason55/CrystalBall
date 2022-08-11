import { useEffect, useState } from "react"

function DataFetching(props) {
  const [source,setSource]= useState('')
  function getData(){
    let url=`https://us-central1-nimble-net-279220.cloudfunctions.net/RealPredict?s=${props.stock}&d=${props.date}&v&o&m&a&l&summary`
    
    fetch(url, {method: 'GET', mode: 'cors', })
    .then(function(resp) {
      return resp.json()
    })

    .then(function(resp){
      setSource(resp)
    })

}
useEffect(()=>{
  getData()
})

let realStock=(source!=='') ? source['summary']['20day_center']:'noData'

  return (

    <div>
      {props.show===false ?
        <img className="stockimage"
          src={source['anonymousImgURL']}
          alt='Anonymous'
        />
      :
        <img className="stockimage"
          src={source['imgURL']}
          alt='Full'
        />
      }
  </div>
  )
}


export default DataFetching