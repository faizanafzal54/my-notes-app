import axios from "axios";
import { Note } from "../components/NoteList";
// get the env variable from .env file 
const BASE_URL = process.env.REACT_APP_BASE_URL;

// Services of CRUD APIs

export const getNotes = (userId: string | null) => {
    return axios.get<Note[]>(`${BASE_URL}notes?userId=${userId}`);
}

export const deleteNote = (id: number) => {
    return axios.delete(`${BASE_URL}notes/${id}`);
}

export const createNote = (content: string, userId: string | null) => {
    return axios.post(`${BASE_URL}notes`, { content, userId });
}

export const updateNote = (content: string, userId?: number | null) => {
    return axios.put(`${BASE_URL}notes/${userId}`, { content });
}