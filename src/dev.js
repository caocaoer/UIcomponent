import React from 'react';
import { render } from 'react-dom';

import SliderValidate from './sliderValidate';

render(
    <SliderValidate 
        sliderFinish={() => {
            console.log('滑动完成！');
        }}
    />,
    document.getElementById('app')
);