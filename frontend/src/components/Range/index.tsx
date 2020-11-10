import React from "react";

import { Container } from "./styles";

interface Props {
  actualValue: number;
  totalValue: number;
}
const Range: React.FC<Props> = ({ actualValue, totalValue }) => (
  <Container widthProps={(actualValue / totalValue) * 100}>
    <div className="progress-bar" />
  </Container>
);

export default Range;
