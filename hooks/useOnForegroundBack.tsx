import React, { useEffect, useState } from "react";
import { AppState, AppStateStatus } from "react-native";


/**
 * Hook to run a function when the app comes back to the foreground.
 * 
 * Foreground refers to the app being open and visible to the user.
 * 
 * @param runOnForegroundBack Function to run when the app comes back to the foreground.
 */
export default function useOnForegroundBack(runOnForegroundBack: () => void) {
  const [appState, setAppState] = useState<AppStateStatus>(AppState.currentState);
  const [isBackToForeground, setIsBackToForeground] = useState(true);

  useEffect(()=> {
    console.log("SECOND USE EFFECT");
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
        if (appState.match(/inactive|background/) && nextAppState === "active") {
          console.info("App has come back to the foreground!");
          runOnForegroundBack();
          setIsBackToForeground(true);
        } else {
          setIsBackToForeground(false);
        }
        setAppState(nextAppState);
      };
  
      const subscription = AppState.addEventListener(
        "change",
        handleAppStateChange
      );
  
      return () => {
        subscription.remove();
      };
  }, [appState]);
}
