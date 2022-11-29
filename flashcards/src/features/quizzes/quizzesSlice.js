import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: { quizzes: {} },
    reducers: {
        addQuiz: (state, action) => {
            const {id, name, topicId, cardIds} = action.payload;

            state.quizzes[id] = {
                id: id,
                name: name,
                topicId: topicId,
                cardIds: cardIds
            }
        }
    }
});

export const addQuizThunk = (payload) => {
    return (dispatch) => {
        dispatch(addQuiz(payload));
        dispatch(addQuizId({topicId: payload.topicId, id: payload.id}))
        
    }
};

export const selectQuizzes = (state) => state.quizzes.quizzes;

export default quizzesSlice.reducer;
export const {addQuiz} = quizzesSlice.actions;