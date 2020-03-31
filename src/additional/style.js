export default {
  home: {
    lastUpdate: {
      view: {
        flexDirection: 'row',
        margin: 16,
      },
      text: {
        paddingLeft: 16,
      },
    },
    power: {
      text: {
        fontWeight: 'bold',
        fontSize: 16,
      },
    },
    flowchart: {
      view: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
      arrow: {
        view: {
          justifyContent: 'center',
          margin: 2,
        },
        img: {
          width: 30,
          height: 30,
        },
      },
      battery: {
        view: {
          alignItems: 'center',
          justifyContent: 'center',
          height: 75,
          width: 135,
          borderWidth: 2,
          borderRadius: 8,
          paddingHorizontal: 8,
          marginVertical: 12,
        },
        fill: {
          backgroundColor: '#80e0e0',
          position: 'absolute',
          borderRadius: 6,
          height: '100%',
          alignSelf: 'flex-start',
        },
        text: {
          view: {
            flexDirection: 'row',
          },
          percentage: {
            fontSize: 20,
            fontWeight: 'bold',
          },
        },
      },
      load: {
        view: {
          alignItems: 'center',
        },
        img: {
          width: 50,
          height: 50,
        },
        text: {
          view: {
            flexDirection: 'row',
            paddingTop: 6,
          },
          text: {
            fontSize: 16,
            fontWeight: 'bold',
          },
        },
      },
    },
    data: {
      title: {
        text: {
          fontWeight: 'bold',
          fontSize: 16,
          letterSpacing: 3,
          marginLeft: 3,
        },
        view: {
          flexDirection: 'row',
          marginLeft: 16,
          marginBottom: 8,
          alignItems: 'center',
        },
      },
      list: {
        view: {
          backgroundColor: '#f3f3f3',
          paddingLeft: 44,
          marginBottom: 10,
          flexDirection: 'row',
        },
      },
      view: {
        marginBottom: 4,
      },
    },
    power: {
      text: {
        fontWeight: 'bold',
        fontSize: 16,
      },
      view: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 4,
      },
    },
    scrollView: {
      flex: 1,
      backgroundColor: 'white',
      position: 'relative',
    },
  },
};
