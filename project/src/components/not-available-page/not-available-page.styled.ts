import styled from 'styled-components';
import { Link } from '../common/common';

export const NonAvailableText = styled.h1`
  fontSize: '38px';
  fontStyle: 'italic';
  fontWeight: 'bold';
`;

export const NonAvailableLink = styled(Link)`
minHeight: '20vh';
textDecoration: 'none';
fontStyle: 'italic';
fontWeight: 'bold';
`;

export const NonAvailableDiv = styled.div`
  minHeight: '100vh';
  backgroundColor: '#401212';
  justifyContent: 'center';
  alignItems: 'center';
`;

