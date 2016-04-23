import {FlowRouter} from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

//Note that we are not enclosing this object in curly braces.  This is because it was exported as the default.  It also allows us to rename it in place.  We could call this BaconContainer if we wanted.
import AppContainer from '../../ui/containers/app_container'

//We also need to import all pages we'll be using for our routes
import {Homepage} from '../../ui/pages/homepage'

FlowRouter.route('/', {
  name: 'homepage',
  action() {
    mount(AppContainer, {
      //Here we are passing data via props from the AppContainer into the homepage.  Note that the content param now is a function and needs to be called in the MainLayout component. Also, note that we are using the 'copy props' feature which passes along all props from the parent component, in this case AppContainer.
      content: (props) => <Homepage {...props} />
    })
  }
})
