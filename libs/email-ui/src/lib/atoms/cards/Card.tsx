import React from 'react';
import { Card } from '@mantine/core';
import { CardProps } from './Card.types';

export default function ArticleCard(props: CardProps) {
    const { children, ...otherProps } = props;

    return (
        <Card {...otherProps}>
            {children}
        </Card>
    );
}
