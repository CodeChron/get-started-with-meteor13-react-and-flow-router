import {FlowRouter} from 'meteor/kadira:flow-router'
import React from 'react'

//Note that the need for this package is new for Meteor 1.3.  If you are using an older version of Meteor, you'd use the React-Layout package
import { mount } from 'react-mounter'

//Note that we are not enclosing this object in curly braces.  This is because it was exported as the default.  It also allows us to rename it in place.  We could call this BaconContainer if we wanted.
import AppContainer from '../../ui/containers/app_container'

//We also need to import all pages we'll be using for our routes
import {Homepage} from '../../ui/pages/homepage'

FlowRouter.route('/', {
  name: 'homepage',

  action() {
    mount(AppContainer, {
      //Here we are passing the reactive data from AppContainer via props into the homepage by way of AppLayout.  Note that the content param now is a function and needs to be called in the AppLayout component. Also, note that we are using the 'copy props' feature which transfers all props from the parent component, in this case AppLayout.
      content: (props) => <Homepage {...props} />
      }
    )
  }
})
