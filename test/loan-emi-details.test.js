import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';
import Sinon from 'sinon';

describe('Loan EMI details', async() => {
  // Write test cases inside this block
  xit('checks for button click for navigation-back ',async()=>{
    const comp=await fixture(html`<loanemi-details></loanemi-details>`);
    const btn=comp.shadowRoot.querySelector('.cancel-btn');
    const ev = new Event('click', { bubbles: true });
    btn.dispatchEvent(ev);

    const spy=Sinon.spy(loanobj,'_toBasicDetails');

    setTimeout(()=>{
      expect(spy.called).to.be.true;

    })
   
  });
});
