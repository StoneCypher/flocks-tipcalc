
var TipCalcPanel = flocks.createClass({

  render: function() {

    return (

      <div id="panel">

        <label id="amt" for="billAmount">
          Bill amount: $<input id="billAmount"/>
        </label>

        <div id="howHappy">
          <input type="button" value={"25%"}/>
          <input type="button" value={"20%"}/>
          <input type="button" value={"15%"}/>
        </div>

        <div id="result">
          Total: $
        </div>

      </div>

    );

  }

});
