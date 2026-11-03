import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, } from 'react-native';


import StudentCard from '../components/StudentCard';

export default function StudentDirectory() {

  const [students, setStudents] = useState([
    {
      id: 's1',
      name: 'Ana Cruz',
      year: '3rd Year',
      photoUrl: 'https://mamp.one/wp-content/uploads/2024/09/image-resources2.jpg',
      flagged: false,
    },
    {
      id: 's2',
      name: 'Bea Santos',
      year: '2nd Year',
      photoUrl: 'https://mamp.one/wp-content/uploads/2024/09/image-resources2.jpg',
      flagged: false,
    },
    {
      id: 's3',
      name: 'Cid Ramos',
      year: '4th Year',
      photoUrl: 'https://mamp.one/wp-content/uploads/2024/09/image-resources2.jpg',
      flagged: false,
    },
    {
      id: 's4',
      name: 'Dex Alonzo',
      year: '1st Year',
      photoUrl: 'https://mamp.one/wp-content/uploads/2024/09/image-resources2.jpg',
      flagged: false,
    },
    {
      id: 's5',
      name: 'Eli Tan',
      year: '3rd Year',
      photoUrl: 'https://mamp.one/wp-content/uploads/2024/09/image-resources2.jpg',
      flagged: false,
    },
  ]);

  const [query, setQuery] = useState('');


  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(query.toLowerCase())
  );


  const toggleFlag = (id: string) => {
    setStudents((previousStudents) =>
      previousStudents.map((student) =>
        student.id === id
          ? { ...student, flagged: !student.flagged }
          : student
      )
    );
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Student Directory</Text>

      <Text style={styles.subtitle}>
        Students for Academic Advising
      </Text>


      <TextInput
        style={styles.searchInput}
        placeholder="Search student name..."
        value={query}
        onChangeText={setQuery}
      />

      <ScrollView>
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <StudentCard
              key={student.id}
              id={student.id}
              name={student.name}
              year={student.year}
              photoUrl={student.photoUrl}
              flagged={student.flagged}
              onToggleFlag={toggleFlag}
            />
          ))
        ) : (
          <Text style={styles.noResults}>
            No students found.
          </Text>
        )}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    paddingTop: 55,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginHorizontal: 15,
  },

  subtitle: {
    fontSize: 14,
    color: '#777777',
    marginHorizontal: 15,
    marginBottom: 15,
  },

  searchInput: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    marginHorizontal: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDDDDD',
  },

  noResults: {
    textAlign: 'center',
    marginTop: 20,
    color: '#7777777',
  
  },
});
