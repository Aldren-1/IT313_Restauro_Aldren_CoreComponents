
import { Image, Pressable, StyleSheet, Text, View, } from 'react-native';


type StudentCardProps = {
  id: string;
  name: string;
  year: string;
  photoUrl: string;
  flagged: boolean;
  onToggleFlag: (id: string) => void;
};

export default function StudentCard({
  id,
  name,
  year,
  photoUrl,
  flagged,
  onToggleFlag,
}:StudentCardProps) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: photoUrl }}
        style={styles.photo}
      />

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.year}>{year}</Text>

        <Pressable
          onPress={() => onToggleFlag(id)}
          style={({ pressed }) => [
            styles.flagButton,
            flagged ? styles.flaggedButton : styles.unflaggedButton,
            pressed && styles.pressedButton,
          ]}
        >
          <Text style={styles.buttonText}>
            {flagged ? 'Flagged' : 'Flag for Advising'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 12,
    margin: 10,
    borderRadius: 10,
    elevation: 3,
  },

  photo: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },

  info: {
    flex: 1,
    marginLeft: 12,
  },

  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222222',
  },

  year: {
    fontSize: 14,
    color: '#777777',
    marginVertical: 5,
  },

  flagButton: {
    padding: 8,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },

  unflaggedButton: {
    backgroundColor: '#2563EB',
  },

  flaggedButton: {
    backgroundColor: '#16A34A',
  },

  pressedButton: {
    opacity: 0.7,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});


