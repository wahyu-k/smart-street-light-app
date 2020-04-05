/**This is the icon file that can be access
 * in case to use the icon.
 * This icon categorized by every pages and
 * component's pages, so I recommend you write:
 * 0. import this file and named by 'icon'
 * 1. ROOT_ICON = icon_file.pages
 * 2. I_XXXX = ROOT_STYLE.component.icon
 *    ^ this I stand for ICON
 */

export default {
  mainApp: {
    bottomTab: {
      home: 'home',
      maps: 'map-marker',
      data: 'table',
      info: 'info-circle',
    },
  },
  home: {
    data: {
      climate: 'cloud',
      location: 'location-city',
      voltage: 'local-gas-station',
    },
  },
};
