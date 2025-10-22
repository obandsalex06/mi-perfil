import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface SkillCardProps {
  emoji: string;
  nombre: string;
  nivel: string;
}

export default function SkillCard({ emoji, nombre, nivel }: SkillCardProps) {
  return (
    <View style={styles.skillCard}>
      <Text style={styles.skillEmoji}>{emoji}</Text>
      <View style={styles.skillInfo}>
        <Text style={styles.skillNombre}>{nombre}</Text>
        <Text style={styles.skillNivel}>{nivel}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  skillCard: {
    backgroundColor: "#fff7fb",
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  skillEmoji: {
    fontSize: 32,
    marginRight: 15,
  },
  skillInfo: {
    flex: 1,
  },
  skillNombre: {
    fontSize: 17,
    fontWeight: "600",
    color: "#2d4bff",
    marginBottom: 4,
  },
  skillNivel: {
    fontSize: 13,
    color: "#6b6b8a",
  },
});
