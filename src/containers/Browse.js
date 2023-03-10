import React, { useContext, useState, useEffect } from "react";
import { ProfileContainer } from "./ProfileContainer";
import { FirebaseContext } from "../context/firebase";
import { Loading, Header } from "../component";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

export default function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1">
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="logo" />
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallout>Watch Joker Now</Header.FeatureCallout>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <ProfileContainer user={user} setProfile={setProfile} />
  );
}
