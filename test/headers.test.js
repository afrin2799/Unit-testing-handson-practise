import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/header/Header.js';

describe('loan-header', () => {
  // Write test cases inside this block
  it('checks for handlers', async()=>{
    const el=await fixture(html`<loan-header></loan-header>`);
    await el.shadowRoot.querySelector('#nl-NL').click();
  });
  it('checks for handlers', async()=>{
    const el=await fixture(html`<loan-header></loan-header>`);
    await el.shadowRoot.querySelector('#en-GB').click();
  });
});
