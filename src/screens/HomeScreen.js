import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { supabase } from '../lib/supabase';

export default function HomeScreen() {
    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) Alert.alert('Error', error.message);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to kyo</Text>
            <Text style={styles.subtitle}>You are logged in!</Text>

            <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, backgroundColor: '#fff' },
    title: { fontSize: 36, fontWeight: 'bold', marginBottom: 8 },
    subtitle: { fontSize: 16, color: '#888', marginBottom: 48 },
    button: { backgroundColor: '#000', borderRadius: 12, paddingVertical: 16, paddingHorizontal: 48, alignItems: 'center' },
    buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
