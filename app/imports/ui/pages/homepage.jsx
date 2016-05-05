import React from 'react'

//First, we pass in any props transferred to this component
export const Homepage = (props) => {

	console.log("homepage props: ", props.test)

  //Next, we create a function that accepts a userStatus boolean and return a message depending on if userStatus is true (signed in) or false (not signed in)
	const displayLoginStatus = (userStatus) => {

		const 
		  isLoggedInMsg    = "You are signed in",
		  isNotLoggedInMsg =  "You are not signed in"

		return userStatus?
		  isLoggedInMsg
		:
		  isNotLoggedInMsg
	}

  //Finally, we call the function and pass in our reactive isLoggedIn data source, which we can access via props
	return <div>{displayLoginStatus(props.isLoggedIn)}
	  <p>IsLoggedIn? {props.isLoggedIn}</p>
	</div>
}