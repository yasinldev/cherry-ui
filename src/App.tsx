import React from 'react';
import { Container, Row, Column } from './components/Grid/grid';

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
