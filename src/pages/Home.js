import React from "react";
import { Feature, OptForm } from "../component";
import { JumbotronContainer } from "../containers/Jumbotron";
import { FaqsContainer } from "../containers/Faqs";
import { FooterContainer } from "../containers/Footer";
import { HeaderContainer } from "../containers/Header";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes, and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email Address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
