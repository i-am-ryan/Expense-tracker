import { useClerk } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../constants/colours.js'
import { Alert, Text, TouchableOpacity } from 'react-native'
import { styles } from '../assets/styles/home.styles.js'

export const SignOutButton = () => {
  // Use `useClerk()` to access the `signOut()` function
  const { signOut } = useClerk()

  const handleSignOut = async () => {
      Alert.alert("Logout", "Are you sure you want to sign out?", [
        {text: "Cancel", style: "cancel"},
        {text: "Logout", style: "destructive", onPress: signOut}
      ])
  }
  return (
    <TouchableOpacity styles = {styles.logoutButton} onPress={handleSignOut}>
      <Ionicons name="log-out-outline" size={22} color={COLORS.text} />
    </TouchableOpacity>
  )
}