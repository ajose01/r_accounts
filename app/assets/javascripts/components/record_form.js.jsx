var RecordForm = React.createClass({
  getInitialState : function() {
    return {
      title: "",
      date: "",
      amount: ""
    }
  },
  handleChange : function(e) {
    var name = e.target.name;
    var nextState = {};
    nextState[name] = e.target.value;
    this.setState(nextState);
  },
  handleSubmit : function(e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '',
      data: {record: this.state },
      success: function(data){
        this.setState(this.getInitialState());
        this.props.handleNewRecord(data);
      }.bind(this)
    })
  },
  valid : function() {
    return (!this.state.title || !this.state.date || !this.state.amount ) ? false : true;
  },
  render : function() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit} >
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Date" name="date" value={this.state.date} onChange={this.handleChange} />
          <input type="text" className="form-control" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange} />
          <input type="number" className="form-control" placeholder="Amount" name="amount" value={this.state.amount} onChange={this.handleChange} />
          <button type="submit" className="btn btn-primary" disabled={!this.valid()} >Create record</button>
        </div>
      </form>
    )
  }
})



