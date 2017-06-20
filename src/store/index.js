import { ADD_MAIL, DEL_MAIL, UPD_MAIL, PASSWORD } from '../constants';
import { loadState, saveState } from './localStorage'

export default {
    state: {
        mails: loadState() || [
                                { id: 1, name: 'первый клиент', email: 'sfasdf', phone: '898798747878', text: 'some text'},
                                { id: 2, name: 'второй клиент', email: 'asdfdsf', phone: '+798798747878', text: 'some text'}
                              ],
        password: ''
    },
    mutations: {
        [PASSWORD] (state, pass) {
            state.password = pass;
        },
        [ADD_MAIL] (state, payload) {
            state.mails = [
                ...state.mails,
                payload
            ];
            saveState(state.mails);
        },
        [DEL_MAIL] (state, id) {
            const index = state.mails.findIndex( i => i.id === id);
            state.mails = [
                ...state.mails.slice(0, index),
                ...state.mails.slice(index+1)
            ];
            saveState(state.mails);
        },
        [UPD_MAIL] (state, payload) {
            const index = state.mails.findIndex( i => i.id === payload.id);
            state.mails = [
                ...state.mails.slice(0, index),
                payload,
                ...state.mails.slice(index+1)
            ];
            saveState(state.mails);
        }
    }
}