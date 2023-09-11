import React, { memo } from 'react';
import { Helmet } from 'react-helmet';

export const defaultSetting = {
  titleTemplate: '%s - Ветклиника Лапочка',
  defaultTitle: 'Ветклиника Лапочка',
};

export const Head = memo(() => (
  <Helmet {...defaultSetting}>
    <meta name="description" content="В ветклинике Лапочка мы заботимся о ваших питомцах, как о своей семье" />
  </Helmet>
));

Head.displayName = 'Head';
