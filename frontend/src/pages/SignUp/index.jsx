/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Form } from '@unform/web';
import Input from '../../components/Input';

export default function SignUp() {
	function handleSubmit(data) {
		console.log(data);
		// Return is a JSON, like this { data: 'dataHere', moreData: 'moreDataHere'}
	}

	return (
		<Form onSubmit={handleSubmit}>
			<h3>Sign Up</h3>

			<div className='form-group'>
				<label>First name</label>
				<input
					type='text'
					name='firstName'
					className='form-control'
					placeholder='First name'
				/>
			</div>

			<div className='form-group'>
				<label>Last name</label>
				<input
					type='text'
					name='lastName'
					className='form-control'
					placeholder='Last name'
				/>
			</div>

			<div className='form-group'>
				<label>Email address</label>
				<input
					type='email'
					name='email'
					className='form-control'
					placeholder='Enter email'
				/>
			</div>

			<div className='form-group'>
				<label>Password</label>
				<input
					type='password'
					name='password'
					className='form-control'
					placeholder='Enter password'
				/>
			</div>

			<button type='submit' className='btn btn-primary btn-block'>
				Sign Up
			</button>
			<p className='forgot-password text-right'>
				Already registered <a href='#'>sign in?</a>
			</p>
		</Form>
	);
}
