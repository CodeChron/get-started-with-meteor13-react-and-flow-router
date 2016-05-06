import React from 'react'
//include Meteor's pre-fab login/signup ui to allow for testing the reactive data source
import AccountsUIWrapper from '../accounts/accounts_ui_wrapper'

//Here we are passing in the props from our route into our main layout file.
// Note that the FlowRouter docs recommend the syntax { region1, region2 } which just passes in those two args from the props object.  Instead, we want to pass in the entire object, which will also include our reactive data. 
export const AppLayout = (props) => {

  //here, we are referencing the route region as a property of props, calling it, and then passing along the props object as an arg so that reactive data can be accessed by the component associated with this region in the route definition
	return (
		<div>
		<AccountsUIWrapper />
		<div>{props.content(props)}</div>
		</div>
	)
}