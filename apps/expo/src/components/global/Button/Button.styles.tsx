import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  button: {
    borderRadius: 4,
    backgroundColor: "red",
    paddingVertical: 8,
    paddingHorizontal: 24
  },
  textButton: {
    textAlign: "center"
  },
  primaryButton: {
    backgroundColor: "$palette.primary"
  },
  secondaryButton: {
    backgroundColor: "$palette.white",
    borderWidth: 1,
    borderColor: "$palette.primary"
  },
  primaryText: {
    color: "$palette.white"
  },
  secondaryText: {
    color: "$palette.primary"
  }
});

export default styles;
