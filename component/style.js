import { Dimensions, StyleSheet } from "react-native";
//
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#FFFFFF',

  },

  btn_orange: {
    position: "absolute",
    width: 212,
    height: 74,
    border: "none",
    backgroundColor: "#F9762D",
    left: windowWidth / 2 - 212 / 2,
    bottom: 60,
    borderRadius: 30,
  },
  textInbutton: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 74 / 2 - 10,
    textAlign: "center",
  },
  banner: {
    marginTop:50,
    width: '90%',
    //height: '40%',
    marginBottom: 10,
    borderRadius:30,
  },
  title_wrap:{
    position:'absolute',
    bottom:200,
    alignItems:'center',
  },
  headerTitle: {
    width: windowWidth - 50,
    /* Heading_Onboarding */
    // fontFamily:  'Roboto, Helvetica, sans-serif',
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 28,
    marginBottom:20,
    textAlign: "center",
    color: "#000000",
  },
  subTitle: {
    width: windowWidth - 80,
    /* Heading_Onboarding */
    // fontFamily: 'Nunito',
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 17,
    textAlign: "center",
    color: "#000000",
    marginTop:10,
  },
  backIcon: {
    width: 58,
    height: 58,
  },
  slide_point: {
    width: 59,
    height: 9,
    marginBottom:20,
  },
  btn_login: {
    position: "absolute",
    border: "none",
    backgroundColor: "#F9762D",
    borderRadius: 30,
    position: "absolute",
    width: 150,
    height: 74,
    left: windowWidth / 2 - 150 - 20,
    bottom: 60,
  },
  btn_signin: {
    position: "absolute",
    border: "none",
    backgroundColor: "#F9762D",
    borderRadius: 30,
    position: "absolute",
    width: 150,
    height: 74,
    left: windowWidth / 2 + 20,
    bottom: 60,
  },
  btn_back: {
    position: "absolute",
    width: 58,
    height: 58,
    right: windowWidth / 2 + 58 + 70,
    bottom: 70,
  },
});
