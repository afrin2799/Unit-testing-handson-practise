import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';
import Sinon from 'sinon';
import { Router } from '@vaadin/router';
import { Required } from '@lion/form-core';

describe('Basic details', () => {
  // Write test cases inside this block
  // refer basic-details.js files
  it('checks the accessbility',async()=>{
    const el=await fixture(html`<basic-details></basic-details>`);
     expect(el).to.be.accessible();
  })
  it('checks for previous button exists', async()=>{
    const el=await fixture(html`<basic-details></basic-details>`);
   const btn= await el.shadowRoot.querySelector('.btn-previous');
    expect(btn).to.exist;
  });
  it('checks for previous button accessibility', async()=>{
    const el=await fixture(html`<basic-details></basic-details>`);
   const btn= await el.shadowRoot.querySelector('.btn-previous');
    expect(btn).to.be.accessible();
  });
  it('_toDashboard should navigate to the dashboard', async() => {
    const el=await fixture(html`<basic-details></basic-details>`);
    const router = stub(Router, 'go');
    el._toDashboard();
    expect(router.calledOnceWith('/')).to.be.true;
  });
  
  it('Checking for empty  validation', async() => {
    const el = await fixture(html`<basic-details></basic-details>`);
    const type = el.shadowRoot.querySelector('lion-input-amount');
    const amount = new Required();
    const errorMessage = amount._getMessage();
    expect(errorMessage).to.not.equal();
});
xit('checks lionButton function call -  _toDashboard',async()=>{
  const el=await fixture(html`<basic-details></basic-details>`);
  const myspy=Sinon.spy(el,'_toDashboard');
  const btn=el.shadowRoot.querySelectorAll('lion-button');
  btn[0].click();
  expect(myspy.called).to.be.true;
})

xit('checks lionButton function call -  _captureDetails',async()=>{
  const el=await fixture(html`<basic-details></basic-details>`);
  const myspy=Sinon.spy(el,'_captureDetails');
  const btn=el.shadowRoot.querySelectorAll('lion-button');
  btn[1].click();
  expect(myspy.called).to.be.true;
})
});
