var Records = React.createClass({
  getInitialState : function() {
    return {
      records: this.props.data
    }
  },
  getDefaultProps : function() {
    return {
      records: []
    }
  },
  addRecord : function(record) {
    var records = this.state.records.slice();
    records.push(record);
    this.setState({records: records})
  },
  renderRecord : function(key) {
    return <Record key={key} record={this.state.records[key]} />
  },
  render : function() {
    return (
      <div className="records">
        <h2 className="title"> Records </h2>
        <RecordForm handleNewRecord={ this.addRecord } />
        <hr></hr>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.state.records).map(this.renderRecord)}
          </tbody>
        </table>
      </div>
    )
  }
});