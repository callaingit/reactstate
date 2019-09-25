class GrandFather extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      console.log("in GrandFather.render()")
      return(
        <React.Fragment>
          <Log info="in GrandFather" />
          <Father drillProp1={this.props.drillProp1} appProp1={this.props.appProp1}></Father>
        </React.Fragment>
      )
    }
}
