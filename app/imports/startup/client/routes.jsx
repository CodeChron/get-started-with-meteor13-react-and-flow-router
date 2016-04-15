import {FlowRouter} from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

//Templates
import {MainLayout} from '../../ui/layouts/main_layout'
import {Homepage} from '../../ui/pages/homepage'

FlowRouter.route('/', {
  name: 'homepage',
  action() {
    mount(MainLayout, {
      content: <Homepage />
    })
  }
})
