import styled from "styled-components";

const ErrorContainer = styled.div`
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  padding: 20px;
  color: #721c24;
`;

const ErrorTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ErrorMessage = styled.p`
  font-size: 18px;
`;

const ErrorComponent = ({ error }) => {
  return (
    <>
      <h1>Hello world</h1>
      <ErrorContainer>
        <ErrorTitle>Error</ErrorTitle>
        <ErrorMessage>{error}</ErrorMessage>
      </ErrorContainer>
    </>
  );
};

export default ErrorComponent;
