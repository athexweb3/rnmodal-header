# Iymra UI Header Package

Flexible, beautiful React Native header and UI components for Expo/React Native projects.

## Features

- Customizable dynamic (`Container`) Component 
- TypeScript types for all components
- Easy integration and theming

## Installation

```bash
npm install rnmodal-header
# or
yarn add rnmodal-header
# or 
bun add rnmodal-header
```

```diff
- "main": "dist/index.js",  // Used for npm consumers
+ "main": "expo-router/entry", // Used for local Expo development
```
## Usage Example

```tsx
import { Container } from "rnmodal-header/components";

// Example usage in a screen:
<Container
      title="Settings" // Title of Header
      icon="cog-outline" // Icon of Header
      subtitle="Manage your preferences" // Subtitle of Header
      onClose={() => console.log('Close settings')} // Function on Press close button n header
    >
        <View>Your Container Codes</View>
    </Container>
```

## Components & Props

### Container
```ts
type ContainerProps = {
  title: string;
  icon: ComponentProps<typeof Ionicons>["name"];
  subtitle: string;
  children: React.ReactNode;
  onClose: () => void;
};
```

## Development & Contributing

Clone the repo and run:

```bash
npm install  | bun install | yarn install
npm start    | bun start   | bun start
```

## Credit

This package was originally forked from [expo-blurred-header-transition](https://github.com/arunabhverma/expo-blurred-header-transition) from [Arunabh Verma](https://github.com/arunabhverma) and inspired by the Expo community.

## License

MIT
