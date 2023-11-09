import { html, fixture, expect } from '@open-wc/testing';
// import { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

describe('Success screen ', async() => {
  // Write test cases inside this block
 it('checks for if home button is being called ', async()=>{
    const el=await fixture(html`<loan-success></loan-success>`);
   const btn= await el.shadowRoot.querySelector('.home-btn');
    const event= new Event('keyup',{bubbles:true});
    btn.dispatchEvent(event)
  }); 
});


describe('error screen', () => {
  // Write test cases inside this block
  it('checks for if home button is being called ', async()=>{
    const el=await fixture(html`<loan-error></loan-error>`);
   const btn= await el.shadowRoot.querySelector('.home-btn');
    const event= new Event('keyup',{bubbles:true});
    btn.dispatchEvent(event)
  }); 
});
