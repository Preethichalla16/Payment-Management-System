import { createStore } from 'vuex';
import { users, payments, User, Payment } from '../assets/mockData';

export interface State {
  users: User[];
  payments: Payment[];
}

const store = createStore<State>({
  state: {
    users: [...users],
    payments: [...payments],
  },
  mutations: {
    addUser(state, user: User) {
      state.users.push(user);
    },
    updateUser(state, updatedUser: User) {
      const idx = state.users.findIndex(u => u.id === updatedUser.id);
      if (idx !== -1) state.users[idx] = updatedUser;
    },
    addPayment(state, payment: Payment) {
      state.payments.push(payment);
    },
    updatePayment(state, updatedPayment: Payment) {
      const idx = state.payments.findIndex(p => p.id === updatedPayment.id);
      if (idx !== -1) state.payments[idx] = updatedPayment;
    },
  },
});

export default store;
