import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    lastUpdateText: {
        paddingLeft: 16,
    },
    ampereText: {
        fontSize: 16,
        fontWeight: "bold"
    },
    ampereTextView: {
        flexDirection: "row",
        paddingTop: 6,
    },
    flowchartImg: {
        width: 50,
        height: 50,
    },
    flowchartWrap: {
        alignItems: "center",
    },
    percentageText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    flexToRow: {
        flexDirection: "row",
    },
    batteryWrap: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginVertical: 12,
    },
    arrowWrap: {
        justifyContent: "center",
        margin: 4,
    },
    arrowImg: {
        width: 30,
        height: 30,
    },
    powerText: {
        fontWeight: "bold",
        fontSize: 16,
    },
    powerWrap: {
        justifyContent: "center",
        flexDirection: "row",
        marginBottom: 4,
    },
    flowchartOrgWrap: {
        flexDirection: "row",
        justifyContent: "center",
    },
    dataTitleText: {
        fontWeight: "bold",
        fontSize: 16,
        letterSpacing: 3,
        marginLeft: 3,
    },
    dataTitleWrap: {
        flexDirection: "row",
        marginLeft: 16,
        marginBottom: 8,
        alignItems: "center",
    },
    dataValueText: {
        backgroundColor: "#f8f8f8",
        paddingLeft: 44,
        marginBottom: 10,
        flexDirection: "row",
    },
    dataWrapOrg: {
        marginBottom: 4,
    },
    navbarIcon: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    navbarWrap: {
        backgroundColor: "white",
        height: 55,
        flexDirection: "row",
        shadowColor: "#000000",
        elevation: 5,
        shadowRadius: 100,
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: -1,
        }
    },
});