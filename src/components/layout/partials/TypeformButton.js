import React from 'react';
import Button from '../../elements/Button';
import * as typeformEmbed from "@typeform/embed";


const TypeformButton = ({
  ...props
}) => {

  const typeformReference = typeformEmbed.makePopup(
    'https://a4o6e8mmihw.typeform.com/to/HntxuYyy',
    {
      mode: 'drawer_right',
      onSubmit: function () {
        console.log('Typeform successfully submitted')
      }
    }
  )

  const openTypeform = () => {
    typeformReference.open();
  }

  return (
    <Button tag="a" color="primary" wide onClick={openTypeform} {...props}>
      Contact us for information
    </Button>
  );
}

export default TypeformButton;