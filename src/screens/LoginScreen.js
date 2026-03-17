import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { supabase } from '../lib/supabase';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const validateInput = () => {
        if (!email.trim() || !password.trim()) {
            Alert.alert('Error', 'Please enter both email and password.');
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            Alert.alert('Error', 'Please enter a valid email address.');
            return false;
        }
        if (password.length < 6) {
            Alert.alert('Error', 'Password must be at least 6 characters long.');
            return false;
        }
        return true;
    };

    const handleLogin = async () => {
        if (!validateInput()) return;
        setLoading(true);
        const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
        if (error) Alert.alert('Error', error.message);
        setLoading(false);
    };

    const handleSignUp = async () => {
        if (!validateInput()) return;
        setLoading(true);
        const { error } = await supabase.auth.signUp({ email: email.trim(), password });
        if (error) Alert.alert('Error', error.message);
        else Alert.alert('Success', 'Check your email to confirm your account');
        setLoading(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>kyo</Text>
            <Text style={styles.subtitle}>your daily goals, delivered</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
                <Text style={styles.buttonText}>{loading ? 'Loading...' : 'Login'}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.secondaryButton} onPress={handleSignUp} disabled={loading}>
                <Text style={styles.secondaryText}>Create Account</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#fff' },
    title: { fontSize: 48, fontWeight: 'bold', textAlign: 'center', marginBottom: 8 },
    subtitle: { fontSize: 16, textAlign: 'center', color: '#888', marginBottom: 48 },
    input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 12, padding: 16, marginBottom: 16, fontSize: 16 },
    button: { backgroundColor: '#000', borderRadius: 12, padding: 16, alignItems: 'center', marginBottom: 12 },
    buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
    secondaryButton: { alignItems: 'center', padding: 16 },
    secondaryText: { color: '#888', fontSize: 16 },
});