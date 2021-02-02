import React from "react";
import { Feature, OptForm } from "../components";
import HeaderContainer from "../containers/header";
import FaqsContainer from "../containers/faq";
import FooterContainer from "../containers/footer";
import JumbotronContainer from "../containers/jumbotron";

export default function Home({ children }) {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited movies, Tv shows and more </Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel at any time</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder="Email Address" />
                        <OptForm.Button>Try it now</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>Ready to watch? Enter your email to create or start your membership </OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
}
