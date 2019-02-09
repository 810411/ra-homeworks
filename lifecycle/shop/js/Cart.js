class Cart extends React.Component {

  shouldComponentUpdate(nextProps) {
    const {isOpen, items} = this.props;

    return isOpen !== nextProps.isOpen ||
      isOpen && (items.length !== nextProps.items.length);
  }

  render() {
    console.log('Cart update');
    return (
      <CartView {...this.props} />
    );
  }
}
