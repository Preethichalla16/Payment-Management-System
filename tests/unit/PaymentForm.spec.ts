import { shallowMount } from '@vue/test-utils';
// No import needed for jest, it's global in Jest
let PaymentForm: any;
import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';

describe('PaymentForm.vue', () => {




  it('renders form and submits new payment', async () => {
    jest.resetModules();
    jest.clearAllMocks();
    jest.spyOn(require('vue-router'), 'useRoute').mockReturnValue({ params: {} });
    jest.spyOn(require('vue-router'), 'useRouter').mockReturnValue({ push: jest.fn() });
    PaymentForm = require('@/views/PaymentForm.vue').default;
    const store = createStore({
      state() {
        return {
          payments: [],
          users: [{ id: 1, name: 'Alice' }],
        };
      },
      mutations: {
        addPayment(state, payment) { (state as any).payments.push(payment); },
      },
    });
    const { createRouter, createWebHistory } = require('vue-router');
    const router = createRouter({
      history: createWebHistory(),
      routes: [{ path: '/payments/:id?', component: { template: '<div></div>' } }],
    });
    router.push('/payments');
    await router.isReady();
    // useStore will pick up the provided store from plugins
    const wrapper = shallowMount(PaymentForm, {
      global: {
        plugins: [store, router],
      },
    });
    expect(wrapper.find('form').exists()).toBe(true);
    await wrapper.find('form').trigger('submit.prevent');
    expect((store.state as any).payments.length).toBe(1);
  });

  it('shows user options in select', async () => {
    jest.resetModules();
    jest.clearAllMocks();
    jest.spyOn(require('vue-router'), 'useRoute').mockReturnValue({ params: {} });
    jest.spyOn(require('vue-router'), 'useRouter').mockReturnValue({ push: jest.fn() });
    PaymentForm = require('@/views/PaymentForm.vue').default;
    const store = createStore({
      state() {
        return {
          payments: [],
          users: [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' },
          ],
        };
      },
    });
    const { createRouter, createWebHistory } = require('vue-router');
    const router = createRouter({
      history: createWebHistory(),
      routes: [{ path: '/payments/:id?', component: { template: '<div></div>' } }],
    });
    router.push('/payments');
    await router.isReady();
    // useStore will pick up the provided store from plugins
    const wrapper = shallowMount(PaymentForm, {
      global: {
        plugins: [store, router],
      },
    });
    const options = wrapper.findAll('select#user option');
    expect(options.length).toBe(2);
    expect(options[0].text()).toBe('Alice');
    expect(options[1].text()).toBe('Bob');
  });
});
