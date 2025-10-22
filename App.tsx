import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import ProfileSection from "./components/ProfileSection";
import SkillCard from "./components/SkillCard";
import ProjectCard from "./components/ProjectCard";

export default function App() {
  const habilidades = [
    { emoji: "⚛️", nombre: "React", nivel: "Básicos" },
    { emoji: "🖥️", nombre: "HTML5", nivel: "Intermedio" },
    { emoji: "🐍", nombre: "Python", nivel: "Básico" },
    { emoji: "🧠", nombre: "Logica de programacion", nivel: "Básico" },
    { emoji: "🖌️", nombre: "CSS / TailwindCSS", nivel: "Intermedio" },
    { emoji: "🧩", nombre: "Git y GitHub", nivel: "Intermedio" },
    { emoji: "🗄️", nombre: "Bases de Datos (SQL)", nivel: "Básico" },
    
  ];

  const proyectos = [
    {
      emoji: "🫂",
      titulo: "Playfull learning",
      descripcion: "Sistema de clases en linea interactivas.",
      tags: ["Node.js", "React", "Vite"],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Sección de Perfil */}
      <ProfileSection />

      {/* Separador */}
      <View style={styles.separator} />

      {/* Sección de Habilidades */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Mis Habilidades</Text>
        </View>
        {habilidades.map((habilidad, index) => (
          <SkillCard
            key={index}
            emoji={habilidad.emoji}
            nombre={habilidad.nombre}
            nivel={habilidad.nivel}
          />
        ))}
      </View>

      {/* Separador */}
      <View style={styles.separator} />

      {/* Sección de Proyectos */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Mis Proyectos</Text>
        </View>
        {proyectos.map((proyecto, index) => (
          <ProjectCard
            key={index}
            emoji={proyecto.emoji}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            tags={proyecto.tags}
          />
        ))}
      </View>

      {/* Espaciado final */}
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffafc",
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 25,
  },
  sectionHeader: {
    borderLeftWidth: 4,
    borderLeftColor: "#ff6fbf",
    paddingLeft: 12,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2d4bff",
  },
  separator: {
    height: 1,
    backgroundColor: "#f6eaf6",
    marginHorizontal: 20,
    marginVertical: 25,
  },
});
