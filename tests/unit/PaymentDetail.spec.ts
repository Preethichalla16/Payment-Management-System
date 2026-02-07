let PaymentDetail: any;
import { createStore } from 'vuex';

describe('PaymentDetail.vue', () => {
    it('renders payment details with missing user', () => {
      jest.resetModules();
      jest.clearAllMocks();
      jest.spyOn(require('vue-router'), 'useRoute').mockReturnValue({ params: { id: 2 } });
      PaymentDetail = require('@/views/PaymentDetail.vue').default;
      const { shallowMount } = require('@vue/test-utils');
      const store = createStore({
        state: {
          payments: [{ id: 2, userId: 99, amount: 150, status: 'Pending', category: 'UPI', date: '2026-02-03' }],
          users: [{ id: 1, name: 'Alice', email: '', role: 'User', status: 'Active' }],
        },
      });
      const wrapper = shallowMount(PaymentDetail, {
        global: {
          plugins: [store],
          stubs: globalStubs,
        },
      });
      expect(wrapper.text()).toContain('Unknown');
      expect(wrapper.text()).toContain('150');
      expect(wrapper.text()).toContain('Pending');
    });

    it('renders payment amount with formatting', () => {
      jest.resetModules();
      jest.clearAllMocks();
      jest.spyOn(require('vue-router'), 'useRoute').mockReturnValue({ params: { id: 3 } });
      PaymentDetail = require('@/views/PaymentDetail.vue').default;
      const { shallowMount } = require('@vue/test-utils');
      const store = createStore({
        state: {
          payments: [{ id: 3, userId: 1, amount: 1234567, status: 'Completed', category: 'Card', date: '2026-02-04' }],
          users: [{ id: 1, name: 'Alice', email: '', role: 'User', status: 'Active' }],
        },
      });
      const wrapper = shallowMount(PaymentDetail, {
        global: {
          plugins: [store],
          stubs: globalStubs,
        },
      });
      // Should show formatted amount with commas
      expect(wrapper.text()).toContain('1,234,567');
      expect(wrapper.text()).toContain('Alice');
      expect(wrapper.text()).toContain('Completed');
    });
  // Stub StatusBadge globally for all tests
  const { defineComponent, h } = require('vue');
  const StatusBadgeStub = defineComponent({
    props: ['status'],
    setup(props: any, { slots }: { slots: any }) {
      return () => h('span', { class: 'status-badge' }, slots.default ? slots.default() : props.status);
    }
  });
  const globalStubs = {
    'router-link': true,
    'RouterLink': true,
    StatusBadge: StatusBadgeStub,
    'status-badge': StatusBadgeStub
  };
  it('renders payment details', () => {
    jest.resetModules();
    jest.clearAllMocks();
    jest.spyOn(require('vue-router'), 'useRoute').mockReturnValue({ params: { id: 1 } });
    PaymentDetail = require('@/views/PaymentDetail.vue').default;
    const { shallowMount } = require('@vue/test-utils');
    const store = createStore({
      state: {
        payments: [{ id: 1, userId: 1, amount: 100, status: 'Completed', category: 'Card', date: '2026-02-01' }],
        users: [{ id: 1, name: 'Alice', email: '', role: 'User', status: 'Active' }],
      },
    });
    const wrapper = shallowMount(PaymentDetail, {
      global: {
        plugins: [store],
        stubs: globalStubs,
      },
    });
    expect(wrapper.text()).toContain('Alice');
    expect(wrapper.text()).toContain('100');
    expect(wrapper.text()).toContain('Completed');
  });

  it('shows not found message for missing payment', () => {
    jest.resetModules();
    jest.clearAllMocks();
    jest.spyOn(require('vue-router'), 'useRoute').mockReturnValue({ params: { id: 99 } });
    PaymentDetail = require('@/views/PaymentDetail.vue').default;
    const { shallowMount } = require('@vue/test-utils');
    const store = createStore({
      state: {
        payments: [],
        users: [{ id: 1, name: 'Alice', email: '', role: 'User', status: 'Active' }],
      },
    });
    const wrapper = shallowMount(PaymentDetail, {
      global: {
        plugins: [store],
        stubs: globalStubs,
      },
    });
    expect(wrapper.text()).toContain('Payment not found.');
  });
});
