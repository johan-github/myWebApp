function DataManager({ data = {}, type = '' }) {

  return (
    <div className={`Sidenav-${type}-container`}>
      {Object.values(data).map(item => {
        return item + ' '; // Added space at end for content to align
      })}
    </div>
  )
}

export default DataManager



// function DataManager({ data = {}, type = '' }) {

//   return (
//     <div className={`Sidenav-${type}-container`}>
//       {Object.values(data).map(item => {
//         return item + ' '; // Added space at end for content to align
//       })}
//     </div>
//   )
// }

// export default DataManager

  // // Destructing
  // const {title="", email="Undefined"} = data;
  // console.log("Title: ", title, email);

  // if (data.hasOwnProperty('title')) return null
  // Object.entries(data) --> creates an array