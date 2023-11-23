import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/header/Header.js';

describe('loan-header', () => {
  // Write test cases inside this block
  /*it('checks for handlers', async()=>{
    const el=await fixture(html`<loan-header></loan-header>`);
    await el.shadowRoot.querySelector('#nl-NL').click();
  });
  it('checks for handlers', async()=>{
    const el=await fixture(html`<loan-header></loan-header>`);
    await el.shadowRoot.querySelector('#en-GB').click();
  });
  */
  it('renders correctly', async() => {
    const el=await fixture(html`<loan-header></loan-header>`);
    const enButton = el.shadowRoot.getElementById('en-GB');
    expect(enButton).to.be.ok;
  });
  it('renders correctly', async() => {
    const el=await fixture(html`<loan-header></loan-header>`);
    const nlButton = el.shadowRoot.getElementById('nl-NL');
    expect(nlButton).to.be.ok;
  });
  
  it('passes accessibility test for NL', async () => {
    const el = await fixture(html` <loan-header></loan-header> `);
    const myval1= await el.shadowRoot.querySelectorAll('button');
    await expect(myval1).to.be.accessible();
  });
  it('check for dom',async()=>{
    const el = await fixture(html` <loan-header></loan-header> `);
    expect(el).dom.to.equal('<loan-header></loan-header>');
  });
  it('check for dom accessibility',async()=>{
    const el = await fixture(html` <loan-header></loan-header> `);
    expect(el).dom.to.be.accessible();
  });
});
