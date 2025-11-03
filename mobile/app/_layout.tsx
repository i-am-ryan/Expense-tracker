import { Stack } from "expo-router";
import { ClerkProvider } from '@clerk/clerk-expo'
import { Slot } from 'expo-router'
import Safescreen from "../components/SafeScreen"
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { StatusBar } from "expo-status-bar";


export default function RootLayout() {
  return (

    <ClerkProvider tokenCache={tokenCache}>
      <Safescreen>
      <Slot />
      </Safescreen>
      <StatusBar style = "dark" />
    </ClerkProvider>
  );
  
}

