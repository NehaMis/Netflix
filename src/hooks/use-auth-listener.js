import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../components/context/firebase";

export default function UseAuthListener() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("authUser")));
    const { firebase } = useContext(FirebaseContext);
    //4:42
    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged((authUser) => {
            if (authUser) {
                localStorage.setItem("authUser", JSON.stringify(authUser));
                setUser(authUser);
            } else {
                localStorage.removeItem("authUser");
                setUser(null);
            }
        });

        return () => listener();
    }, []);

    return { user };
}
