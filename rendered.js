function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const products = [
    { name: 'SEND TARGET INFO SYSTEM', price: 20, add: false, dayPrice: false },
    { name: 'BUFF TIME EXTENSION SYSTEM', price: 20, add: false, dayPrice: false },
    { name: 'BUFF PROTECTION SYSTEM', price: 20, add: false, dayPrice: false },
    { name: 'HWID BAN SYSTEM', price: 10, add: false, dayPrice: false },
    { name: 'DRAGON COIN SYSTEM', price: 6, add: false, dayPrice: false },
    { name: 'COSTUME, MOUNT, PET, TIME EXTENSION SYSTEM', price: 20, add: false, dayPrice: false },
    { name: 'EXTRA SOCKET SYSTEM', price: 20, add: false, dayPrice: false },
    { name: 'POISON GAUGE EFFECT SYSTEM', price: 15, add: false, dayPrice: false },
    { name: 'SHAMAN BUFF COLOR SYSTEM', price: 15, add: false, dayPrice: false },
    { name: 'CHARACTER TITLE SYSTEM', price: 20, add: false, dayPrice: false },
    { name: 'EQUIPMENT VIEWER SYSTEM', price: 8, add: false, dayPrice: false },
    { name: 'RACE TOOLTIP - UPDATE', price: 6, add: false, dayPrice: false },
    { name: 'INVENTORY IMAGE - UPDATE', price: 6, add: false, dayPrice: false },
    { name: 'SYSTEM INSTALLATION SERVICE', price: 5, add: false, dayPrice: true }];   
    
    const Input = ({
      value,
      onChange,
      onSubmit }) =>
    {
      return /*#__PURE__*/(
        React.createElement("form", { onSubmit: onSubmit }, /*#__PURE__*/
        React.createElement("input", {
          className: "input",
          type: "number",
          min: "1",
          max: "90",
          value: value,
          onChange: onChange })));
    
    
    
    };
    
    class Price extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
        {
          products,
          sum: 0,
          stayDays: 1 });_defineProperty(this, "onInputChange",
    
    
        e => {
          let stayDays = e.target.value;
          this.setState({ stayDays });
          this.updateSum(stayDays);
        });_defineProperty(this, "onInputSubmit",
    
        e => {
          e.preventDefault();
        });_defineProperty(this, "changeAdd",
    
        index => {
          const { products } = this.state;
          products[index].add = !products[index].add;
          this.setState({
            products });
    
        });_defineProperty(this, "updateSum",
    
        stayDays => {
          const { products } = this.state;
          let allItemsSum = 0;
          let addPrice;
    
          {
            products.map(product => {
              addPrice = product.price * (product.dayPrice ? stayDays : 1);
              product.add ? allItemsSum += addPrice : 0;
            });
          }
    
          this.setState({
            sum: allItemsSum });
    
        });_defineProperty(this, "handleClick",
    
        e => {
          const { index } = e.currentTarget.dataset;
          const { stayDays } = this.state;
    
          this.changeAdd(index);
          this.updateSum(stayDays);
        });}
    
      render() {
        const { products, sum, stayDays } = this.state;
        return /*#__PURE__*/(
          React.createElement("div", { className: "card" }, /*#__PURE__*/
          React.createElement("h2", null, "Price List"), /*#__PURE__*/
          React.createElement("div", { className: "wrap" }, /*#__PURE__*/
          React.createElement("div", { className: "left" }, /*#__PURE__*/
          React.createElement("img", { src: "https://tr-wiki.metin2.gameforge.com/images/archive/5/56/20150313163143%21%C5%9Eaman01.png?raw=true" }), /*#__PURE__*/
          React.createElement("form", null, /*#__PURE__*/
          React.createElement("label", { className: "prev__input form-label", htmlFor: "days" }, "System Installation Service:"), /*#__PURE__*/
          React.createElement(Input, {
            value: stayDays,
            onChange: this.onInputChange,
            onSubmit: this.onInputSubmit,
            id: "days" }), /*#__PURE__*/
    
          React.createElement("label", { className: "after__input form-label", htmlFor: "days" }, "Piece"))), /*#__PURE__*/
    
    
          React.createElement("div", { className: "right" }, /*#__PURE__*/
          React.createElement("ul", null,
          products.map((product, index) => /*#__PURE__*/
          React.createElement("li", {
            "data-index": index,
            onClick: this.handleClick,
            className: "product price__add" },
    
          product.add ? /*#__PURE__*/
          React.createElement("i", { className: "fas fa-check-circle icon icon-delete delete" }) : /*#__PURE__*/
    
          React.createElement("i", { className: "fas fa-plus-circle icon icon-add add" }), /*#__PURE__*/
    
          React.createElement("div", { className: "price__descr" }, /*#__PURE__*/
          React.createElement("div", { className: "price__item" + (product.dayPrice ? ' day-price' : '') }, product.name)), /*#__PURE__*/
    
    
          React.createElement("div", { className: "price" + (product.dayPrice ? ' day-price' : '') }, "\u20AC ", product.price, ".", /*#__PURE__*/React.createElement("sup", null, "00"))))), /*#__PURE__*/
    
    
    
    
          React.createElement("div", { className: "price__summe" }, /*#__PURE__*/
          React.createElement("h3", null, "total:"), /*#__PURE__*/React.createElement("span", { className: "summe-span" }, "\u20AC ",
          sum, ".", /*#__PURE__*/React.createElement("sup", null, "00")))))));
    
    
    
    
    
    
      }}
    
    
    
    ReactDOM.render( /*#__PURE__*/
    React.createElement(Price, null),
    document.getElementById('root'));
    //# sourceURL=pen.js
