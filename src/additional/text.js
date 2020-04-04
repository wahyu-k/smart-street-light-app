/**This is the text file that can be access
 * in case to use the text.
 * This text categorized by every pages and
 * component's pages, so I recommend you write:
 * 0. import this file and named by 'text'
 * 1. ROOT_TEXT = text_file.pages
 * 2. T_XXXX = ROOT_STYLE.component.text
 *    ^ this T stand for TEXT
 */

export default {
  home: {
    lastUpdate: 'Last Update:',
    load: {
      charge: 'Charge',
      discharge: 'Discharge',
    },
    data: {
      climate: {
        title: 'Climate',
      },
      location: {
        title: 'Location',
        id: 'Device Id: ',
        name: 'Device Name: ',
        lat: 'Latitude: ',
        lng: 'Longitude: ',
      },
      voltage: {
        title: 'Voltage',
        v1: 'Cell 1: ',
        v2: 'Cell 2: ',
        v3: 'Cell 3: ',
        v4: 'Cell 4: ',
        vTot: 'Total: ',
      },
    },
    power: 'Power: ',
  },
};
