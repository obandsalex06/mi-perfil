import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface ProjectCardProps {
  emoji: string;
  titulo: string;
  descripcion: string;
  tags: string[];
}

export default function ProjectCard({
  emoji,
  titulo,
  descripcion,
  tags,
}: ProjectCardProps) {
  return (
    <TouchableOpacity style={styles.projectCard}>
      <View style={styles.projectHeader}>
        <Text style={styles.projectEmoji}>{emoji}</Text>
        <Text style={styles.projectTitulo}>{titulo}</Text>
      </View>
      <Text style={styles.projectDescripcion}>{descripcion}</Text>
      <View style={styles.tagsContainer}>
        {tags.map((tag, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  projectCard: {
    backgroundColor: "#fff7fb",
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
  },
  projectHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  projectEmoji: {
    fontSize: 28,
    marginRight: 12,
  },
  projectTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2d4bff",
    flex: 1,
  },
  projectDescripcion: {
    fontSize: 14,
    color: "#6b6b8a",
    lineHeight: 20,
    marginBottom: 12,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  tag: {
    backgroundColor: "#ffd6e8",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  tagText: {
    fontSize: 12,
    color: "#2d4bff",
    fontWeight: "600",
  },
});
