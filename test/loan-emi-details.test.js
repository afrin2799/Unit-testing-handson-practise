import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';
import Sinon from 'sinon';

describe('Loan EMI details', async() => {
  // Write test cases inside this block
  xit('checks the rendering',async()=>{
    const el=await fixture(html`<loanemi-details></loanemi-details>`);
    expect(el).to.not.be.undefined;
  })
  xit('check for the h2 heading', async () => {
    const el=await fixture(html`<loanemi-details></loanemi-details>`);
    const h2 = el.shadowRoot.querySelector('h2');
    expect(h2).to.exist;
    expect(h2.textContent).to.equal('EMI Details');
});
  xit('checks for button click for navigation-back ',async()=>{
    const el=await fixture(html`<loanemi-details></loanemi-details>`);
    await el.shadowRoot.querySelector('.cancel-btn').click(); 
    const myspy=Sinon.spy(el,'_toBasicDetails');
    myspy();
      expect(myspy.called).to.be.true;
  });
});


