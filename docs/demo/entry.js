
    if(!customElements){
      throw new Error('Custom Elements arent supported');
    }
    //
    
        import Controller from 'pie-controller';
        window.pie = window.pie || {};
        window.pie.Controller = Controller;
import PiePlayer from 'pie-player';
customElements.define('pie-player', PiePlayer);
import PieControlPanel from 'pie-control-panel';
customElements.define('pie-control-panel', PieControlPanel);
import CorespringCalculatorNg15 from 'corespring-calculator-ng15';
customElements.define('corespring-calculator-ng15', CorespringCalculatorNg15);
import CorespringChoice from 'corespring-choice';
customElements.define('corespring-choice', CorespringChoice);
    