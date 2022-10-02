// import React, { useState, useEffect } from "react";
// function UserList() {

//   const [users, setUsers] = useState([])

//   useEffect(function () {
//     (async function () {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users')
//       const data = await response.json()
//       if (response.ok) {
//         setRowData(data)
//       } else {
//         alert(JSON.stringify(data))
//       }


//     })()
//   }, [])



//   return <div>

//     {users.map(u =>
//       <ul>
//         <li> {u.name} </li>
//         <li>{u.email}</li>
//         <li>{u.address['street']}</li>
//       </ul>
//     )}

//   </div>
// }

// export default UserList
