import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

// const login = (username, password) => {
//     fetch(
//         'http://abdyko.tmweb.ru/api/token/',
//         {
//             method: "POST",
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 username: username,
//                 password: password,
//             })
//         }
//     )
//     .then(response => {
//         return response.json()
//     }).then(jsonData => {
//         console.log(jsonData)
//     })
// }

// login('aktan', 'penguin12')


// const getTodos = () => {
//     fetch(
//         'http://abdyko.tmweb.ru/api/v1/todo',
//         {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ4MTcxNDM5LCJpYXQiOjE2NDgxMjgyMzksImp0aSI6IjYzNDc4YWE0NGE2MTRmNjE5Yjg0ODhhYzY5MWY2ZmM2IiwidXNlcl9pZCI6MjV9.bezQmirpMjn1kV2L4A-WVBvnQXdUe-Q2Frc3z5u7x-0',
//             }
//         }
//     )
//     .then(response => response.json())
//     .then(todos => console.log(todos))
// }

// getTodos()
ReactDOM.render(<App />, document.getElementById('root'));