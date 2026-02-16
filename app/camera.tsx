import { StyleSheet, View } from 'react-native';
import CameraFrame from '@/screens/CameraFrame';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import { Link } from 'expo-router';

export default function CameraScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Détecteur de Couleurs
      </ThemedText>
      
      <CameraFrame />

      <Link href="/" dismissTo style={styles.link}>
        <ThemedText type="link">← Retour</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    marginBottom: 30,
  },
  link: {
    marginTop: 30,
    paddingVertical: 15,
  },
});
