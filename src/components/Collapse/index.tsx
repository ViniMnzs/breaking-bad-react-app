import React, { ReactNode, useEffect, useState } from 'react';
import { BiChevronDownCircle, BiChevronUpCircle } from 'react-icons/bi';

import { Container, Heading, Content } from './styles';

type Props = {
  visible: ReactNode;
  invisible: ReactNode;
  open: boolean;
};

const Index: React.FC<Props> = ({ visible, invisible, open }) => {
  const [isOpen, setIsOpen] = useState(open);
  const Icon = isOpen ? (
    <BiChevronDownCircle
      size={20}
      color="#000"
      style={{ backgroundColor: 'transparent' }}
    />
  ) : (
    <BiChevronUpCircle
      size={20}
      color="#000"
      style={{ backgroundColor: 'transparent' }}
    />
  );

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  function openClick(): void {
    setIsOpen(!isOpen);
  }

  return (
    <Container>
      <Heading onClick={openClick}>
        {visible}
        {Icon}
      </Heading>
      <Content open={isOpen}>{invisible}</Content>
    </Container>
  );
};

export default Index;
