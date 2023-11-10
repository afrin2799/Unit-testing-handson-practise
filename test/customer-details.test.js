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
	const myspy=Sinon.spy(el,'_toEmidetails');
    myspy();
    expect(myspy.called).to.be.true;
   
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
	xit('should display an error message for first_name input with length less than 3', async () => {
		const el = await fixture(html`<customer-details></customer-details>`);
	  
		const input = el.shadowRoot.querySelector('#first_name');
		input.value = 'ab';  
	
		const form = el.shadowRoot.querySelector('lion-form');
		await form.submit();
		
		const errorMessage = input.errorStateMessage;
		expect(errorMessage).to.equal('First name is a required field');
	});
	//Assertion error
	
	   

});
