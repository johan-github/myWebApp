function DataManager({ data = {}, type = '' }) {

  return (
    <div className={`Sidenav-${type}-container`}>
      {Object.values(data).map(item =>
        <div>
          {item}
        </div>)
      }
    </div>
  )
}

export default DataManager

/**** 
 function DataManager({ data = {}, type = '' , setCurrentPage = undefined }) {
  return (
    <div className={`Sidenav-${type}-container`}>
      {Object.values(data).map(item =>
        <div onClick={() => setCurrentPage && setCurrentPage(item)}>
          {item}
        </div>)
      }
    </div>
  )
}
export default DataManager
 */