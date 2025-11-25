import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';
import { Dropdown } from 'react-native-element-dropdown';

export default function App() {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const data = [
    { label: 'GET', value: 'GET' },
    { label: 'POST', value: 'POST' },
    { label: 'PUT', value: 'PUT' },
    { label: 'DELETE', value: 'DELETE' },
  ];

  const sendRequest = async () => {
    try {
      setLoading(true);
      const res = await axios({
        method,
        url,
        data: body ? JSON.parse(body) : undefined,
      });
      setResponse(JSON.stringify(res.data, null, 2));
    } catch (err:any) {
      setResponse(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mini Postman 🚀</Text>

      {/* Method Dropdown */}
      <Dropdown
        style={styles.dropdown}
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Select Method"
        value={method}
        onChange={(item) => setMethod(item.value)}
      />

      {/* URL ke andar ka input */}
      <TextInput
        style={styles.input}
        placeholder="Enter request URL"
        value={url}
        onChangeText={setUrl}
        autoCapitalize="none"
      />

      {/* Request Body (bass for POST/PUT) */}
      {(method === 'POST' || method === 'PUT') && (
        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Enter JSON body"
          value={body}
          onChangeText={setBody}
          multiline
        />
      )}

      {/* Send Button */}
      <Button
        title={loading ? 'Sending...' : `Send ${method} Request`}
        onPress={sendRequest}
      />

      {/* Response Section */}
      <ScrollView style={styles.responseBox}>
        <Text style={styles.response}>{response}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  responseBox: {
    marginTop: 16,
    backgroundColor: '#f4f4f4',
    padding: 10,
    borderRadius: 8,
    flex: 1,
  },
  response: {
    fontFamily: 'monospace',
    color: '#333',
  },
});
