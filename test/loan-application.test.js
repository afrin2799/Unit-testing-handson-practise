import { html, fixture, expect } from '@open-wc/testing';

import '../loan-application.js';

describe('LoanApplication', () => {
  // Write test cases inside this block
  it('should render a dashboard component', async () => {
    const el = await fixture(html`<loan-application></loan-application>`);
    const dashboardElement = el.shadowRoot.querySelector('dash-board');
    expect(dashboardElement).to.exist;
  });
  it('should have a default counter', async () => {
    const el = await fixture(html`<loan-application></loan-application>`);
    expect(el.counter).to.equal(5);
  });
  it('checks for counter type',async()=>{
    const el = await fixture(html`<loan-application></loan-application>`);
    const CounterVal = el.counter;
    expect(CounterVal).to.be.a('Number');
  });
  it('checks for counter type',async()=>{
    const el = await fixture(html`<loan-application></loan-application>`); 
    expect(el.title).to.be.a('String');
  });
  it('checks for counter type',async()=>{
    const el = await fixture(html`<loan-application></loan-application>`); 
    expect(el.title).to.equal('Hey there');
  });
  it('should increment the counter when __increment is called', async () => {
    const el = await fixture(html`<loan-application></loan-application>`);
    const CounterVal = el.counter;
    el.__increment();
    expect(el.counter).to.equal(CounterVal + 1);
  });

it('check for DOM', async () => {
  const el = await fixture(html`<loan-application></loan-application>`);
  expect(el).dom.to.equal('<loan-application></loan-application>');
});
});
