// import axios from 'axios'



// //constants
// export const ADD_BLOG = 'ADD_BLOG'
// export const LOAD_BLOG = 'LOAD_BLOG'

// //Type Action

// export function AddBlogAction(blog){
//     return {
//         blog: blog,
//         type: ADD_BLOG
//     }
// }

// export function LoadBlogAction(){
//     return {
//         blog: blog,
//         type: LOAD_BLOG
//     }
// }

// //thunk 
// export function AddBlogActionThunk(blog){
//     return (dispatch) => {
//         axios.post(`PUT YOUR SERVER URL`, blog).then(res => {
//             console.log(res)
//             dispatch(AddBlogAction(blog))
//         })
//     }
// }

// export function LoadBlogActionThunk(){
//     return (dispatch) => {
//         axios.get(`YOUR SERVER URL`).then(res => {
//             console.log(res);
//             dispatch(LoadBlogAction)
//         })

//     }
// }

