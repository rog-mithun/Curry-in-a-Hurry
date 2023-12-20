import React from 'react';

export default function Price({ price, locale, currency }) {
  const formatPrice = () =>
    new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'INR',
    }).format(price).replace('INR', ''); // Remove currency symbol and add 'INR' at the end

  return <span>{formatPrice()} INR</span>;
}

Price.defaultProps = {
  locale: 'en-IN', // Update the locale if needed
  currency: 'INR',
};
