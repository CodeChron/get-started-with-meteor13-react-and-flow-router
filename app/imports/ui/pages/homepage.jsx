import React from 'react'

//We pass in any props transferred to this component
export const Homepage = (props) => {

	// define a message based on if signedIn is true or false
	const signedInMsg = props.signedIn? "You are signed in" : "You are not signed in"

  // render the message
	return <div> {signedInMsg} </div>
}