class Child extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <React.Fragment>
          <Log info="in Child" />
          <React.Fragment><Log info="in Consumer"/><p>Hello {this.props.drillProp1}, {this.props.appProp1}</p></React.Fragment>
        </React.Fragment>
      )
    }
}
