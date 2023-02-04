import React from "react";
import * as ROUTES from "../constants/routes";
import { Header } from "../component";
import logo from "../logo.svg";

export function ProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="logo" />
        </Header.Frame>
      </Header>
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
            <Profiles.User>
                <Profiles.Picture src={user.photoURL} />
                <Profiles.Name>{user.displayName}</Profiles.Name>
            </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}
