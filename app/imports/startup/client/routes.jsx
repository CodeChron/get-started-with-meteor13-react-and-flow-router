import {FlowRouter} from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

//Templates
import {AppContainer} from '../../ui/global/app_container'
import {Homepage} from '../../ui/pages/homepage'

FlowRouter.route('/', {
  name: 'homepage',
  action() {
    mount(AppContainer, {
      content: <Homepage />
    })
  }
})
