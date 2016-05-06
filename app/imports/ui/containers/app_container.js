import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { AppLayout }  from '../layouts/app_layout'

//here we are creating a data container
// add props as an arg so that anything coming from the router is passed through to AppLayout - see http://guide.meteor.com/react.html#data
export default createContainer(() => {

	const signedIn = Meteor.user() !== null


	//Our only reactive data source here is Meteor.user(), which returns null if no user is signed in, and the user object if they are.
  return {
    signedIn,
    foo: "bar"
  }

//As the second argument, we pass in the sub-component that will have access to this data via props
}, AppLayout)
