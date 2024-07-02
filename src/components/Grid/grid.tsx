import React from 'react';
import PropTypes from 'prop-types';
import './css/cherry-grid.css';

// Improved Type Definitions
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type Column = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

// Container Component
interface ContainerProps {
    fluid?: boolean;
    size?: Size;
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ fluid, size, children }) => (
    <div className={`cherry-container${size ? `-${size}` : ''} ${fluid ? 'is-fluid' : ''}`}>
        {children}
    </div>
);

Container.propTypes = {
    fluid: PropTypes.bool,
    size: PropTypes.oneOf<Size>(['sm', 'md', 'lg', 'xl']),
    children: PropTypes.node.isRequired,
};

// Row Component
interface RowProps {
    children: React.ReactNode,
}

const Row: React.FC<RowProps> = ({ children }) => <div className="cherry-row">{children}</div>;

Row.propTypes = {
    children: PropTypes.node.isRequired,
};

// Column Component

type ColumnSize = { size: Size; column: Column }[];
interface ColumnProps {
    sizes: ColumnSize;
    offset?: ColumnSize;
    reset?: boolean;
    children: React.ReactNode;
}

const Column: React.FC<ColumnProps> = ({ sizes, offset, children, reset }) => {
    const sizeClasses = sizes.map(({ size, column }) => `column-${size}${reset ? '-reset' : ''}-${column}`).join(' ');
    const offsetClasses = offset ? offset.map(({ size, column }) => `offset-${size}-${column}`).join(' ') : ''; // Conditionally add offset classes

    return <div className={`${sizeClasses} ${offsetClasses}`}>{children}</div>;
};

// Centralized Prop Validation
const validSizes: Size[] = ['xs', 'sm', 'md', 'lg', 'xl'];
const validColumns: Column[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const validateProp = (props: any, propName: string, componentName: string, validValues: any[]) => {
    const propValue = props[propName];
    if (propValue && !validValues.includes(propValue)) {
        return new Error(
            `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Expected one of: ${validValues.join(', ')}.`
        );
    }
    return null;
};

Column.propTypes = {
    sizes: PropTypes.arrayOf(
        PropTypes.exact({
            size: (props, propName, componentName) => validateProp(props, propName, componentName, validSizes),
            column: (props, propName, componentName) => validateProp(props, propName, componentName, validColumns),
        })
    ).isRequired as React.Validator<ColumnSize>,
    offset: PropTypes.arrayOf(  // Validation for 'offset'
        PropTypes.exact({
            size: (props, propName, componentName) => validateProp(props, propName, componentName, validSizes),
            column: (props, propName, componentName) => validateProp(props, propName, componentName, validColumns),
        })
    ) as React.Validator<ColumnSize>,
    reset: PropTypes.bool,
    children: PropTypes.node.isRequired,
};


export { Container, Row, Column };