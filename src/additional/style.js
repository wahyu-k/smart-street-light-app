/**This is the style file that can be access
 * in case to use the style.
 * This style categorized by every pages and
 * component's pages, so I recommend you write:
 * 0. import this file and named by 'style'
 * 1. ROOT_STYLE = style_file.pages
 * 2. S_XXXX = ROOT_STYLE.component.style
 *    ^ this S stand for STYLE
 */

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
          backgroundColor: '#A4EC69',
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
  maps: {
    map: {
      view: {
        flex: 1,
      },
    },
    card: {
      view: {
        position: 'absolute',
        justifyContent: 'flex-end',
        alignItems: 'center',
        bottom: 50,
      },
      button: {
        view: {
          backgroundColor: '#fefefe',
          height: 80,
          width: 270,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 30,
          marginHorizontal: 8,
        },
        image: {
          resizeMode: 'cover',
          height: 65,
          width: 65,
          marginRight: 16,
          borderRadius: 50,
        },
        title: {
          fontWeight: 'bold',
        },
      },
    },
  },
};
