import { createSlice } from '@reduxjs/toolkit'
import io from "socket.io-client";
let socket;
const ENDPOINT = "http://localhost:5000";
socket = io(ENDPOINT);

const initialState = {
    data: [],
}

export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        SET_DATA: (state, payload) => {
            console.log(payload)
            state.data.push(payload.payload)
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount, SET_DATA } = commonSlice.actions

export const webhook = (name, room) => async dispatch => {

    // console.log(room)
    // console.log(name)
    // socket.emit("join", { name, room }, (error) => {
    //     if (error) {
    //         alert(error);
    //     }
    //     alert("success");
    //     socket.on("content", (content) => {
    //         console.log("New content: ", content)
    //         dispatch(SET_DATA(content))
    //         alert('wew')
    //     });
    // });

}

export default commonSlice.reducer
