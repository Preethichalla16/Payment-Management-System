import { shallowMount } from '@vue/test-utils';
import PaymentList from '@/views/PaymentList.vue';
import { createStore } from 'vuex';

describe('PaymentList.vue', () => {
  it('renders payment table', () => {
    const store = createStore({
      state() {
        return {
          payments: [
            { id: 1, userId: 1, amount: 100, status: 'Completed', category: 'Card', date: '2026-02-01' },
            { id: 2, userId: 2, amount: 200, status: 'Pending', category: 'UPI', date: '2026-02-02' },
          ],
          users: [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' },
          ],
        };
      },
    });
    const wrapper = shallowMount(PaymentList, {
      global: {
        plugins: [store],
        stubs: {
          'router-link': true,
          StatusBadge: {
            props: ['status'],
            template: '<span>{{ status }}</span>'
          }
        },
      },
    });
    expect(wrapper.findAll('tbody tr').length).toBe(2);
    expect(wrapper.text()).toContain('Alice');
    expect(wrapper.text()).toContain('Bob');
  });

  it('filters payments by status', async () => {
    const store = createStore({
      state() {
        return {
          payments: [
            { id: 1, userId: 1, amount: 100, status: 'Completed', category: 'Card', date: '2026-02-01' },
            { id: 2, userId: 2, amount: 200, status: 'Pending', category: 'UPI', date: '2026-02-02' },
          ],
          users: [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' },
          ],
        };
      },
    });
    const wrapper = shallowMount(PaymentList, {
      global: {
        plugins: [store],
        stubs: {
          'router-link': true,
          StatusBadge: {
            props: ['status'],
            template: '<span>{{ status }}</span>'
          }
        },
      },
    });
    await wrapper.find('select').setValue('Completed');
    const rows = wrapper.findAll('tbody tr');
    expect(rows.length).toBe(1);
    // The stub now renders the status prop, so it should be visible
    expect(rows[0].text()).toContain('Completed');
    expect(rows[0].text()).not.toContain('Pending');
  });
});
