
var TipCalcLayout = flocks.createClass({

  render: function() {

    var tdstyle = { verticalAlign: 'middle', textAlign: 'center' };

    return (
      <table id="layout">
        <tr>
          <td style={tdstyle}>{this.props.children}</td>
        </tr>
      </table>
    );

  }

});
