import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "$palette.white"
  },
  errorImage: {
    maxWidth: "150%",
    transform: [{ translateY: -30 }]
  }
});

export default styles;
