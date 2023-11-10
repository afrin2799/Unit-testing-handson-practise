import { html, fixture, expect } from '@open-wc/testing';
import { localize } from '@lion/localize';
import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';
import Sinon from 'sinon';


describe('customer details', async() => {
  // Write test cases inside this block
  const el=await fixture(html`<customer-details></customer-details>`);

  it('checks for handlers', async()=>{
    
    await el.shadowRoot.querySelector('#nextbtn').click();
  });
  it('should display the form fields',()=>{
		const firstName=el.shadowRoot.querySelector('#first_name');
		const lastName=el.shadowRoot.querySelector('#last_name');
		const email=el.shadowRoot.querySelector('#email');
		const mobile=el.shadowRoot.querySelector('#mobile_number');
		expect(firstName).to.exist;
		expect(lastName).to.exist;
		expect(email).to.exist;
		expect(mobile).to.exist;
	});
  

});
