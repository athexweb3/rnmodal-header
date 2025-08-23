# Iymra UI Header Package

A flexible and beautiful React Native header component library for Expo/React Native projects. Built for developers who want dynamic headers with smooth animations, customizable actions, and easy theming.



## Features

- **Customizable Dynamic Container** (`Container`) component  
- **TypeScript Support** for all components  
- **Easy Integration** with Expo/React Native projects  
- Supports **custom icons** and **action buttons**  
- Smooth **blur and gradient header effects**  



## Installation

```bash
npm install rnmodal-header
# or
yarn add rnmodal-header
# or
bun add rnmodal-header
````

## Usage Example

```tsx
import { Container } from "rnmodal-header";
import { View } from "react-native";

export default function SettingsScreen() {
  return (
    <Container
      title="Settings"
      icon="cog-outline"
      subtitle="Manage your preferences"
      onClose={() => console.log('Close settings')}
      // Optional: Customize the header icon
      customIcon={{
        source: require('@/assets/logo.png'),
        tintColor: '#ff0000',
      }}
      actions={[
        {
          icon: "save-outline",
          onPress: () => console.log('Save settings'),
        },
        {
          icon: "trash",
          onPress: () => console.log('Delete settings'),
        }
      ]}
    >
      <View>
        {/* Your container content goes here */}
      </View>
    </Container>
  );
}
```


## Components & Props

### `Container`

| Prop          | Type                                                                                                         | Description                                         |
| ------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------- |
| `title`       | `string`                                                                                                     | Header title                                        |
| `icon`        | `ComponentProps<typeof Ionicons>["name"]`                                                                    | Ionicons icon for the header                        |
| `subtitle`    | `string`                                                                                                     | Header subtitle                                     |
| `children`    | `React.ReactNode`                                                                                            | Content inside the container                        |
| `tintColor?`  | `string`                                                                                                     | Optional tint color for the icon                    |
| `onClose`     | `() => void`                                                                                                 | Function to run when the close button is pressed    |
| `bgColor?`    | `string`                                                                                                     | Optional background color for the container         |
| `customIcon?` | `{ source?: any; tintColor?: string }`                                                                       | Optional custom icon with optional tint             |
| `actions?`    | `{ [key: string]: { icon: ComponentProps<typeof Ionicons>["name"]; onPress: () => void; shown?: boolean } }` | Optional action buttons. `shown` defaults to `true` |

**Notes:**

* Actions with `shown: false` will **not be displayed**.
* Close button is always displayed by default.
* First and last action buttons have **rounded corners** automatically.



## Development & Contributing

Clone the repo and run:

```bash
npm install | yarn install | bun install
npm start   | yarn start | bun start
```

Feel free to contribute or submit issues via GitHub.



## Credits

This package is **forked from** [expo-blurred-header-transition](https://github.com/arunabhverma/expo-blurred-header-transition) by [Arunabh Verma](https://github.com/arunabhverma) and inspired by the Expo community.

---

## License

This project is licensed under the **MIT License**.
See the [LICENSE](https://github.com/iymra-org/rnmodal-header?tab=License-1-ov-file) file for full details.
s
```
