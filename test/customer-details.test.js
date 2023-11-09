import { html, fixture, expect } from '@open-wc/testing';
import { localize } from '@lion/localize';
import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';
import Sinon from 'sinon';


describe('customer details', () => {
  // Write test cases inside this block


  it('checks for handlers', async()=>{
    const el=await fixture(html`<customer-details></customer-details>`);
    await el.shadowRoot.querySelector('#nextbtn').click();
  });
  
  
/*
  it('should display an error message for first_name input with length less than 3', async () => {
    const element = await fixture(html`<customer-details></customer-details>`);
  
    const input = element.shadowRoot.querySelector('#first_name');
    input.value = 'ab'; // Set a value less than 3 characters

    const form = element.shadowRoot.querySelector('lion-form');
    await form.submit();
    
    const errorMessage = input.errorStateMessage;
    expect(errorMessage).not.equal('First name is a required field');
//Assertion error
   
  });
  */

});
