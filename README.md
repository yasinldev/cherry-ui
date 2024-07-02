<img src="./public/img.png">

English | [Türkçe]()

Cherry UI is a carefully crafted library of React components designed for developing modern web applications. It offers comprehensive and high-quality components that allow developers to create aesthetic and functional interfaces that enrich the user experience. Cherry UI allows you to achieve consistent and expressive designs while accelerating your projects.

## Usage
```tsx
import { Container, Row, Column } from 'cherry-ui';

function App() {
    return (
        <Container fluid>
            <Row>
                <Column sizes={[{ size: 'md', column: 6 }, { size: 'xs', column: 12 }]}>
                    This column takes up half the width on medium screens and full width on extra small screens.
                </Column>
                <Column sizes={[{ size: 'md', column: 5 }, { size: 'xs', column: 12 }]} offset={[{ size: 'md', column: 1 }]}>
                    This column takes up half the width on medium screens and full width on extra small screens.
                </Column>
            </Row>
        </Container>
    );
}

export default App;
```

## Contributing

Please read our [Contributing Guidelines](./CONTRIBUTING.md) before contributing to Cherry UI. We welcome all contributions that align with our guidelines and principles.

## License

Cherry UI is licensed under the [MIT License](./LICENSE).

