import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'

//Note that the need for this package is new for Meteor 1.3.  If you are using an older version of Meteor, you'd use the React-Layout package
import { mount } from 'react-mounter'

//We also need to import all layouts and pages we'll be using for our routes
import { AppLayout } from '../../ui/layouts/app_layout'
import { Homepage } from '../../ui/pages/homepage'

FlowRouter.route('/', {
  name: 'homepage',

  action() {
    mount(AppLayout, {
      content: <Homepage />
      }
    )
  }
})
