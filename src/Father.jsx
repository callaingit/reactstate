class Father extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <React.Fragment>
          <Log info="in Father" />
          <Child drillProp1={this.props.drillProp1} appProp1={this.props.appProp1}></Child>
        </React.Fragment>
      )
    }
}
