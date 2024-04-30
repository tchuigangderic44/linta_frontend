import {
  createTheme,
  Button,
  Indicator,
  Anchor,
  Accordion,
  Drawer,
  TextInput,
  PasswordInput,
  NumberInput,
} from "@mantine/core";
import { generateColors } from "@mantine/colors-generator";
const theme = createTheme({
  colors: {
    "main-color": generateColors("#6a71f1"),
  },
  components: {
    Button: Button.extend({
      defaultProps: {
        fw: "normal",
      },
    }),
    Indicator: Indicator.extend({
      defaultProps: {
        color: "transparent",
        //opacity: 1,
      },
      styles: {
        indicator: {
          backgroundColor: "red",
        },
      },
    }),
    TextInput: TextInput.extend({
      styles: {
        label: {
          width: "100%",
        },
        input: {
          fontWeight: "normal",
          fontSize: "medium",
        },
      },
    }),
    PasswordInput: PasswordInput.extend({
      styles: {
        label: {
          width: "100%",
        },
        input: {
          fontWeight: "normal",
          fontSize: "medium",
        },
      },
    }),
    NumberInput: NumberInput.extend({
      styles: {
        label: {
          width: "100%",
        },
        input: {
          fontWeight: "normal",
          fontSize: "medium",
        },
      },
    }),
    Accordion: Accordion.extend({
      defaultProps: {
        px: 0,
      },
      styles: {
        control: {
          paddingRight: 0,
        },
        content: {
          paddingRight: 0,
          paddingLeft: 0,
        },
      },
    }),
    Drawer: Drawer.extend({
      styles: {
        body: {
          paddingLeft: 10,
        },
        header: {
          paddingLeft: 10,
        },
        inner: {
          width: "75%",
        },
      },
      defaultProps: {
        w: "20%",
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        c: "rgba(139, 150, 165, 1)",
      },
      styles: {
        root: {
          textDecoration: "none",
        },
      },
    }),
  },
  breakpoints: {
    break: "1000px",
  },
  activeClassName: "active-element",
  primaryShade: 3,
  primaryColor: "main-color",
});

export default theme;
