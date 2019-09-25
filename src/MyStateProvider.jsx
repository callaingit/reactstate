class MyStateProvider extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        appProp1: 1000
      }
      console.log('Preparing timeout...')
      setTimeout(
        () => { console.log("assigning propa")
                this.setState({appProp1: 1002})
              }
      , 3000)    
    }
    render() {
      console.log("in MyStateProvider.render()")
      return (
      <div appprop1={this.state.appProp1}>
        {this.props.children}
      </div>
      )
    }
}
