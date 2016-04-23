import React from 'react'

//Here we are passing in the props from our route into our main layout file.  The name 'content' here corresponds to the prop name in the route.  We need to 'call' the prop, ie using '()', because it's return value is a function, and this is what allows for passing through props and returning props via callbacks.
export const App = ({content}) => <div>{content()}</div>