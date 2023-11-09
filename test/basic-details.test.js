import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

describe('Basic details', () => {
  // Write test cases inside this block
  // refer basic-details.js files
  it('should trigger a "previous" action when clicked', async()=>{
    const el=await fixture(html`<basic-details></basic-details>`);
   const btn= await el.shadowRoot.querySelector('.btn-previous');
    const event= new Event('keyup',{bubbles:true});
    btn.dispatchEvent(event)
  });
  it('should trigger a "next" action when clicked', async()=>{
    const el=await fixture(html`<basic-details></basic-details>`);
   const btn= await el.shadowRoot.querySelector('.btn-next');
    const event= new Event('keyup',{bubbles:true});
    btn.dispatchEvent(event)
  });
});
