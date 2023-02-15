import React, { useContext, useState, useEffect } from "react";
import { ProfileContainer } from "./ProfileContainer";
import { FirebaseContext } from "../context/firebase";
import { Loading } from '../component'

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
    loading ? (
      <Loading src={user.photoURL} />
    ) : null
  ) : (
    <ProfileContainer user={user} setProfile={setProfile} />
  );
}
