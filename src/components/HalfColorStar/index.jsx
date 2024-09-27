import React from 'react'

import { StarFilled } from '@ant-design/icons';

const HalfColorStar = (props) => {
    const { leftColor } = props

    const halfColorStyle = {
        color: {leftColor},
        WebkitMask: `linear-gradient(to right, ${leftColor}, 50%, transparent 50%)`,
        mask: `linear-gradient(to right, ${leftColor} 50%, transparent 50%)`,
        WebkitMaskSize: '100% 100%',
        maskSize: '100% 100%',
    };

    return <StarFilled style={halfColorStyle} />;
};

export default HalfColorStar;