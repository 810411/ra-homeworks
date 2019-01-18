'use strict';

const url = 'https://neto-api.herokuapp.com/etsy';

const Listing = ({items}) => {
  const ItemList = items.map(({listing_id, url, MainImage, title, currency_code, price, quantity}) => {
    const
      locales = 'en-US',
      options = {
        style: 'currency',
        currency: currency_code,
        currencyDisplay: currency_code === 'USD' || currency_code === 'EUR' ? 'symbol' : 'code'
      };

    const levelSize = () => {
      if (quantity <= 10) {
        return 'low'
      } else if (quantity <= 20) {
        return 'medium'
      }
      return 'high'
    };

    return (
      <div className="item" key={listing_id}>
        <div className="item-image">
          <a href={url}>
            <img src={MainImage.url_570xN} alt={MainImage.listing_image_id}/>
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{title.length > 50 ? `${title.slice(0, 50)}...` : title}</p>
          <p className="item-price">{Number(price).toLocaleString(locales, options)}</p>
          <p className={`item-quantity level-${levelSize()}`}>{quantity} left</p>
        </div>
      </div>
    )
  });

  return <div className="item-list">{ItemList}</div>
};

fetch(url)
  .then(response => {
    if (response.status >= 200 && response.status < 300) {
      return response.json()
    } else {
      throw new Error(response.status + response.statusText)
    }
  })
  .then(data => {
    ReactDOM.render(
      <Listing items={data}/>,
      document.querySelector('#root')
    );
  })
  .catch(console.error);
