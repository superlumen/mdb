import React from "react"
import { createContainer } from "meteor/react-meteor-data"
import AppPage from '/imports/ui/pages/AppPage.jsx'

export default AppContainer = createContainer(() => {
  return {
    user: Meteor.user()
  }
}, AppPage)
