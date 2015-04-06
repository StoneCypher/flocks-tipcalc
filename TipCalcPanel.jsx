
var TipCalcPanel = flocks.createClass({

  update: function() {
    var NewBill = parseFloat(document.getElementById('billAmount').value);
    this.fset('bill', NewBill);
    this.fset('total', NewBill); // TEMPORARY AND WRONG
  },

  render: function() {

    return (

      <div id="panel">

        <label id="amt" htmlFor="billAmount">
          Bill amount: $<input id="billAmount" onChange={this.update}/>
        </label>

        <div id="howHappy">
          <input type="button" value={"25%"}/>
          <input type="button" value={"20%"}/>
          <input type="button" value={"15%"}/>
        </div>

        <div id="result">
          Total: ${this.fctx.total}
        </div>

      </div>

    );

  }

});
