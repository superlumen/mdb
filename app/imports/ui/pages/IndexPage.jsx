import React from "react"
import { connect } from "react-redux"
import { incrementCount } from "/imports/state/actions"
import { PublicIndex } from '/imports/ui/components/public/PublicIndex'
import { DashboardContainer } from '/imports/ui/components/dashboard/DashboardContainer.js'

class Index extends React.Component {
  renderApp() {
    return (
      <div>
        <DashboardContainer/>
      </div>
    )
  }

  renderPublic() {
    return (
      <div>
        <PublicIndex/>
      </div>
    )
  }

  render() {
    const { user } = this.props
    if (user) {
      return this.renderApp()
    }
    else return this.renderPublic()
  }
}

function mapStatesToProps(state) {
  return {
    count: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increment: (count) => {
      dispatch(incrementCount(count))
    }
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(Index)
