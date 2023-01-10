import React from "react";
import { Container, Input, Button, Text, Break } from "./Optform";
import ArrowRight from  "../../images/icons/chevron-right.png"

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}{" "}
      <img src={ArrowRight} alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function optFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function optFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};