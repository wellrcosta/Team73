/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Form } from '@unform/web';
import Input from '../../components/Input';

import api from '../../services/api';

export default function Login() {
	async function handleSubmit(data) {
		const response = await api.get('/sessions', data);
		console.log(response);
	}

	return (
		<Form onSubmit={handleSubmit}>
			<h3>Sign In</h3>

			<div className='form-group'>
				<label>Email address</label>
				<Input
					name='email'
					type='email'
					className='form-control'
					placeholder='Enter email'
				/>
			</div>

			<div className='form-group'>
				<label>Password</label>
				<Input
					name='password'
					type='password'
					className='form-control'
					placeholder='Enter password'
				/>
			</div>

			<div className='form-group'>
				<div className='custom-control custom-checkbox'>
					<input
						type='checkbox'
						className='custom-control-input'
						id='customCheck1'
					/>
					<label className='custom-control-label' htmlFor='customCheck1'>
						Remember me
					</label>
				</div>
			</div>

			<button type='submit' className='btn btn-primary btn-block'>
				Submit
			</button>
			<p className='forgot-password text-right'>
				Forgot <a href='#'>password?</a>
			</p>
		</Form>
	);
}
