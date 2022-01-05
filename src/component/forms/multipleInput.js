import React, {useState} from 'react'
import '../forms/form.css';

function MultipleInput() {
	const [userRegistration, setuserRegistration] = useState({
		username:'',
		email: '',
		password: '',
		phone: ''
	});

	const [records, setRecords] = useState([]);
	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value
		console.log('===name===', name, value);

		setuserRegistration({ ...userRegistration, [name]: value});
	}

	const handleSubmit = (e)=> {
		e.preventDefault()

		const newRecord = { ...userRegistration, id: new Date().getTime().toString()}
		setRecords([...records, newRecord])
		console.log(records);
		setuserRegistration({username: "", email: "", phone: "", password: ""})

	}
    return (
        <>
					<form action="" onSubmit={handleSubmit}>
						<div>
							<label htmlFor="fullname">Full Name</label>
							<input type="text" name="username" 
							autoComplete="off" id="fullname"
							value={userRegistration.username}
							onChange={handleInput}/>
						</div>
						<div>
							<label htmlFor="email">email</label>
							<input type="text" name="email" 
								autoComplete="off" id="email"
								value={userRegistration.email}
								onChange={handleInput} />
						</div>
						<div>
							<label htmlFor="phone">phone</label>
							<input type="text" name="phone" 
								autoComplete="off" id="phone"
								value={userRegistration.phone}
								onChange={handleInput} />
						</div>
						<div>
							<label htmlFor="password">password</label>
							<input type="password" name="password" 
							autoComplete="off" id="password"
							value={userRegistration.password}
							onChange={handleInput} />
						</div>
						<button type="submit">Registration</button>
					</form>
					<div>
					{records.map((currElm)=> {
						return (
							<div className="showDataStyle">
							<p>{currElm.username}</p>
							<p>{currElm.email}</p>
							<p>{currElm.phone}</p>
							<p>{currElm.password}</p>
						</div>
						)

					})}
					</div>
        </>
    )
}

export default MultipleInput 
