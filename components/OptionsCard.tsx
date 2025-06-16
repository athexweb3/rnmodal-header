import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import Color from "color";
import { BlurView } from "expo-blur";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const OptionsCard = ({
  cardData,
}: {
  cardData: {
    title: string;
    cards: { id: string; icon: string; title: string; description: string }[];
  };
}) => {
  const theme = useTheme();
  const { title, cards } = cardData;
  return (
    <View>
      <Text style={[styles.title, { color: theme.colors.text }]}>{title}</Text>
      <View
        style={[
          styles.cardsContainer,
          {
            borderColor: theme.colors.border,
          },
        ]}
      >
        <BlurView
          intensity={80}
          tint="default"
          style={StyleSheet.absoluteFillObject}
        />
        {cards.map((card, cardIndex) => (
          <View
            key={card.id}
            style={[
              styles.card,
              cardIndex !== 0 && {
                borderTopWidth: 1,
                borderTopColor: theme.colors.border,
              },
            ]}
          >
            <View style={styles.cardIconContainer}>
              <Ionicons
                name={card.icon as any}
                size={24}
                color={theme.colors.text}
              />
            </View>
            <View style={styles.cardContent}>
              <Text style={[styles.cardTitle, { color: theme.colors.text }]}>
                {card.title}
              </Text>
              <Text
                style={[styles.cardDescription, { color: theme.colors.text }]}
              >
                {card.description}
              </Text>
            </View>
            <View style={styles.cardChevronContainer}>
              <Ionicons
                name={"chevron-forward"}
                size={24}
                color={Color(theme.colors.text).alpha(0.2).toString()}
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 10,
  },
  cardsContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 28,
    paddingHorizontal: 18,
    overflow: "hidden",
  },
  card: {
    paddingVertical: 18,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "600",
  },
  cardDescription: {
    fontSize: 13,
    opacity: 0.7,
    marginTop: 3,
  },
  cardIconContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  cardChevronContainer: {
    width: 20,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
