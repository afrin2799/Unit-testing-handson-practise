import { html, fixture, expect } from '@open-wc/testing';
import { localize } from '@lion/localize';
import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';
import Sinon from 'sinon';
import sinon from 'sinon';


describe('customer details', async() => {
  // Write test cases inside this block
 
	const el=await fixture(html`<customer-details></customer-details>`);
 
  it('checks accessibility',()=>{
	expect(el).to.be.accessible();
  })

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
	
	it('checks emidetails page accessibility', async() => {
		const el = await fixture(html`<customer-details></customer-details>`);
		const btn= el.shadowRoot.querySelector('#nextbtn').click();
		expect(btn).to.be.accessible();
		
	  });
	  it('should contain valid characters in first name', async()=>{
		const el=await fixture(html`<lion-input label="${localize.msg('change-language:firstname')}"></lion-input>`);
		await expect(el.label).to.match(/^[a-zA-Z\s]*$/);
	  });
	  it('should check the label name', async()=>{
		const el=await fixture(html`<lion-input label="${localize.msg('change-language:firstname')}"></lion-input>`);
		await expect(el.label).to.equal('First Name');
	  });
	  it('should contain valid characters in last name', async()=>{
		const el=await fixture(html`<lion-input label="${localize.msg('change-language:firstname')}"></lion-input>`);
		await expect(el.label).to.match(/^[a-zA-Z\s]*$/);
	  });
	  it('should check the label name', async()=>{
		const el=await fixture(html`<lion-input label="${localize.msg('change-language:lastname')}"></lion-input>`);
		await expect(el.label).to.equal('Last Name');
	  });
	  it('should check the label name', async()=>{
		const el=await fixture(html`<lion-input label="${localize.msg('change-language:monthlysalary')}"></lion-input>`);
		await expect(el.label).to.equal('Monthly Salary');
	  });
	  xit('navigates to emidetails page', async() => {
		const el = await fixture(html`<customer-details></customer-details>`);
		const myspy = sinon.spy(el, '_toEmidetails');
		el.shadowRoot.querySelector('#nextbtn').click();
		expect(myspy).to.have.been.called;
	  });
	  
	  
});
