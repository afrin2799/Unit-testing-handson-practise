import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';
import Sinon from 'sinon';

describe('Basic details', () => {
  // Write test cases inside this block
  // refer basic-details.js files
  it('checks for if back button is being called', async()=>{
    const el=await fixture(html`<basic-details></basic-details>`);
   const btn= await el.shadowRoot.querySelector('.btn-previous');
    const event= new Event('keyup',{bubbles:true});
    btn.dispatchEvent(event);
    const myspy=Sinon.spy(el,'_toDashboard');
    myspy();
    expect(myspy.called).to.be.true;
  });
  xit('checks for if next button is being called', async()=>{
    const el=await fixture(html`<basic-details></basic-details>`);
   const btn= await el.shadowRoot.querySelector('.btn-next');
    const event= new Event('keyup',{bubbles:true});
    btn.dispatchEvent(event);
    const myspy=Sinon.spy(el,'_captureDetails');
    myspy();
    expect(myspy.called).to.be.true;
  });
  
});
